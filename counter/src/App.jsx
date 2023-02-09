import React from 'react';
import './App.css';
import Home from "./components/home/";
import Gallery from "./components/gallery/";
import Contact from "./components/contact/";
import About from "./components/about/";

import { Routes , Route ,Navigate ,Link } from 'react-router-dom'

function App() {
  return (
   <div>
         {/* naviation with link */}
       <nav>
       <ul>
        <li><Link className='a'  to={'/'}>Counter</Link></li>
        <li><Link className='a' to={'/About'}>Theme</Link></li>
        <li><Link className='a' to={'/Contact'}>Contact</Link></li>
        <li><Link className='a'  to={'/Gallery'}>Gallery</Link></li>
       </ul>
       </nav>
       {/* routing */}

       <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/gallery" element={<Gallery />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/about"   element={<About />}  />
            <Route path="*" element={<Navigate to={'/'} />}/>
        </Routes>
  
         </div>  

);
}

export default App;
