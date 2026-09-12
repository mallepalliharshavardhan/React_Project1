import {useState} from 'react';
let LoginForm=()=>{

  let [email,setEmail]= useState("");
  let [pass,setPass]= useState("");
  let [feedBack,setFeedBack]=useState("");


  let handleSubmit= (event)=>{
    event.preventDefault();
    if(email.trim() ===" " || pass === " "){
        setFeedBack("Fill required fields");
    }else{
        setFeedBack(" Demo for Submitted");
    }
    

  }

  
    return(
        <>
        <form onSubmit={handleSubmit}>
        <h3>Welcome Back</h3>
        <p>Login to continue your practise</p>
        <p>Email </p> 
        <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="Enter Email Id" value={email}/>
        <p>Password</p> 
        <input onChange={(event)=>{setPass(event.target.value)}} type="password" placeholder="password" value={pass}/> <br/>
        <input type="checkbox"></input> <span> Remember me</span> <br/>
        
        <p>Frontend practise demo</p>
        <button type="submit" >Login</button>
        <p>{feedBack}</p>
        </form >
        </>
    )
};

export default LoginForm;