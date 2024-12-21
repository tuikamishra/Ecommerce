import React, { useEffect, useState} from "react";
import ProductList from "../adminviews/ProductList";
import BillByID from "./BillByID";
import ReactDOM from "react-dom/client";
import CustomerLogin from "./CustomerLogin";

function CustomerHome(props)
{
const [custname, setCustName]=useState();
useEffect(() => {
   var obj=JSON.parse(sessionStorage.getItem('sessionauth'));

  if(obj!=undefined&&obj!=null){
    //alert(obj.username);
    setCustName (obj.userfullname);

   }else{
    alert('session expired');
   }
    

})
   const handleShopingButton=()=>{
    const root=ReactDOM.createRoot(document.getElementById("root"));    
    var cid=props.data.cid;
    root.render(<ProductList data={cid}></ProductList>);    
    }
    const handleShowBills=() => {
    const root=ReactDOM.createRoot(document.getElementById("root"));
    var cid=props.data.cid;
    root.render(<BillByID data={cid}></BillByID>);
    }
    const handleLogout=()=>{
    sessionStorage.removeItem('sessionauth');
    alert("Customer Session Closed");
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<CustomerLogin/>);
    }
   
    return( 
    <div>
       <p>Current Session Running For {custname}</p>
        customer Id {props.data.cid}
         <h4 style={{backgroundColor: "yellow"}} >Customer Home Page</h4>
         <h5>Welcome {props.data.cfname}</h5>
         <img src={"http://localhost:9999/customer/getimage/"+props.data.cpicname} height={100} width={100}/>
    <button type="submit" onClick={handleShopingButton} className="btn btn-success">Shoping</button>
   
    <button type="submit" onClick={handleShowBills} className="btn btn-primary" >Show Bills</button>
    
    <button type="submit" className="btn btn-secondary" onClick= {handleLogout}>Logout</button>
    </div>
);
} 
export default CustomerHome;