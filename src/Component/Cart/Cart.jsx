import React, { useContext, useEffect, useState } from "react";

import Checkout from "../../Screen/Checkout/Checkout";
import Modal from "../Modal/Modal";
import { GlobalContext } from "../../GlobalContext";
const Cart = () => {
  const { touched, setTouched, getPost } = useContext(GlobalContext);
  const [value, setValue] = useState([]);
  // const [touched, setTouched] = useState(false);

  // const {} = useContext(GlobalContext);
  //   console.log(cartposts)
  useEffect(() => {
    getLocalCartPost();
  }, [touched]);

  const getLocalCartPost = () => {
    const info = JSON.parse(localStorage.getItem("cartposts"));
    setValue(info);
  };

  const totalPrice =
    value && value.reduce((pri, item) => pri + item.qty * item.price, 0);
  console.log(totalPrice);

  const handleAddProduct = (product) => {
    const productExist = value.find((item) => item.id === product.id);
    if (productExist) {
      const car = value.map((item) =>
        item.id === product.id
          ? { ...productExist, qty: productExist.qty + 1 }
          : item
      );
      setValue(car);
      localStorage.setItem("cartposts", JSON.stringify(car));
    } else {
      const car = [...value, { ...product, qty: 1 }];
      setValue(car);
      localStorage.setItem("cartposts", JSON.stringify(car));
    }
  };

  const handleRemoveProduct = (product) => {
    console.log(product, "product");
    const productExist = value.find((item) => item.id === product.id);
    if (productExist.qty === 1) {
      const setTolocal = value.filter((item) => item.id !== product.id);
      setValue(setTolocal);
      localStorage.setItem("cartposts", JSON.stringify(setTolocal));
    } else {
      const setTolocal = value.map((item) =>
        item.id === product.id
          ? { ...productExist, qty: productExist.qty - 1 }
          : item
      );
      setValue(setTolocal);
      localStorage.setItem("cartposts", JSON.stringify(setTolocal));
    }

    getPost();
  };

  return (
    <>
      <div className="w-[80%]  mt-[100px] mx-auto flex justify-around flex-wrap">
        {value.length > 0 ? (
          value.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[100%] max-w-[270px] min-h-[250px] object-cover block border-2 mt-[120px] bg-blue-500 p-[5px]"
              >
                <div>
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <h2>{item.name}</h2>
                </div>
                <div>
                  <h3>${item.price}</h3>
                </div>

                {/* {item.length === 0 && ( 
                <div>No item added to the Cart</div>
                )}
                console.log(item, 'Tolu') */}

                <div className="flex justify-between">
                  <button
                    className="w-[40px] h-[20px] bg-blue-400 rounded-md item-center text-white font-bold flex justify-center items-center hover:bg-red-400 "
                    onClick={() => handleAddProduct(item)}
                  >
                    <p>+</p>
                  </button>

                  <span>{item.qty}</span>

                  <button
                    className="w-[40px] h-[20px] bg-blue-400 rounded-md item-center text-white font-bold flex justify-center items-center hover:bg-red-400 "
                    onClick={() => handleRemoveProduct(item)}
                  >
                    <p>-</p>
                  </button>
                </div>
                {/* cart item price */}
                <div>SubTotal: {item.qty * item.price}</div>
              </div>
            );
          })
        ) : (
          <h2>No item in Cart</h2>
        )}
      </div>

      {/* Total price */}
      <div className="font-bold flex justify-center ">
        Total Price:
        <div>${totalPrice}</div>
      </div>
      <div style={{ width: "10%", margin: "20px auto" }}>
        <button
          style={{
            padding: "15px 30px",
            borderRadius: "10px",
            backgroundColor: "black",
            color: "white",
          }}
          onClick={() => setTouched(true)}
        >
          Checkout
        </button>
      </div>
      {touched && (
        <Modal>
          <Checkout totalPrice={totalPrice} />
        </Modal>
      )}
    </>
  );
};

export default Cart;
