import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ReactDom from 'react-dom/client';
import VendorHome from './VendorHome';
import Cookies from 'js-cookie';

function VendorLogin(){
    const[uid,setUid]=useState();
    const[upass,setUpass]=useState();
    const[ischecked,setIsChecked]=useState(false);

    const handleUIdtext=(e)=>{
        setUid(e.target.value);
    }
    const handleUpassText=(e)=>{
        setUpass(e.target.value);
    }
    useEffect(()=>{
        var mycookies=Cookies.get('vauth');
        if(mycookies!=undefined){
            var obj=JSON.parse(mycookies);
            setUid(obj.username);
            setUpass(obj.password);
        }
    },[])

 

    const handleLoginButton=()=>{
        axios.get("http://localhost:9999/vendor/login/"+uid+"/"+upass).then((res)=>{
            alert(res.data.VUserId);
            if(res.data.VUserId!=undefined){
                if(ischecked==true){
                    const userData={
                        username:uid,
                        password:upass
                    };
                    const expirationTime=new Date(new Date().getTime()+6000000);
                    //store data in cookies
                    Cookies.set('vauth',JSON.stringify(userData),{expires:expirationTime})
                }

                //session handling code
                const userSessionData={
                    vuserfullname:res.data.VendorName
                };
                const sessionExpirationTime= new Date(new Date().getTime()+60000);
                //store data in session
                sessionStorage.setItem('vsessionauth',JSON.stringify(userSessionData),sessionExpirationTime);

                const root=ReactDom.createRoot(document.getElementById('root'));
                var obj={
                    vfname:res.data.VendorName,
                    vpicname:res.data.VPicName,
                    vid:res.data.Vid
                };
                alert(obj.vfname+"picname="+obj.vpicname+"vid= "+obj.vid)

                root.render(<VendorHome data={obj}></VendorHome>)
            }else{
                alert("Invalid username or password");
            }
        })
    }

    const handleIsRemember=()=>{
        setIsChecked(true)
    }
    return(
        <div>
            <center>
                <h4>Vendor Login Form</h4>
                <table>
                    <tr>
                        <td>User Id</td>
                        <td>
                            <input type='text' onChange={handleUIdtext} value={uid}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type='password' onChange={handleUpassText} value={upass}/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type='submit' onClick={handleLoginButton}>Login</button>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type='checkbox' onClick={handleIsRemember}/><span>Remember Me</span>
                        </td>
                    </tr>
                </table>
            </center>
        </div> 
    )

}export default VendorLogin