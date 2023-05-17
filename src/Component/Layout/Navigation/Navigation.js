import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../GlobalContext";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { GiHamburgerMenu, GiShoppingCart } from "react-icons/gi";

function Navigation() {
  const { localCartPosts, user } = useContext(GlobalContext);

  // console.log(cartposts)
  const [navbar, setNavbar] = useState(false);
  //   const [localCartPosts, setLocalCartPosts] = useState([])
  console.log(localCartPosts);

  // useEffect(()=>{
  //   getPost()
  // }, [])

  //function is in context

  return (
    <div className="navContainer sticky">
      <Link className="link">AbTop</Link>

      <ul className="md:ml-[650px]">
        <li className="hidden md:block">
          <Link to="/">Home</Link>
        </li>

        {user ? (
          <>
            <li className="hidden md:block">
              <Link to="/blog">Blog</Link>
            </li>

            <li className="hidden md:block">
              <Link to="/store">Store</Link>
            </li>
          </>
        ) : (
          <>
            <li className="hidden md:block">
              <Link to="/login">Login</Link>
            </li>

            <li className="hidden md:block">
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>

      <div
        className="md:hidden mt-[20px] text-white text-3xl"
        onClick={() => setNavbar(true)}
      >
        <GiHamburgerMenu />
      </div>

      {navbar && (
        <div className="text-white list-none font-bold text-2xl mt-[100px] bg-black md:hidden h-40 w-full leading-[50px] text-center absolute z-50">
          {" "}
          <ul>
            <li className="md:hidden">
              <Link to="/">Home</Link>
            </li>
            {user ? (
              <>
                <li className="md:hidden">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="md:hidden">
                  <Link to="/store">Store</Link>
                </li>
              </>
            ) : (
              <>
                <li className=" md:block">
                  <Link to="/login">Login</Link>
                </li>

                <li className=" md:block">
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}

      {user && (
        <div className="text-white text-3xl mt-[18px] relative">
          <Link to="/cart">
            {" "}
            <GiShoppingCart />
          </Link>
          <span className="absolute top-[-25px] right-[-15px]">
            {localCartPosts && localCartPosts.length}
          </span>
        </div>
      )}
    </div>
  );
}

export default Navigation;
