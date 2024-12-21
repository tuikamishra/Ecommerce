import React,{useState} from "react";
import { Link, Outlet, } from "react-router-dom";
import ReactDOM from "react-dom/client";
import AdminHome from "./AdminHome";

function AdminLogin() {
  const [uid, setUId] = useState();
  const [upass, setUPass] = useState();

  const handleUIdText = (evt) => {
    setUId(evt.target.value);
  };
  const handleUPassText = (evt) => {
    setUPass(evt.target.value);
  };

  const handleLoginButton = () => {
    if (uid === "admin" && upass === "abc@123") {
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<AdminHome />);
    } else {
      alert("Invalid Id/Password");
    }
  };

  const handleLoginNewButton = () => {
    // Future functionality can go here
  };

  return (
    <div>
      <center>
        <h4 style={{ backgroundColor:"" }}>Administrator Login</h4>
        <table>
          <tbody>
            <tr>
              <td>User Id</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleUIdText}
                />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input
                  type="password"
                  onChange={handleUPassText}
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={handleLoginButton}
                >
                  Login
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Only show this link after successful login */}
        {uid === "admin" && upass === "abc@123" && (
          <nav>
            <ul>
              <li>
                <Link
                  to="/adminmain/adminlogin/adminhome"
                  onClick={handleLoginNewButton}
                >
                  Admin Home
                </Link>
              </li>
            </ul>
          </nav>
        )}
        <Outlet />
      </center>
    </div>
  );
}

export default AdminLogin;