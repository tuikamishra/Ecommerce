// import React from 'react'
//  import {Router, Link, Routes, Route } from 'react-router-dom';
// //  import {  BrowserRouter as Router,Link, Routes,Route,} from 'react-router-dom';
//  import CustomerMain from './customerviews/CustomerMain';
//  import VendorMain from './vendorviews/VendorMain';
//  import AdminMain from './adminviews/AdminMain';
//  import AdminLogin from './adminviews/AdminLogin';
//  import AdminHome from './adminviews/AdminHome';
//  import AdminReg from './adminviews/AdminReg';
//  import CustomerLogin from './customerviews/CustomerLogin';
//  import CustomerReg from './customerviews/CustomerReg';
//  //import VendorLogin from '../vendorviews/VendorLogin';
//  import VendorLogin from './vendorviews/VendorLogin';


//  //import VendorReg from '../vendorviews/vendorReg';
//  import VendorReg from './vendorviews/VendorReg';

// //  import AdminHome from './adminviews/AdminHome';
// // import './index.css'

 
//  function MainPage() {
//    return (
//      <div>
//   {/* <Router>  */}


//    <nav>
//       <Link to="/adminmain">Admin</Link><span></span> 
//       <Link to="/customermain">Customer</Link><span></span>
//       <Link to="/vendormain">Vendor</Link>
//    </nav>

//    <Routes>
//       <Route path="/adminmain" element={<AdminMain/>}>
//       <Route path='adminlogin' element={<AdminLogin/>}>
//          <Route path='adminhome' element={<AdminHome/>}/>
//       </Route>
//       </Route>
      
      
//       <Route path='/adminreg' element={<AdminReg/>} />

//       {/* //customer */}
//       <Route path="/customermain" element={<CustomerMain/>}>
//       <Route path='customerlogin' element={<CustomerLogin/>}/>
//       <Route path='customerreg' element={<CustomerReg/>}></Route>
//       </Route>

//       {/* //vender */}
//       <Route path='/vendormain' element={<VendorMain/>}>
//       <Route path='vendorlogin' element={<VendorLogin/>}/>
//         <Route path='vendorreg' element={<VendorReg/>}/>
//       </Route>
//    </Routes>
//   {/* </Router>  */}
//   <footer>

//             <p>&copy; Our Website. All rights reserved.</p>
//     </footer>
//      </div>
     
//    );
//  }
 
//  export default MainPage 

//new one 
// import React from 'react';
// import { Link, Routes, Route } from 'react-router-dom';
// import CustomerMain from './customerviews/CustomerMain';
// import VendorMain from './vendorviews/VendorMain';
// import AdminMain from './adminviews/AdminMain';
// import AdminLogin from './adminviews/AdminLogin';
// import AdminHome from './adminviews/AdminHome';
// import AdminReg from './adminviews/AdminReg';
// import CustomerLogin from './customerviews/CustomerLogin';
// import CustomerReg from './customerviews/CustomerReg';
// import VendorLogin from './vendorviews/VendorLogin';
// import VendorReg from './vendorviews/VendorReg';

// function MainPage() {
//   return (
//     <div>
//       <nav>
//         <Link to="/">Home</Link><span> </span> 
//         <Link to="/about">About Us</Link><span> </span> 
//         <Link to ="/more">More information</Link>
//         <Link to="/adminmain">Admin</Link><span> </span> 
//         <Link to="/customermain">Customer</Link><span> </span> 
//         <Link to="/vendormain">Vendor</Link>
//       </nav>

//       <Routes>
//         {/* Welcome Page content directly inside MainPage */}
//         <Route path="/" element={
//           <div>
//             <h1>Welcome to Our E-Commerce Platform</h1>
//             <p>This platform provides a comprehensive solution for managing the activities of administrators, customers, and vendors. Whether you're a seller looking to manage your products or a buyer searching for the best deals, we offer the tools you need for a seamless experience.</p>
//             <h2>Features</h2>
//             <ul>
//               <li>Easy product listing for vendors</li>
//               <li>Secure customer login and registration</li>
//               <li>Admin tools for monitoring and managing users</li>
//               <li>Real-time updates on order statuses</li>
//             </ul>
//             <p>We strive to offer a platform where all stakeholders—vendors, customers, and administrators—can efficiently manage their activities and create value for their businesses.</p>
//             <p>Explore the sections using the links above to get started!</p>
//           </div>
//         } />

