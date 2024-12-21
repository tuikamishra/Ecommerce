import React, {useState,useEffect} from "react";
import axios from "axios";
import "../index.css"


function ProductCatgMgt()
{
const [pcatgid, setPcatgId]=useState();
const [pcatgname, setPcatgName]=useState();
const [pcatgList, setPcatgList]=useState([]);

const handleTextChange=(evt)=>{
if(evt.target.name==="pcatgid")
{
  setPcatgId(evt.target.value);
}
if(evt.target.name==="pcatgname")
{
   setPcatgName(evt.target.value);
}
}

//save product cod
        const handleSaveButton=()=>{
        var obj={
        pcatgid:pcatgid,
        pcatgname:pcatgname
        }   
        
        axios.post("http://localhost:9999/productcatg/addproductcatg/"+obj.pcatgid+
            "/"+obj.pcatgname).then((res) => {
            alert(res.data);
        }).catch((err) => {
        alert(err);

        })
    }

    //for show product
    useEffect( () => {
            axios.get("http://localhost:9999/productcatg/showproductcatg/")
            .then((res) => {
            setPcatgList(res.data);
            setPcatgId(res.data.length+1);
            }).catch((err)=>{
            alert(err);
            })
        },[]); 

        // for Search product
        const handleSearchButton=()=>{
            axios.get("http://localhost:9999/productcatg/searchproductcatg/"+pcatgid).then((res)=>{
                setPcatgName(res.data.pcatgname);
                alert(res.data.pcatgname);
            }).catch((err)=>{
                alert(err);
            })
        }

       // for update product
        const handleUpdateButton=()=>{
            var obj={
                pcatgid:pcatgid,
                pcatgname:pcatgname
            }
            axios.put("http://localhost:9999/productcatg/editproductcatg/"+obj)
            .then((res)=>{
                alert(res.data);
            }).catch((err)=>{
                alert(err);
            })
        }

        //delete product
        const handleDeleteButton=()=>{
            axios.delete("http://localhost:9999/productcatg/deleteproductcatg/"+pcatgid).then((res)=>{
                setPcatgId("");
                setPcatgName("");
                alert(res.data);
            }).catch((err)=>{
                alert(err);
            })
        }

return(          
        <div>
            <center>
                <h4>
                    Product Category
                </h4>
                    <table>
                        <tr>
                            <td>Product category ID</td>
                            <td><input type="number" value={pcatgid}
                             className="form-control" name="pcatgid" 
                             onChange={handleTextChange}/></td>
                        </tr>


                        <tr>
                            <td>Product category Name</td>
                            <td><input type="text" onChange={handleTextChange} 
                            className="form-control" name="pcatgname" value={pcatgname}/></td>
                        </tr>


                    <tr>
                        <td>
                            
                            <button type="submit" onClick={handleSaveButton}>save</button>
                        </td>
                        

                        
                        <td>
                            
                            <button type="submit" onClick={handleSearchButton}>Search</button>
                        </td>
                    </tr>


                    <tr>
                        <td>
                            
                            <button type="submit" onClick={handleUpdateButton}>Update</button> 
                        </td>
                        <td>
                            
                            <button type="submit" onClick={handleDeleteButton}>Delete</button>
                        </td>
                    </tr>
                    </table>
                     <h4>Category List</h4>
                    <table>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                        {
                                pcatgList.map((item)=>(
                                <tr>
                                    <td>{item.pcatgid}</td>
                                    <td>{item.pcatgname}</td>

                                </tr>
                            ))
                        }                   
                    </table>
            </center>
        </div>          
    );
}export default ProductCatgMgt;