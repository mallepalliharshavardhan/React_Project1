import {useState} from 'react';
let LoginformI=()=>{
    let [email,setEmail]= useState("");
    let [pass,setPass] = useState("");
    let [feedBack,setFeedBack]= useState("")
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
        <form onSubmit={handleSubmit}>
            <h3>LoginForm</h3>
            <p>Email:</p>
            <input onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="Enter email" value={email}/>
            <input onChange={(event)=>setPass(event.target.value)} type="password" placeholder="Enter password" value={pass}/>
            <button    type="submit"   >Login</button>
            {feedBack}
        </form>
        </>
    );
}

export default LoginformI;