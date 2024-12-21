import React from "react";
import { Link,Outlet,} from "react-router-dom";
//import admin4 from "C:/Users/Ayushi/OneDrive/Desktop/UNIVERSAL/Ecommerce/frontend/client-app/src/adnim4.jpg";
//
import "../index.css";
function AdminMain(){
       return(
        <div>
            <center>
                 {/* <img src={admin4} height={300} width={1100}/>  */}
                <nav>
                <div>
                          <Link to="/adminmain/adminlogin">Login</Link>
                         <Link to="/adminreg">Registration</Link>
                         </div>
                 <Outlet/>
                </nav>
            </center>
        </div>
       )


}export default AdminMain;