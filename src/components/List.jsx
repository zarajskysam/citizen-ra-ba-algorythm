import { nanoid } from 'nanoid';
import React from 'react';
import { useEffect, useState } from 'react';
import ElementTree from './ElementTree';

export default function List() {

    
    let [ citizens, setCitisens ] = useState([]);
    
// Обращаемя к серверу за получением данных
    useEffect(() => {
      async function getFetch(url, func) {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(response.message);
          }
  
          const responseArray = await response.json();
          func(responseArray);
        } catch (e) {
          console.error(e);
        }
      } 

      getFetch(process.env.REACT_APP_CITIZEN_TREE, setCitisens); 
    }, [])

    return (
      <div className="container">
        <div className='citizen'>
        {citizens.map(item => (
          <ElementTree key={nanoid()} data={item}/>
        ))}
        </div>
      </div>
    )
}
