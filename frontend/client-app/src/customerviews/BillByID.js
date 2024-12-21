// import React,{useState,useEffect} from 'react';
// import axios from "axios";

// function BillById(props)
// {
//     const[billidlist,setBillIdList]=useState([]);
//     const[billdetailslist,setBillDetailsList]=useState([]);
//     const[plist,setPList]=useState([]);
//     var pname="";
//     var oprice=0;
//     var total=0;
//     var picname="";
//     useEffect(()=>{
//         //get bill id from db
//         axios.get("http://loaclhost:9999/bill/billshowbillids/"+props.data).then((res)=>{
//             setBillIdList(res.data);
//         }).catch((err)=>{
//             alert(err);
//         })
//         //get product details from db
//         axios.get("http://localhost:9999/product/showproduct")
//         .then((res)=>{
//             setPList(res.data);
//         }).catch((err)=>{
//             alert(err);
//         })
//     },[])
//     const handleBillSelect=(evt)=>{
//         axios.get("http://localhost:9999/bill/showbillbyid/"+evt.target.value).then((res)=>{
//             setBillDetailsList(res.data);
//         }).catch((err)=>{
//             alert(err);
//         })
//     }
//     return(
//         <div>
//             <center>
//                 <p>Customer Id={props.data}</p>
//                 <table>
//                     <tr>
//                         <td>Bill Id</td>
//                         <td>
//                             <select onClick={handleBillSelect}>
//                                 {
//                                     billidlist.map((item)=>(
//                                         <option value={item}>{item}</option>
//                                     ))
//                                 }
//                             </select>
//                         </td>
//                     </tr>
//                 </table>
//                 <table>
//                     <tr>
//                         <th>Bill Id</th>
//                         <th>Customer Id</th>
//                         <th>Product id</th>
//                     </tr>
//                     {
//                         billdetailslist.map((bitem)=>{
//                             <tr>
//                                 <td>{bitem.billid}</td>
//                                 <td>{bitem.cid}</td>
//                                 <td>{bitem.billdate}</td>

//                                 {
//                                     plist.map((pitem)=>{
//                                         if(bitem.pid==pitem.pid)
//                                         {
//                                             pname=pitem.pname;
//                                             oprice=pitem.oprice;
//                                             total=total+parseInt(pitem.oprice);
//                                             picname=pitem.ppicname;
//                                         }
//                                     })
//                                 }
//                                 <td>{pname}</td>
//                                 <td>{oprice}</td>
//                                 <td>
//                                     <img src={"http://localhost:9999/product/getproductimage/"+picname} height="100" width="100"/>
//                                 </td>
//                                 </tr>
//                         })
//                     }
//                 </table>
//                 <p>Total={total}</p>
//             </center>
//         </div>
//     );
// }export default BillById;

// //http://localhost:9995/bill/showbillbyid/1001
import React,{useState,useEffect} from 'react';
import axios from "axios";

function BillById(props)
{
    const[billidlist,setBillIdList]=useState([]);
    const[billdetailslist,setBillDetailsList]=useState([]);
    const[plist,setPList]=useState([]);
    var pname="";
    var oprice=0;
    var total=0;
    var picname="";
    useEffect(()=>{
        //get bill id from db
        axios.get("http://localhost:9999/bill/billshowbillids/"+props.data).then((res)=>{
            setBillIdList(res.data);
        }).catch((err)=>{
            alert(err);
        })
        //get product details from db
        axios.get("http://localhost:9999/product/showproduct")
        .then((res)=>{
            setPList(res.data);
        }).catch((err)=>{
            alert(err);
        })
    },[])
    const handleBillSelect=(evt)=>{
        axios.get("http://localhost:9999/bill/showbillbyid/"+evt.target.value).then((res)=>{
            setBillDetailsList(res.data);
        }).catch((err)=>{
            alert(err);
        })
    }
    return(
        <div>
            <center>
                <p>Customer Id={props.data}</p>
                <table>
                    <tr>
                        <td>Bill Id</td>
                        <td>
                            <select onClick={handleBillSelect}>
                                {
                                    billidlist.map((item)=>(
                                        <option value={item}>{item}</option>
                                    ))
                                }
                            </select>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Bill Id</th>
                        <th>Customer Id</th>
                        <th>Product id</th>
                    </tr>
                    {
                        billdetailslist.map((bitem)=>{
                            <tr>
                                <td>{bitem.billid}</td>
                                <td>{bitem.cid}</td>
                                <td>{bitem.billdate}</td>

                                {
                                    plist.map((pitem)=>{
                                        if(bitem.pid==pitem.pid)
                                        {
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
                                    <img src={"http://localhost:9999/product/getproductimage/"+picname} height="100" width="100"/>
                                </td>
                                </tr>
                        })
                    }
                </table>
                <p>Total={total}</p>
            </center>
        </div>
    );
}export default BillById;

//http://localhost:9995/bill/showbillbyid/1001