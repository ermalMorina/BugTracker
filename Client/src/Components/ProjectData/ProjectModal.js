import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap'
import axios from 'axios'
import ProjectData from './ProjectData'
export default function ProjectModal(props) {
    const {propsProj , ids, emailProp}= props
      const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
    const [open, setOpen] = React.useState(false)

    const [projectProblem, setProjectProblem]= useState(null)


    function handleSubmit(e){
        e.preventDefault();
        if(projectProblem != null){
            console.log("id",ids)
            console.log("prpr",projectProblem)
            console.log("email",emailProp)
            console.log("BALOO",`http://localhost:5000/api/ProjectDatas/${ids}`)
            
            const data= {
                id:ids,
                projectProblem: projectProblem ,
                projectProgress: 0,
                email:emailProp
            }
            console.log(data)
            axios.put(`http://localhost:5000/api/ProjectDatas/${ids}`,data)
        .then(
            res =>{
                console.log("res",res)
            }
        )
        .catch(error => {
            
            console.error('There was an error!', error);
        });
        // axios({
        //     method: 'PUT',
        //     url: `http://localhost:5000/api/ProjectDatas/${ids}`,
        //     data: {
        //         id:ids,
        //         projectProblem:projectProblem,
        //         projectProgress:0,
        //         email:JSON.parse(email)
        //     }
        //   }).then((response) => {
        //     console.log(response);
        //     console.log("SENT")
        //   }, (error) => {
        //     console.log(error);
        //     console.log("SENTERROR")
        //   });
        }else{
            console.log("error")
        }
    }


    function handleInput(e){
        setProjectProblem(e.target.value) 
    }
    return (
        <div>
            <Button color="primary" onClick={toggle}><i class="far fa-edit"></i>edit</Button>
            <Modal isOpen={modal} toggle={toggle}  style={{ width:"500px" }}>
            <ModalHeader toggle={toggle}>Form REGLOG</ModalHeader>
            <ModalBody>
            <div className="bodyProjectData">
            <textarea onChange={handleInput}  class="txtAreaProject" type="text" rows="5" cols="18" placeholder="Enter your message" >{propsProj}</textarea>
            <br />
            <button onClick={handleSubmit} className="submitProjectData">Submit your Finished Project</button>
        </div>
            </ModalBody>
            <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
        </div>
    )
}
ProjectModal.defaultProps={
    propsProj:null,
    ids:null,
    emailProp:null
}