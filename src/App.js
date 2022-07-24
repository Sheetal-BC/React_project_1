import React, {useState} from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {
  const [usersList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge, uCollege) =>{
    setUserList((prevUserList) =>{
       return [...prevUserList,
         {name:uName, age:uAge, college:uCollege,id: Math.random().toString()},
        ];
    });
  };


  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>

    </React.Fragment>
  );
}

export default App;
