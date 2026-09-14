import {useState} from 'react';
let LoginForm=()=>{

  let [email,setEmail]= useState("");
  let [pass,setPass]= useState("");
  let [feedBack,setFeedBack]=useState("");


  let handleSubmit= (event)=>{
     event.preventDefault();
    if(email.trim() ==="" || pass === ""){
        
        setFeedBack("Fill required fields");
    }else{
        setFeedBack(" Demo for Submitted");
        clear();
    }
     
    }
    let clear=()=>{
        setEmail("");
        setPass("");
        
  }

  
    return(
        <>
        <form className=" p-6" onSubmit={handleSubmit}>
        <h3 className="text-3xl font-bold text-blue-500">Login / Signin</h3>
        <p>Login to continue your practise</p>
        <p>Email: </p> 
        <input className="rounded-sm border border-black bg-white " onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="Enter Email Id" value={email}/> 
        <p>Password</p> 
        <input className="rounded-sm border border-black bg-white " onChange={(event)=>{setPass(event.target.value)}} type="password" placeholder="password" value={pass}/> <br/>
        <input type="checkbox"></input> <span> Remember me</span> <br/>
        
        <p>Frontend practise demo</p>
        <button className="w-full bg-blue-500 border border-black text-black rounded-sm shadow-md" type="submit" >Login</button>
        <p>{feedBack}</p>
        </form >
        </>
    )
};

export default LoginForm;