import React,{useState,useEffect} from "react";
import axios from "axios";
import CustomerLogin from "./CustomerLogin";
import ReactDom from 'react-dom/client'

function CustomerReg()
{
    const[cuserid,setCUserId]=useState();
    const[cuserpass,setCUserPass]=useState();
    const[customername,setCustomerName]=useState();
    const[stid,setStId]=useState();
    const[ctid,setCtId]=useState();
    const[caddress,setCAddress]=useState();
    const[ccontact,setCContact]=useState();
    const[cemail,setCEmail]=useState();
    const[cpicname,setCPicName]=useState();
    const[image,setImage]=useState({preview:'',data:''});
    const[cid,setCId]=useState();
    const[status,setStatus]=useState('');
    const[stlist,setStList]=useState([]);
    const[ctlist,setCtList]=useState([]);


    const handleCUserId=(e)=>{
        setCUserId(e.target.value);
    }

    const handleCUserPass=(e)=>{
        setCUserPass(e.target.value);
    }
    const handleCustomerName=(e)=>{
        setCustomerName(e.target.value);
    }

    const handleStIdSelect=(e)=>{
        setStId(e.target.value);
        axios.get('http://localhost:9999/city/getcitybystid/'+e.target.value).then((res)=>{
            setCtList(res.data);
        }).catch((err)=>{
            alert(err);
        })
    }

    const handleCtId=(e)=>{
        setCtId(e.target.value);
    }

    const handleCAddress=(e)=>{
        setCAddress(e.target.value);
    }
    const handleCtIdSelect=(e)=>{
        setCtId(e.target.value);
    }

    const handleCContact=(e)=>{
        setCContact(e.target.value);
    }

    const handleCEmail=(e)=>{
        setCEmail(e.target.value);
    }

    const handleCid=(e)=>{
        setCId(e.target.value)
    }
    useEffect(()=>{
        axios.get('http://localhost:9999/customer/getcustomercount/')
            .then((res) => {
                setCId(res.data.length + 1);
            })
            .catch((err) => {
                alert(err);
            })
            axios.get("http://localhost:9999/state/show").then((res)=>{
                setStList(res.data);
            });
    }, [])
    
    const handleAlreadyAcoount=()=>{
        const root=ReactDom.createRoot(document.getElementById('root'));
        root.render(<CustomerLogin/>)
    }

    const handleRegisterButton= async ()=>{
             var obj={
                CUserId:cuserid,
                CUserPass:cuserpass,
                CustomerName:customername,
                StId:stid,
                CtId:ctid,
                CAddress:caddress,
                CContact:ccontact,
                CEmail:cemail,
                CPicName:cpicname,
                Cid:cid,
                Status:"Inactive"
             }
             axios.post('http://localhost:9999/customer/register/',obj).then((res)=>{
                alert(res.data);
             }).catch((err)=>{
                alert(err);
             })
            }

            //browse and save image code
            const handleSubmitButton=async(e)=>{
                e.preventDefault();
                let formData=new FormData();
             formData.append('file',image.data);
             const response=await fetch('http://localhost:9999/customer/savecustomerimage',{
                method:"POST",
                body:formData,
             });
             if(response)
             {
                if(response.statusText=='ok'){
                  setStatus("File Uploaded Succesfully");
                }
                else{
                    setStatus("Failed to Upload File");
                }
             }
          }
 

    const handleFileChange=(e)=>{
        const img={
            preview:URL.createObjectURL(e.target.files[0]),
            data:e.target.files[0]
        }
        setImage(img);
        setCPicName(e.target.files[0].name);
    }
return(
    <div>
        <center>
            <p>Customer Registration Form</p>
            <table className="loginBox" >
                <tr>
                    <td>Customer Id</td>
                    <td>{cid}</td>
                </tr>
                <tr>
                    <td>User Id</td>
                    <td>
                        <input type="number" onChange={handleCUserId}/>
                    </td>
                </tr>
                <tr>
                    <td>User Password</td>
                    <td>
                        <input type="password" onChange={handleCUserPass}/>
                    </td>
                </tr>
                <tr>
                    <td>Customer Name</td>
                    <td>
                        <input type="text" onChange={handleCustomerName}/>
                    </td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>
                        <input type="text" onChange={handleCAddress}/>
                    </td>
                </tr>
                <tr>
                    <td>State </td>
                    <td><select onChange={handleStIdSelect}>
                        {
                            stlist.map((items)=>(
                                <option value={items.stid}>{items.stname}</option>
                            ))
                        }
                        </select></td>
                </tr>
                <tr>
                <td>City</td>
                 <td> <select onChange={handleCtIdSelect}>
                    
                     {/* {
                        //     ctlist.map((items)=>(
                        //         <option value={items.ctid}>{items.ctname}</option>
                        //     ))
                        // } */}
            
                  {
                    Array.isArray(ctlist) && ctlist.length > 0 ? (
            ctlist.map((items) => (
                <option value={items.ctid}>{items.ctname}</option>
            ))
                ) : (
            <option>No cities available</option>  
             )
                }
                </select>
                </td>  
                </tr>
                <tr>
                    <td>Contact</td>
                    <td>
                        <input type="number" onChange={handleCContact} maxLength={10} minLength={10}/>
                    </td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>
                        <input type="email" onChange={handleCEmail}/>
                    </td>
                </tr>
                <tr>
                    <td>Select Photo</td>
                    <td>
                        <input type="file" onChange={handleFileChange} name="file"/>
                        <img src={image.preview} width={100} height={100}/>
                    </td>
                    </tr>
                    <tr>
                        <td>Click to upload Photo</td>
                        <td>
                            <button type="submit" onClick={handleSubmitButton}>Upload</button>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit" onClick={handleRegisterButton}>Register</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Already have an Account</td>
                        <td>
                            <button type="submit" onClick={handleAlreadyAcoount}>Login</button>
                        </td>
                    </tr>
                
               
            </table>
        </center>
    </div>
)
}export default CustomerReg