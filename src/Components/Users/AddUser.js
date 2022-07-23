import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from './AddUser.module.css';
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName]=useState('');
    const [enteredAge, setEnteredAge]=useState('');
    const [error, setError] = useState();
  
    const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title:'Invalid input',
        message:'Please enter a valid name and age (non-empty values).',
      });  
      
      return;
    }
    if(+enteredAge < 1){
      setError({
        title : 'Invalid age',
        message: 'Please enter a valid age(>0).',
      });
        return;
    }
   props.onAddUser(enteredUserName,enteredAge);
    setEnteredUserName('');
    setEnteredAge('');
  };

  const userNameChangeHandler = (event) =>{
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) =>{
    setEnteredAge(event.target.value);
  };

  const errorHander = () =>{
    setError(null);
  }




  return (
    <Wrapper>
   { error && (
   <ErrorModel
     title={error.title}
     message={error.message}
     onConfirm={errorHander}
     />
   )}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">User Name</label>
      <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler}/>
      <label>Age(Years)</label>
      <input id="age" 
      type="number"  
      value={enteredAge}
       onChange={ageChangeHandler}
       />
      <Button type="submit">Add User</Button>
    </form>
    </Card>
    </Wrapper>
  );
  
};
export default AddUser;
