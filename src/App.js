import React, { useState } from 'react'
import data from './data'
import List from './List'
import SinglePerson from './SinglePerson'
function App() {
  const [people, setPeople] = useState(data)

  // const [isOpen, setIsOpen] = useState(true)


  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List 
              people={people}   />
        
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
      {/* {isOpen && <SinglePerson    />} */}
    </main>
  )
}

export default App
