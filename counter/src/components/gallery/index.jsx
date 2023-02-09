
import React, { useEffect, useState ,useRef } from 'react'
import './gallery.css'
import axios from "axios";


function Gallery() {
    let [data , setData] = useState([])
    let [cat , setCat] = useState("")
    const description = useRef("")
    const result = useRef("")
    let getProduct = async ()=>{
      try {
       const response = await axios.get(`https://better-pullover-tuna.cyclic.app/products`)
       console.log(response)
       setData(response.data.data)


    } catch (error) {
        console.log("error: ",error)
      }
    }
    useEffect(()=>{
     getProduct()    

    },[])
    const post = async (e) => {
      try {
          const name = document.getElementById('name').value;
          const price = document.querySelector('#price').value;
          // cat
          const desc = description.current.value
          console.log(name, price, cat, desc);

          const response = await axios.post(`https://better-pullover-tuna.cyclic.app/product`, {
              name: name,
              price: price,
              category: cat,
              description: desc
          })
          // handle success
          console.log("response is success");
          console.log(response.data);

          result.current = response.data.message

          e.preventDefault();

          getProduct();
      } catch (error) {
          // handle error
          console.log(error);
          result.current = error.data.message
      }
  }
  
    return (
     <div>
        <h2>Ecommerce</h2>
        <form onSubmit={post}>
       <span > Name:</span><input   type="text" id="name" placeholder="name" required/>
        <br/>
       <span>  price:</span> <input   type="number" id="price" placeholder="00000" required/>
        <br/>
   <span>  Category:</span> <input type="text" id="cat" placeholder="shoes/sport anything" onChange={(e)=>{setCat(e.target.value)}} required/>
   
        <br/>
       <span>  Description:</span> <input  type="text" id="desc" placeholder="description about your product" required ref={description}/>
        <br/><br/>
        <button type="Submit">Submit</button>
    </form>
    

        {data.map((eachproduct , index)=>{
          return <div key={index} id='map'>
                 <h2>{eachproduct?.name}</h2>
                 <p>{eachproduct?.price}</p>
                 <p>{eachproduct?.category}</p>
                 <p>{eachproduct?.description}</p>


          </div>
        })}



    
</div>

 
  
  );
  }
  export default Gallery;