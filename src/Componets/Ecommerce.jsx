let Ecommerce= ()=>{
  
const employees = [
  { name: "Asha", experience: 1 },
  { name: "Ravi", experience: 3 },
  { name: "Meera", experience: 5 },
  { name: "John", experience: 2 }
];

//   let filterExperience = (employees, minExperience) => {
//   const selected = employees.filter((employee) => {
//     return employee.experience >= minExperience; 
//   });
//   return selected.map((employee) => {
//     return employee.name 
//   });
// };

//   console.log(filterExperience(employees,6));
 

let foundEmployee=(employees,name)=>{
  
 return  (employees.find((employee)=> { return employee.name === name}));

    
     
    
}
   console.log(foundEmployee(employees,"John"));
return(
        <>
           
              
              
            
          
        </>
    )
};

export default Ecommerce;