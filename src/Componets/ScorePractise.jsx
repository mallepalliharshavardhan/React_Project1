 import {useState} from 'react';
 let ScorePractise= (props)=>{
 
    let [score,setScore] = useState(5);
 
    return(
        <>
        <h4> {props.name}:{score}</h4>
        <button type="button" onClick={()=>{setScore(score +3)}}>Add3</button>
        <button type="reset" onClick={()=>{setScore(5)}} >Reset</button>
        <button onClick={()=>{if(score >= 2){setScore(score-2)}else if(score <= 1){ setScore(0)}}}> Sub-2</button>
        </>
    )
  
};

export default ScorePractise;