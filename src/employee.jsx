
// //it works
// const Employee = (props) => {
//     console.log(props);
//     return <h3> Employee Name: {props.firstName} {props.lastName} {props.age} </h3> 
// };
// export default Employee; 


const Employee = ({firstName, lastName, age}) => {
    return <h3> Employee Name: {firstName} {lastName} who's age is : {age} </h3> 
};
export default Employee; 



