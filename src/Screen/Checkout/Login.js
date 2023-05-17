// import { useState } from "react";
import React, { useState, useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { setUser } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    if (!email || !password) {
      toast.warning("All fields are required");
      return;
    }
    setUser(true);
    console.log(email, password);
  };

  return (
    <div>
      <div className="w-[400px] h-[500px] mx-auto ">
        <h1 className="mt-[100px]">AbTop</h1>
        <div className="w-[400px] h-[250px] border-2 shadow-lg px-2 bg-black text-white rounded-lg">
          <h3>
            Welcome, please login your details to be able to access our
            resources
          </h3>
          <div>
            <input
              className="w-[350px] mt-[10px] rounded-md"
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              onChange={handleEmail}
            />
          </div>
          <br />
          <div>
            <input
              className="w-[350px] rounded-md text-black"
              id="password"
              name="password"
              type="password"
              placeholder="password"
              onChange={handlePassword}
            />
          </div>
          <br />
          <div className="w-[200px] bg-white mx-auto rounded-md text-black">
            <Link to="/">
              <button className="text-center" onClick={handleLogin}>
                <span className="ml-[76px]">Log in</span>
              </button>
            </Link>
          </div>

          <br />
          <Link to="/register">
            <button className="w-[200px] bg-white mx-auto rounded-md text-black ml-[85px]">
              Create new account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
