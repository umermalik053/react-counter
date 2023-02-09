
import React, { useState } from 'react'
import './style.css'


function Home() {









    let [count , setcount] = useState(0)
    
    
    
    let increase = () =>{
        setcount(count + 1)
    }
     let decrease = () =>{
        setcount(count - 1)
     }
    return (
     <div id='in'>
       
       <p id='p'>{count}</p>
      <button className='b' onClick={increase}>increase</button>
      <button className='b' onClick={decrease}>decrease</button>
     </div>
  
      
  
  );
  }
  export default Home;