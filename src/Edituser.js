import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

function Edituser() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const {id} = useParams();

    const navigate = useNavigate();
const url ="http://localhost:3000/users/"+id;

    
    console.log(id);

    useEffect(()=>{
        getAllData();
    }, []);
    const getAllData = async()=>{
        
        let response = await fetch(url);
        response = await response.json();
            setName(response.name);
            setAge(response.age);
            setCity(response.city);
            setEmail(response.email);
            setPassword(response.password);
    }

  const updateRecord = async()=>{
    let response = await fetch (url, {
        method:"Put",
        body:JSON.stringify({name, age, city , email , password})
    });
    response = await response.json();
    if(response)
    {
        alert("Record Updated..");
        navigate("/");
    }
  }
  return (
    <div align="center">
      <h1 align="center"> Edit User Data</h1>
      <input type="text" value={name}
      onChange={(event)=>{setName(event.target.value)}}
      placeholder="Enter Name"/> 
         <br /><br />
    <input type="text"
    onChange={(event)=>{setAge(event.target.value)}}
    value={age} placeholder="Enter Age"/> 
         <br /><br />

    <input type="text" value={city}  
    onChange={(event)=>{setCity(event.target.value)}}
    placeholder="Enter City"/> 
         <br /><br />

    <input type="text" value={email}  
    onChange={(event)=>{setEmail(event.target.value)}}
    placeholder="Enter Email"/> 
         <br /><br />

    <input type="password" value={password}  
    onChange={(event)=>{setPassword(event.target.value)}}
    placeholder="Enter Password"/> 
         <br /><br />
    
    <button onClick={updateRecord}> Update Record</button>
    </div>
  )
}
export default Edituser