//         {/* About Us page content directly inside MainPage */}
//         <Route path="/about" element={
//           <div>
//             <h1>About Us</h1>
//             <p>Our E-Commerce platform is designed to bring convenience, efficiency, and innovation to the online shopping world. We have created a user-friendly interface that caters to both vendors and customers, while providing administrators with the tools they need to oversee operations.</p>
//             <h2>Our Mission</h2>
//             <p>We are committed to bridging the gap between buyers and sellers, offering a smooth and secure environment where transactions can happen with confidence. Our goal is to support businesses in scaling their operations while giving customers access to a wide range of products and services.</p>
//             <h2>Core Values</h2>
//             <ul>
//               <li><strong>Customer Focus:</strong> We prioritize customer satisfaction by providing an intuitive interface and responsive customer support.</li>
//               <li><strong>Innovation:</strong> We continuously improve our platform to meet the ever-evolving needs of our users.</li>
//               <li><strong>Integrity:</strong> We operate with transparency and aim to build trust with every transaction.</li>
//             </ul>
//             <p>We believe that by fostering an environment of trust, reliability, and creativity, we can transform the e-commerce experience for both sellers and buyers.</p>
//             <h2>Contact Us</h2>
//             <p>If you have any questions or need further assistance, feel free to reach out to our support team at <strong>support@ecommerceplatform.com</strong>.</p>
//           </div>
//         } />
//         {/*more info Us page content directly inside MainPage */}
//         <Route path="/more" element={
//           <div>
//             <h1>More</h1>
//             </div>
//         } />

//         {/* Admin routes */}
//         <Route path="/adminmain" element={<AdminMain />}>
//           <Route path="adminlogin" element={<AdminLogin />}>
//             <Route path="adminhome" element={<AdminHome />} />
//           </Route>
//         </Route>
//         <Route path="/adminreg" element={<AdminReg />} />

//         {/* Customer routes */}
//         <Route path="/customermain" element={<CustomerMain />}>
//           <Route path="customerlogin" element={<CustomerLogin />} />
//           <Route path="customerreg" element={<CustomerReg />} />
//         </Route>

//         {/* Vendor routes */}
//         <Route path="/vendormain" element={<VendorMain />}>
//           <Route path="vendorlogin" element={<VendorLogin />} />
//           <Route path="vendorreg" element={<VendorReg />} />
//         </Route>
//       </Routes>

//       <footer>
//         <p>&copy; Our Website. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default MainPage;
import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import tvImage from 'C:/Users/Ayushi/OneDrive/Desktop/UNIVERSAL/Ecommerce/frontend/client-app/src/tv.webp'; // Adjust the path according to your folder structure
import washingMachineImage from 'C:/Users/Ayushi/OneDrive/Desktop/UNIVERSAL/Ecommerce/frontend/client-app/src/wasing.webp';
import laptopImage from 'C:/Users/Ayushi/OneDrive/Desktop/UNIVERSAL/Ecommerce/frontend/client-app/src/laptop.webp';
import iphoneImage from 'C:/Users/Ayushi/OneDrive/Desktop/UNIVERSAL/Ecommerce/frontend/client-app/src/iphone.webp';

//import tvImage from 'C:/Users/Ayushi/OneDrive/Desktop/UNIVERSAL/Ecommerce/frontend/client-app/src/tv.webp';
import CustomerMain from './customerviews/CustomerMain';
import VendorMain from './vendorviews/VendorMain';
import AdminMain from './adminviews/AdminMain';
import AdminLogin from './adminviews/AdminLogin';
import AdminHome from './adminviews/AdminHome';
import AdminReg from './adminviews/AdminReg';
import CustomerLogin from './customerviews/CustomerLogin';
import CustomerReg from './customerviews/CustomerReg';
import VendorLogin from './vendorviews/VendorLogin';
import VendorReg from './vendorviews/VendorReg';

function MainPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const sliderSettings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 800,
   arrows: true
 };

  return (
    <div>
      <nav>
         <h3>ElectroBazaar</h3>
         <div className='links'>
        <Link to="/">Home</Link><span> </span> 
        <Link to="/about">About Us</Link><span> </span> 

        {/* Dropdown for Admin, Customer, Vendor */}
        <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <button className="dropdown-button">More</button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <Link to="/adminmain">Admin</Link>
              <Link to="/customermain">Customer</Link>
              <Link to="/vendormain">Vendor</Link>
            </div>
          )}
          </div>
        </div>
      </nav>

      <Routes>
        {/* Welcome Page content directly inside MainPage */}
        <Route path="/" element={
          <div>
      <Slider {...sliderSettings}>
      <div>
      <img src={tvImage} alt="TV" style={{ width: '100%' }} />
     </div>
     <div>
          <img src={washingMachineImage} alt="Washing Machine" style={{ width: '100%' }} />
     </div>
     <div>
       <img src={laptopImage} alt="Laptop" style={{ width: '100%' }} />
     </div>
     <div>
          <img src={iphoneImage} alt="iPhone" style={{ width: '100%' }} />
    </div>
</Slider>


          </div>
        } />

        {/* About Us page content directly inside MainPage */}
        <Route path="/about" element={
          <div>
            <h1>About Us</h1>
            <p>Our E-Commerce platform is designed to bring convenience, efficiency, and innovation to the online shopping world. We have created a user-friendly interface that caters to both vendors and customers, while providing administrators with the tools they need to oversee operations.</p>
            <h2>Our Mission</h2>
            <p>We are committed to bridging the gap between buyers and sellers, offering a smooth and secure environment where transactions can happen with confidence. Our goal is to support businesses in scaling their operations while giving customers access to a wide range of products and services.</p>
            <h2>Core Values</h2>
            <ul>
              <li><strong>Customer Focus:</strong> We prioritize customer satisfaction by providing an intuitive interface and responsive customer support.</li>
              <li><strong>Innovation:</strong> We continuously improve our platform to meet the ever-evolving needs of our users.</li>
              <li><strong>Integrity:</strong> We operate with transparency and aim to build trust with every transaction.</li>
            </ul>
            <p>We believe that by fostering an environment of trust, reliability, and creativity, we can transform the e-commerce experience for both sellers and buyers.</p>
            <h2>Contact Us</h2>
            <p>If you have any questions or need further assistance, feel free to reach out to our support team at <strong>support@ecommerceplatform.com</strong>.</p>
          </div>
        } />

        {/* Admin routes */}
        <Route path="/adminmain" element={<AdminMain />}>
          <Route path="adminlogin" element={<AdminLogin />}>
            <Route path="adminhome" element={<AdminHome />} />
          </Route>
        </Route>
        <Route path="/adminreg" element={<AdminReg />} />

        {/* Customer routes */}
        <Route path="/customermain" element={<CustomerMain />}>
          <Route path="customerlogin" element={<CustomerLogin />} />
          <Route path="customerreg" element={<CustomerReg />} />
        </Route>

        {/* Vendor routes */}
        <Route path="/vendormain" element={<VendorMain />}>
          <Route path="vendorlogin" element={<VendorLogin />} />
          <Route path="vendorreg" element={<VendorReg />} />
        </Route>
      </Routes>

      <footer>
        <p>&copy; Our Website. All rights reserved.</p>
      </footer>

      {/* Simple CSS for Dropdown */}
      <style>{`
        .dropdown {
          display: inline-block;
          position: relative;
        }
        .dropdown-button {
          background-color: #f9f9f9;
          color: #333;
          padding: 10px;
          font-size: 16px;
          border: none;
          cursor: pointer;
        }
        .dropdown-content {
          display: block;
          position: absolute;
          background-color: #f1f1f1;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
        }
        .dropdown-content a {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
        }
        .dropdown-content a:hover {
          background-color: #ddd;
        }
      `}</style>
    </div>
  );
}

export default MainPage;
