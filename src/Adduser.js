import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import { useSearchParams } from 'react-router-dom'

function Adduser() {
    const [name, setUserName] = useState("");
    const [age, setAge] = useState("");
    const [city , setCity] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();

    
    const createUser= async()=>{
        const url="http://localhost:3000/users";
        let response = await fetch(url,{
            method:"Post",
        body:JSON.stringify({name, age , city , email , password})
        });
        response= await response.json();    
            if (response) {
            //alert("New user added successfully!");
            navigate("/login"); // this line redirects to the login page
}

    }
  return (
    <div style={{ backgroundColor: "rgba(158, 185, 234, 0.21)", padding: "0", margin: "0" }}>
    <div align="center">
        <h1 style={{ color: 'rgba(3, 16, 41, 1)', textAlign: 'center'}}> Welcome </h1>

        <input type="text"
        style={{width:"40%",
                padding:"12px 10px",
                fontSize:"16px",
                border:"2px solid #ccc",
                borderRadius:"5px",
                outline:"none",
                background:"none"
}} 

        onChange={(e)=>{setUserName(e.target.value)}}
         placeholder='Enter Name: ' />
         <br /><br />
        <input type="text"

         style={{width:"40%",
                padding:"12px 10px",
                fontSize:"16px",
                border:"2px solid #ccc",
                borderRadius:"5px",
                outline:"none",
                background:"none"
}} 
        onChange={(e)=>{setAge(e.target.value)}}
        placeholder='Enter Age: ' />
        <br /><br />
        <input type="text"
 style={{width:"40%",
                padding:"12px 10px",
                fontSize:"16px",
                border:"2px solid #ccc",
                borderRadius:"5px",
                outline:"none",
                background:"none"
}} 

        onChange={(e)=>{setCity(e.target.value)}}
        placeholder='Enter City: ' />
        <br /><br />

        <input type="text"

         style={{width:"40%",
                padding:"12px 10px",
                fontSize:"16px",
                border:"2px solid #ccc",
                borderRadius:"5px",
                outline:"none",
                background:"none"
}} 
        onChange={(e)=>{setEmail(e.target.value)}}
        placeholder='Enter Email: ' />
        <br /><br />

        <input type="password"

         style={{width:"40%",
                padding:"12px 10px",
                fontSize:"16px",
                border:"2px solid #ccc",
                borderRadius:"5px",
                outline:"none",
                background:"none"
}} 
        onChange={(e)=>{setPassword(e.target.value)}}
        placeholder='Enter Password: ' />
        <br /><br />
        <button 
         style={{width:"40%",
                padding:"12px 10px",
                fontSize:"25px",
                border:"5px solid rgba(12, 18, 31, 1)",
                borderRadius:"5px",
                outline:"none",
                color:"white",
                fontWeight:"bold",
                backgroundColor:"rgba(9, 25, 54, 1)"
}} 
        onClick={createUser}>Get Added</button>
    </div>
    </div>
  )
}

export default Adduser