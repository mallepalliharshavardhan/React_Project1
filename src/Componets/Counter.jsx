 
import {useState} from 'react';


function Counter(){
    
    let [count,setCount] = useState(0);

    return(
     <>
      <h3 > count:{count}</h3>
        <button onClick={()=>{ setCount(count +2) }} type="button" >increment </button>
        <button onClick={()=>{setCount(count -1)}}> dcrement</button>
        <button type="button" onClick={()=>{ setCount(0)}} >reset</button>
        
    </>
       
    
    )
};

export default Counter;