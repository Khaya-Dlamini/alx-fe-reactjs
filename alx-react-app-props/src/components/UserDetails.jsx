import React from "react";
import { useContext } from "react";
import UserContext from "./UserContext";
function UserDetails() {
     const User = useContext(UserContext)
    return (
      <div>
        <p>Name: {User.name}</p>
        <p>Email: {User.email}</p>
      </div>
    );
  }
  
  export default UserDetails;
  