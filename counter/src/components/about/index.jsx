import React, { useState } from 'react'
import './about.css'



function About() {
    let [isLit, setLit] = useState(true);

    let changeTheme = () => {
      setLit(!isLit);
    }
  
  
    return (
      <div className={!isLit ? "dark" : ""}>
       
        <div id='light'>Room is {(isLit) ? "Lit" : "Dark"}</div>
        <button className='i' onClick={changeTheme}>Click</button>
  
  
      </div> 
  
  );
  }
  export default About;