import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Getuserdata() 
{
    /*const [uD , setData] = useState([]);
    useEffect(()=>{
        getData();

    }, []);



    async function getData()
    {
    const url ="http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
        console.log(response);
        setData(response);

    }*/
    const [uD , setData] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=>{
        getData();

    }, []);
    async function getData()
    {
    const url ="http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
        console.log(response);
        setData(response);

    }
    const deleteUser=async(id)=>{
      console.log("ID =",id);
        const url="http://localhost:3000/users/"+id;        
        let response = await fetch(url, {
          method:"delete"
        });
        if(response)
            {
            alert(id+" Record has been deleted.");
            getData();
            }
    }
const editUser = async(id)=>{
    console.log(id);
    navigate("/edit/"+id);
}
  {/*return (
    <div>{/*}
        <h1> Loading Data ...</h1>
        <ul style={{display:"flex" ,justifyContent:"space-around" , listStyleType:"none", color:"yellow" , border:"2px solid black", fontWeight:"bold" , backgroundColor:"yellowgreen"}}>
                <li> Name </li>
                <li> Age </li>
                <li> City </li>
                <li> Action  </li>
                
            </ul>
      {
        uD.map((user)=>(
            <ul style={{display:"flex" ,justifyContent:"space-around" , listStyleType:"none", color:"blue" , border:"2px solid black"}}>
                <li> {user.name} </li>
                <li> {user.age} </li>
                <li> {user.city} </li>
                
            </ul>
        ))
      }*/}
      return (
        <>
    <div style={{ backgroundColor: "rgba(158, 185, 234, 0.21)",  padding: "0", margin: "0" }}>
      <h1 style={{ color: 'rgba(3, 16, 41, 1)', textAlign: 'center'}}>Users Data</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: 'rgba(36, 53, 84, 1)', color: 'white', fontWeight: 'bold' }}>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Age</th>
            <th style={thStyle}>City</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Delete</th>
            <th style={thStyle}>Edit</th>
          </tr>
        </thead>
        <tbody>
          {uD.filter(user => user.role !== "admin").map(user => (
            <tr key={user.id} style={{ textAlign: 'center', color: 'blue', borderBottom: '1px solid black' }}>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.age}</td>
              <td style={tdStyle}>{user.city}</td>
              <td style={tdStyle}>{user.email}</td>
              <td style={tdStyle}>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
              <td style={tdStyle}>
                <button onClick={() => editUser(user.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

const thStyle = { padding: '10px', border: '2px solid black' };
const tdStyle = { padding: '10px', border: '1px solid black' };

    
    
 
export default Getuserdata