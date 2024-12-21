import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import cart from 'C:/Users/Ayushi/OneDrive/Desktop/UNIVERSAL/Ecommerce/frontend/client-app/src/adminviews/shopping-cart.png';
import Bill from "../customerviews/Bill";

function ProductList(props) {

    const [itemcount, setItemCount] = useState(0);
    const [selitems, setSelItems] = useState([]);
    const [pcatglist, setPCatgList] = useState([]);
    const [plist, setPList] = useState([]);

    var cname ="";

    useEffect(() => {
        axios.get("http://localhost:9999/product/showproduct").then((res) => {
            setPList(res.data);
        }).catch((err) => {
            alert(err);
        });
        axios.get("http://localhost:9999/productcatg/showproductcatg").then((res) => {
            setPCatgList(res.data);
        }).catch((err) => {
            alert(err);
        });
    }, []);

    const handleBuyBtn = (evt) => {
        setItemCount(itemcount + 1);
        plist.map((item) => {
            if (item.pid == evt) {
                selitems.push(item);
            }
        })
    }
    const handleCheckOutBtn = () => {
        const root = ReactDom.createRoot(document.getElementById("root"));
        var ccid = 1;
        var obj = {
            selitems: selitems,
            cid: ccid
        };
         root.render(<Bill data={obj}></Bill>)
    }
    const handleSearch = (evt) => {
        if (evt.target.value > 0) {
            axios.get("http://localhost:9999/product/showproductbycatgid/" + evt.target.value).then((res) => {
                setPList(res.data);
            }).catch((err) => {
                alert(err);
            });
        } else {
            axios.get("http://localhost:9999/product/showproduct").then((res) => {
                setPList(res.data);
            }).catch((err) => {
                alert(err);
            });
        }
    }
    return (
        <div>
            <h6 style={{backgroundColor: "green", color: "white"}}>Customer Id {props.data}</h6>
            <div>
                <img src={cart} height={50} width={50} />
                <label>{itemcount}</label>
                <button type="submit" onClick={handleCheckOutBtn}>CheckOut</button>
            </div>
            <p>Search By Category<select onClick={handleSearch}>
                <option value="0">All</option>
                {
                    pcatglist.map((pcatgitem) => {
                        <option value={pcatgitem.pcatgid}>{pcatgitem.pcatgname}</option>
                    })
                }
            </select></p>
            <p style={{backgroundColor: "green", color: "white"}}>Product List</p>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Offer Price</th>
                    <th>Category</th>
                    <th>Photo</th>
                    <th>Action</th>
                </tr>
                {
                    plist.map((item) => (
                        <tr>
                            <td>{item.pid}</td>
                            <td>{item.pname}</td>
                            <td>{item.pprice}</td>
                            <td>{item.oprice}</td>
                            <td>
                                {
                                    pcatglist.map((citem) => {
                                        if (citem.pcatgid == item.pcatgid) {
                                            cname = (citem.pcatgname)
                                        }
                                    })
                                }
                                {cname}
                            </td>
                            <td>
                                <img src={"http://localhost:9999/product/getproductimage/" + item.ppicname} height="100" width="100" />
                            </td>
                            <td>
                                <button type="submit" onClick={() => handleBuyBtn(item.pid)}>Add To Cart</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}export default ProductList;