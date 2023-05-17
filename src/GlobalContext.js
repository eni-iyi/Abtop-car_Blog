import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();


const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [cartposts, setCartPosts] = useState(null);
  const [localCartPosts, setLocalCartPosts] = useState([]);
  const [openUpdatePost, setOpenUpdatePost] = useState(false);
  const [openCreatePost, setOpenCreatePost] = useState(false);
  const [touched, setTouched] = useState(false);
  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    const cartposts = JSON.parse(localStorage.getItem("cartposts"));
    setLocalCartPosts(cartposts);
  };

  const handleButton = (item) => {
    console.log(item);
    const { id, name, image, price } = item;
    const data = { id, name, image, price, qty: 1 };

    const localPosts = localStorage.getItem("cartposts")
      ? JSON.parse(localStorage.getItem("cartposts"))
      : [];
    // setCartPosts(localCartPosts)

    const findSameObject = localPosts.find((same) => same.id === id);

    if (findSameObject) {
      alert("item already in cart");
    } else {
      const newLocal = [...localPosts, data];
      localStorage.setItem("cartposts", JSON.stringify(newLocal));
    }

    // setCartPosts(newLocal)

    getPost();
  };

  const store = {
    cartposts,
    setCartPosts,
    getPost,
    localCartPosts,
    setLocalCartPosts,
    handleButton,
    openUpdatePost,
    setOpenUpdatePost,
    openCreatePost,
    setOpenCreatePost,touched, setTouched, user, setUser
  };

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
