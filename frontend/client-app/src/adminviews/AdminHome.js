import React from "react";
import StateMgt from "./StateMgt";
import CityMgt from "./CityMgt";
import ProductCatgMgt from "../adminviews/ProductCatgMgt";
// import VenderMgt from "./VendorMgt";
import Product from "../adminviews/Product";


import {Outlet, Link, Route, Routes } from "react-router-dom";
import "../index.css";

function AdminHome()
{
     return(
  <div>
    <center>
    <h4>Admin Home Page</h4>
 <nav>
<ul>
    <li>
      <Link to="/statemgt">State</Link>
    </li>
   < li>
      <Link to="/citymgt">City</Link>
    </li>
    <li>
       <Link to="/productcatg">Product Category</Link>
     </li >
    <li>
      {/* <Link to="/vendermgt">Vender Mangement</Link> */}
   </li>
   <li>
       {/* <Link to="/productmgt">Product Mangement</Link> */}
   </li>
</ul>
 </nav>
        <Outlet />
     </center>
   </div>

);
}export default AdminHome;