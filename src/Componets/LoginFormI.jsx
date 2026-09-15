import {useState,useEffect} from 'react';
let LoginformI=()=>{
    let [email,setEmail]= useState("");
    let [pass,setPass] = useState("");
    let [feedBack,setFeedBack]= useState("")

    useEffect(()=>{console.log(email)},[email]);

    let handleSubmit=(event)=>{
       event.preventDefault();
        if(email.trim() === "" || pass === " "){
            setFeedBack(" Fill required fields");
        }else{
            setFeedBack(" Demo form Submitted");
        } clear();
        }

        let clear=()=>{
            setEmail("");
            setPass("");
             
        }
    return(
        <>
        <div className="bg-green-200 gap-y-3 width-full height-screenjustify-center items-centre rounded-md px-4 py-5 shadow-lg box-border gap-4  ">
            <form onSubmit={handleSubmit}>
            <h3>LoginForm</h3>
            <p>Login to continue your practise</p>
            <p>Email:</p>
            <input className="bg-transparent border border-black rounded-sm shadow" onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="Enter email" value={email}/>
           <p>Password:</p>
            <input className="bg-transparent border border-black rounded-sm " onChange={(event)=>setPass(event.target.value)} type="password" placeholder="Enter password" value={pass}/>
            <br/>
            <button  className="bg-blue-400 rounded-xl hover:bg-blue-600 transition-colors px-3 py-1"  type="submit" >Login</button><br/>
            {feedBack}
        </form>
        </div>
        
        </>
    );
}

export default LoginformI;