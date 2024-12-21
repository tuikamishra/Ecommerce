import React from "react";
import {Link , Outlet} from "react-router-dom";
import "../index.css";


function About()
{
 return(
    <div>
      <center>
       {/* <img src={ customer1} height={300} width={1100}/>  */}
      <nav>
        <div>
          wellcome to About page
            <Outlet/>
        </div>
      </nav>
      </center>
    </div>

 )
}export default About;