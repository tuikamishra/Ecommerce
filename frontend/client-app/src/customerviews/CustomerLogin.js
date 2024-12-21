import React,{useState,useEffect} from "react";
import axios from "axios";
import ReactDOM from 'react-dom/client'
import Cookies from "js-cookie";
import CustomerHome from "./CustomerHome";
import '../index.css'
import CustomerReg from './CustomerReg'

function CustomerLogin()
{
    const[uid,setUId]=useState();
    const[upass,setUPass]=useState();
    const[ischecked,setISchecked]=useState(false);

    const handleUId=(e)=>{
        setUId(e.target.value);
    }
    const handleUPass=(e)=>{
        setUPass(e.target.value);
    }

    const RegisterNowButton=()=>{
       const root=ReactDOM.createRoot(document.getElementById('root'));
       root.render(<CustomerReg/>)
    }

    useEffect(()=>{
        var mycookies=Cookies.get('auth');
        if(mycookies!=undefined)
        {
            var obj=JSON.parse(mycookies);
            setUId(obj.username);
            setUPass(obj.password)
        }
    },[])

    const handleLoginButton=()=>{
        const obj={
            CUserId:uid,
            CUserPass:upass,
        }
        axios.post('http://localhost:9999/customer/login',obj).then((res)=>{
            if(res.data.CUserId!=undefined)
            {
                if(ischecked==true)
                {
                    const userData={
                        username:uid,
                        password:upass
                    };
                    const expirationTime=new Date(new Date().getTime()+6000000);
                    Cookies.set('auth',JSON.stringify(userData),{expires:expirationTime});
                }
//session handling
                const userSessionData={
                    userfullname:res.data.CustomerName
                }
                const sessionexpirationtime= new Date(new Date().getTime()+60000);
                               // store data in session
sessionStorage.setItem('sessionauth',JSON.stringify(userSessionData),sessionexpirationtime);

const root=ReactDOM.createRoot(document.getElementById('root'));
var obj={
    cfname:res.data.CustomerName,
    cpicname:res.data.CPicName,
    cid:res.data.Cid
};
root.render(<CustomerHome data={obj}></CustomerHome>)
            }
            else{
                alert("Invalid User Id or Password");
            }
        });
    }

    const handleRemember=()=>{
        setISchecked(true);
    }

    return(
        <div className="mainBlock">
            <center>
                <h3>Customer Login</h3>

               <table className="loginBox" style={{backgroundColor:" #333",color:"white",width:"20px", height:"30px" , marginBlock:"40px"}}>
                <tr>
                    <td>User Id</td>
                    <td>
                        <input type="text" onChange={handleUId}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Password
                    </td>
                    <td>
                        <input type="text" onChange={handleUPass}/>
                    </td>
                </tr>
                <tr>
                    <td>Remember Me</td>
                    <td><input type="checkbox" onClick={handleRemember} id="checkbox"/></td>

                </tr>
               
                <tr>
                      <td>
                        <button id="loginbtn" type="submit" onClick={handleLoginButton}>Login</button>
                    </td>
                </tr>
                <tr>
                    <td>Dont't have account?</td>
                    <td>
                        <button type="submit" class="btn btn-primary" onClick={RegisterNowButton}>SignUp</button>
                    </td>
                </tr>
               </table>
            </center>
        </div>
    )
}export default CustomerLogin