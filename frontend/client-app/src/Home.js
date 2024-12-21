import React from "react";
import {Link , Outlet} from "react-router-dom";
import "../index.css";


function Home()
{
 return(
    <div>
      <center>
       {/* <img src={ customer1} height={300} width={1100}/>  */}
      <nav>
        <div>
          wellcome to homepage
            <Outlet/>
        </div>
      </nav>
      </center>
    </div>

 )
}export default Home;