import React, {useState} from 'react'
import StarsRating from 'stars-rating'
import axios from 'axios';
export default function RateUsForm() {

    
const [rate, setRate]= useState(5);
// localStorage.setItem('username', JSON.stringify(emailR));
const emailLC = localStorage.getItem('username')

    function handleClick(nextValue) {
        setRate(nextValue);
        console.log(nextValue)
        console.log("changed")
    }
    function handleSubmit(){
        console.log("submited rate",rate)
        console.log("RATE",JSON.parse(emailLC))
        axios({
            method: 'POST',
            url: 'http://localhost:5000/api/Ratings',
            data: {
                UserRating:rate,
                Email:JSON.parse(emailLC)
            }
          }).then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    }

    return (
        <div className="upper">
            <h3 >Rate Us</h3>
            <StarsRating 
                count={5}
                half={false}
                onChange={handleClick}
                size={44}
                color1={'black'}
                color2={'yellow'} />
            <button onClick={handleSubmit} className="buttonRateUs" >Submit</button>
            </div>
    )
}
