import { useState } from "react";



let EmployeeForm =()=>{
 
    let [name,Setname]= useState("");
    let [edu,setEdu]= useState("");

    let empDetails= {"name":" ","education":" "};
    let [empValue,setEmpValue]=useState(empDetails);
    let[grpEmp,setGrpEmp] = useState([]);
    
  
    let handleName=(ele)=>{
         Setname(ele.target.value);
    };
    
    

    let handleReset=()=>{setEdu(""); Setname("")};
 
    let handleSubmit=()=>{
        let newEmp= {name,edu};
        setEmpValue(newEmp)

        setGrpEmp((prev)=>[...prev,newEmp]);
          console.log("groupEmp---", grpEmp)
        handleReset();

    }
   
    return(
        <>
        <h4> EmpName:{name}</h4>
        <h4>Education:{edu}</h4>
        <label>Name: </label>
        <input type="text" onChange={handleName} placeholder="Employee Name" value={name}/> <br/>
        <label>Education: </label>
        <input type="text" onChange={(event)=>{setEdu(event.target.value)}} placeholder="Education" value={edu}/>
         <button type="button"  onClick={handleReset}>clear</button>
         <button onClick={handleSubmit} type="button">Submit</button>
               <h1>Hello: {name}</h1>
               <h1>Education: {edu}</h1>
            

            {/* <button onClick={handleSubmit}>submit</button>
            <button onClick={handleReset}>Clear</button> */}

            <h2>Employees</h2>

            <table>
                <tr> 
                    <th> Name</th>
                    <th> Education</th>
                </tr>
                <tr>
                    <td> {}</td>
                    <td> {edu}</td>
                </tr>
            </table>

            {grpEmp.map((emp, index) => (
                <div key={index}>
                    <p>Name: {emp.name}</p>
                    <p>education: {emp.edu}</p>
                    <hr />
                </div>))}
            
        </>
    )
};

export default EmployeeForm;