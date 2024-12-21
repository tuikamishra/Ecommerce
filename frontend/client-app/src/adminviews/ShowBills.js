import React,{useState,useEffect} from "react";
import axios from "axios";

function ShowBills()
{
    const[cutlist,setCustList]=useState([]);
    const[billdetails,setBillDetailsList]=useState([]);
    const[plist,setList]=useState([]);
    var pname="";
    var oprice=0;
    var total=0;
    var picname="";
    const[prevbillid,setprevbillid]=useState(0);
    var prbid=0;
    var k=true;
    
    var count=0;      
    useEffect(()=>{
        //get customer from db
        axios.get("http://localhost:9999/customer/getcustomerlist").then((res)=>{
            setCustList(res.data);
        }).catch((err)=>{
            alert(err);
        })
        //get product details from db
        axios.get("http://localhost:9999/product/showproduct").then((res)=>{
            setPList(res.data);
        }).catch((err)=>{
            alert(err);
        });

        //get total amount from db
        axios.get("http://localhost:9999/paymentdetails/showpaymentdetails").then((res)=>{
        }).catch((err)=>{
            alert(err);
        });
    },[])
    const handleCustomerSelect=(evt)=>{
        axios.get("http://localhost:9999/bill/billshow/"+evt.target.value).then((res)=>{
            setBillDetailsList(res.data);
            setprevbillid(res.data[0].billid);
            prbid=res.data[0].billid;
            alert("First bill Id"+res.data[0].billid+"k="+k);
        }).catch((err)=>{
            alert(err);
        })
    }
    return(
        <div>
            <center>
                <p>Bill List Admin View</p>
                <table>
                    <tr>
                        <td>Customer</td>
                        <td>
                            <select onClick={handleCustomerSelect}>
                                {
                                    cutlist.map((item)=>{
                                        <option value={item.Cid}>
                                            {item.CustomerName+""
                                            +item.Cid}</option>
                                    })
                                }
                            </select>
                        </td>
                    </tr>
                </table>
                <table border={1}>
                    <tr>
                        <th>Bill Id</th>
                        <th>Customer Id</th>
                        <th>Bill date</th>
                        <th>Product Name</th>
                        <th>Product Image</th>
                    </tr>
                    {
                        setBillDetailsList.map((bitem)=>(
                            <tr style={{backgroundColor:"beidge"}}>
                                <td>{bitem.billid}</td>
                                <td>{bitem.cid}</td>
                                <td>{bitem.billdate}</td>
                                {plist.filter((pitem)=>{
                                    if(bitem.pid==pitem.pid)
                                    {
                                        if(bitem.billid!=prbid)
                                        {
                                            prbid=bitem.billid;
                                            total=0;
                                            k=true;
                                        }
                                        if(bitem.billid==prbid){
                                            k=false;
                                        }
                                        pname=pitem.pname;
                                        oprice=pitem.oprice;
                                        total=total+parseInt(pitem.oprice);
                                        picname=pitem.ppicname;

                                    }
                                })
                                }
                                <td>{pname}</td>
                                <td>{oprice}</td>
                                <td>
                                    <img src={"http://localhost:9999/product/getproductimage"+picname} height="100" width="100"/>
                                    <p style={{backgroundColor:"yellow"}}>{k==true?'':total}</p>
                                </td>
                            </tr>
                        ))
                    }
                </table>
            </center>
        </div>
    );
}export default ShowBills;