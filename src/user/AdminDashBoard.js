import React from "react";
import Base from "../core/Base";
import {isAuthenticated} from "../auth/helper/index"

const AdminDashBoard = () => {
const {user: {name,email, role},} = isAuthenticated()


  return (
    <Base title="Welcome to admin area" description="Manage all of your products here">
      <h1>This is AdminDashBoard page</h1>
    </Base>
  );
};

export default AdminDashBoard;
