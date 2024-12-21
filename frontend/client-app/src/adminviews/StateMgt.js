import React, {useState, useEffect} from "react"; 
import axios from "axios";

function StateMgt() {    
    const [stid, setStId] = useState();
    const [stname, setStName] = useState();
    const [stlist, setStList] = useState([]);
    
    const handleStIdText = (evt) => {   
        setStId(evt.target.value);
    }
    
    const handleStNameText = (evt) => { 
        setStName(evt.target.value);
    }
    
    useEffect(() => {
        axios.get("http://localhost:9999/state/show").then((res) => {
            setStId(res.data.length+1);
            setStList(res.data);
        })
    },[]);

    const handleSaveButton = () => {
        var obj = {
            stid: stid,
            stname: stname
        }
        axios.post("http://localhost:9999/state/save", obj)
        .then((res) => {
            alert("State Saved");
        })
        .catch((err) => {
            alert(err);
        })
    }

    return (
        <div>
            <center>
            <h3 style={{backgroundColor:"Blue",color:"white"}}> State Entery Form</h3> 
                <table> 
                     {/* <h5 style={{backgroundColor: "green", color: "white"}}>State Entery Form</h5>  */}
                    <table>
                        <tr>
                            <td>State Id</td>
                            <td><input type="text" onChange={handleStIdText} value={stid}/></td>
                            
                        </tr>
                        <tr>
                            <td>State Name</td>
                            <td><input type="text" onChange={handleStNameText}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button type="submit" onClick={handleSaveButton}>Save</button></td>
                        </tr>
                    </table>
                </table>
                
                {/* <h5 style={{backgroundColor:"green", color:"white"}}>State List</h5> */}
                <table>
                    <tr>
                        <th>State ID</th>
                        <th>State Name</th>
                    </tr>
                    {
                        stlist.map((item) => (
                            <tr>
                                <td>{item.stid}</td>
                                <td>{item.stname}</td>
                            </tr> 
                        ))
                    }
                </table>
            </center>
        </div>
    );
}

export default StateMgt;