import React from "react";
import { Link, Outlet} from "react-router-dom";
 //import vendor1 from "C:/Users/Ayushi/OneDrive/Desktop/UNIVERSAL/Ecommerce/frontend/client-app/src/vendor1.webp";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "../index.css";
function VendorMain()
{
    return(
        <div>
            <center>
                  {/* <img src={vendor1} height={300} width={1100}/>   */}
                <nav>
                    <div>
                            <Link to ="/vendormain/vendorlogin"> Login</Link>
                            <Link to ="/vendormain/vendorreg"> Registration</Link>
                    
                            </div>
                    <Outlet/>
                </nav>
            </center>
        </div>
    );
}export default VendorMain;