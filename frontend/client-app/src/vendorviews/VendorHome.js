import React, {useState,useEffect} from "react";
import Product from "../adminviews/Product";
import ReactDOM from "react-dom/client";
import VendorLogin from "./VendorLogin";

function VendorHome(props)
{
    const[vendname,setVendName]=useState();

    useEffect(()=>{
        var obj =JSON.parse(sessionStorage.getItem('vsessionauth'));
        if(obj=undefined&&obj != null)
        {
            //alert(obj.username);
            setVendName(obj.vuserfullname);
        }else{
            alert('Vendor Session expired');
        }
    })
    const handleProductButton=()=>{
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(<Product data={props.data.vid}></Product>)
    }
    const handleLogOut=()=>{
        sessionStorage.removeItem('vsessionauth');
        alert("Vendor  Session Closed");
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(<VendorLogin/>);
    }
    return(
        <div>
            <p>Current Session Running For{vendname}</p>
            <h4 style={{backgroundColor:"yellow"}}>Vonder Home Page </h4>
            <h5>Vender Id {props.data.vid}</h5>
            <h5> Welcome {props.data.vfname}</h5>
            <img src={"http://localhost:9999/vendor/getimage/"+props.data.vpicname} height={100} width={100}/>
            <button onClick={handleProductButton} className="btn btn-primary">Manage Product</button>
            <button type="submit" className="btn btn-secondary" onClick={handleLogOut}>Logout</button>
        </div>
    );
}export default VendorHome;