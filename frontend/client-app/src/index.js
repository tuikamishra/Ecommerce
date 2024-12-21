import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
 import ProductCatgMgt from './adminviews/ProductCatgMgt';
  import StateMgt from './adminviews/StateMgt';
 import CityMgt from './adminviews/CityMgt';
 import Product from './adminviews/Product';
import ProductList from './adminviews/ProductList';
//   import VendorReg from './vendorviews/VendorReg';
//  import VendorLogin from './vendorviews/VendorLogin';
 import CustomerLogin from './customerviews/CustomerLogin';
  import CustomerReg from './customerviews/CustomerReg';
//  import Bill from './customerviews/Bill';
// import BillById from './customerviews/BillByID';
import MainPage from './MainPage';
 const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <BrowserRouter>

     <MainPage/>
     </BrowserRouter>
    // <React.StrictMode>
    // //  {/* // <ProductCatgMgt/> */}
    //   <StateMgt/>
    //   <CityMgt/>
// {/* //       <Product/> 
// //    <ProductList/>   */}
// //     {/* <VendorLogin/>
// //     <VendorReg/>  */}
//      {/* <CustomerReg/>
// //      <CustomerLogin/> */}
// //       {/* {/* <Bill/> */}
// //      {/* <BillById/>  */}
//  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
