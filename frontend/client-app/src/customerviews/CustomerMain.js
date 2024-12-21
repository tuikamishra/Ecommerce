import React from "react";
//import customer1 from "C:/Users/Ayushi/OneDrive/Desktop/UNIVERSAL/Ecommerce/frontend/client-app/src/customer1.jpg";
import {Link , Outlet} from "react-router-dom";
import "../index.css";


function CustomerMain()
{
 return(
    <div>
      <center>
       {/* <img src={ customer1} height={300} width={1100}/>  */}
      <nav>
        <div>
         <Link to="/customermain/customerlogin">Login</Link>
            <Link to="/customermain/customerreg">Registration</Link>
          
            <Outlet/>
        </div>
      </nav>
      </center>
    </div>

 )
}export default CustomerMain;