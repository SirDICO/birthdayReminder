import React from 'react';
import List from './List';

const Lists = ({people, removeItem}) => {
  return (
    <>
      {
        people.map((person) =>{
         return  <List person={person} removeItem={removeItem}/>
        })
      }
  
    </>
  );
};

export default Lists;
