import React from "react";
import { useState  } from "react";
import { TextField , Box  ,IconButton } from "@mui/material";
import {Send} from '@mui/icons-material';
import "./contact.css"
import axios from "axios";

function Contact() {
   const [myMessage , setMyMessage] = useState([])
   const [newMessage , setNewMessage] = useState("")

   

    const sendMessage = async (e)=>{
    e.preventDefault()

      console.log("sendMessage: " , newMessage )

      setMyMessage((prev) => {
        return [...prev, { text: newMessage, from: "User" }]
    })

    let response = await axios.post('https://chatbotserver.up.railway.app/message', {
      query: newMessage
  })
  setMyMessage((prev) => {
    return [...prev, { text: response?.data?.message?.text, from: "Chatbot"}]
})


     
     
      let messageWindow = document.querySelector('#messageWindow')
      messageWindow.scrollTo(0, messageWindow.scrollHeight);
        e.target.reset()
   }

  return (
    <Box>

     <div id="messageWindow" className="messagecontainer">
     {myMessage.map((eachMessage ,key)=>{

if (eachMessage.from === "Chatbot") {
                  return <div key={key} className="message-bubble message-left">
                      <div>
                          <div className="from"><b>{eachMessage.from}:</b></div> <span className="text">{eachMessage.text}</span>
                      </div>
                  </div>
              } else {
                  return <div key={key} className="message-bubble message-right">
                      <div>
                      <div className="from"><b>{eachMessage.from}:</b></div><span className="text">{eachMessage.text}</span>
                      </div>
                  </div>
              }
})}

  
  {/* <div className="message-bubble message-left">
    <p className="message-text">
      Hello! How are you today?
    </p>
  </div>
  
  <div className="message-bubble message-right">
    <p className="message-text">
      I'm good, thanks for asking! How about you?
    </p>
  </div>
  
  <div className="message-bubble message-right">
    <p className="message-text">
      I'm good, thanks for asking! How about you?
    </p>
  </div> */}



</div>























  





    {/* message textfield */}
    <form onSubmit={sendMessage}>
      
    <Box sx={{ position: 'fixed', bottom: 3 , width: "100%", display: 'flex' }}>
    <TextField onChange={(e) => { setNewMessage(e.target.value) }} sx={{ width: "95%" }} id="outlined-basic" label='Type A New Message' variant="outlined" />
    <Box >
        <IconButton aria-label="send" size="large" type='submit'>
            <Send  fontSize="inherit" />
        </IconButton>
    </Box>
</Box>
    </form>
</Box>
  )
}
        export default Contact;