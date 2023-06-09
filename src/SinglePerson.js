import React from "react";
import Popup from "reactjs-popup";



const SinglePerson = () =>{
    return (
    <article className="singleList">
      <div className="person img"></div>
       <div className="info">Popup information</div>
     
        <button className="popupBtn">Close</button>  
    </article>
    )
}

export default SinglePerson;