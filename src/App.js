import React, { useState } from 'react';
import data from './data';
import Lists from './Lists';


function App() {
  const [people, setPeople] = useState(data)
  // const [iSClear, setIsClear] = useState(true)

  //best place to remove item
  const removeItem = (id) =>{
    const newItems = people.filter((person) => person.id !== id)
    setPeople(newItems)
  }
  return <main>
       <section className='container'>
       <h3> {people.length} BirthDay List</h3>

        <Lists  people={people} removeItem={removeItem}/>
        <button onClick={()=> setPeople([])}>Remove All</button>
     </section>

    
  </main>
}

export default App;
