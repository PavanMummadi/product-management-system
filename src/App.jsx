//import React from 'reexport default act'
import { useEffect,useState } from "react";
import './App.css';
export default function App() {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    getUserData();
  }, []);
 async function getUserData(){
    const url = 'https://dummyjson.com/users';
    let response = await fetch(url);
    response = await response.json();
    console.log(response.users);
  
    setUsersData(response.users);
  }
    
return (
  <div>
    <h1>Fetch data from API</h1>

    {usersData.map((user) => (
      <ul className="user-list" key={user.id}>
        <li>{user.firstName}</li>
        <li>{user.lastName}</li>
        <li>{user.age}</li>
      </ul>
    ))}

  </div>
);
// return (
//   <div>
//     <h1>Fetch data from API</h1>

//     {usersData.map((user) => (
//       <ul className="user-list" key={user.id}>
//         <li>{user.firstName}</li>
//         <li>{user.lastName}</li>
//         <li>{user.age}</li>
//       </ul>
//     ))}

//   </div>
// );
}