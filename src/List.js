import React, {useState} from "react";
import Lists from "./Lists";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const List = ({person, removeItem}) =>{
    const [showMore, setShowMore] = useState(false)
       const {id, name, age, image, info} = person;

     
        return( 
            <>
          <article key={id} className='person'>
              <img src={image} alt={name} />
               <div>
               <h4>{name}</h4>
              <p>{age} year</p>
              {showMore? info :`${info.substring(0, 50)}...`}
             
             <a type="button" onClick={() => setShowMore(!showMore)}>{showMore? <AiOutlineMinus/> : <AiOutlinePlus/>}</a>
             <button onClick={()=> removeItem(id)} className='remove-btn'>Remove</button>
               </div>
        
          </article>
          <hr></hr>
          </>
        )
      }


export default List;