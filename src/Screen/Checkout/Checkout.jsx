import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import {toast} from 'react-toastify'
import { usePaystackPayment } from "react-paystack";
import { TiDelete } from "react-icons/ti";
import { GlobalContext } from "../../GlobalContext";
const Checkout = (props) => {
  const { setOpenCreatePost, setTouched } = useContext(GlobalContext);
  const { totalPrice } = props;
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // destruction of item from the current state
  const { name, email, phone } = state;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const data = { id: uuidv4(), name, email, phone };
  console.log(data);

  // function payment(){
  //   // prevent submission if fields are empty
  //   if (!name || !email || !phone) {
  //     toast.warning("All fields required");
  //     return;
  //   }
  // }

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: totalPrice * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_8eb3f37ea836b0f2260764dfc2826e1d0c37cd09",
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    setTouched(false);
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <button
          style={{
            padding: "15px 30px",
            borderRadius: "10px",
            backgroundColor: "red",
            color: "white",
            marginLeft: "84px",
          }}
          onClick={() => {
            initializePayment(onSuccess, onClose);
            console.log(onSuccess, "ab");
          }}
        >
          Checkout
        </button>
      </div>
    );
  };

  return (
    <>
      {/* Delete icon */}
      <h3 style={{ cursor: "pointer" }} onClick={() => setTouched(false)}>
        <TiDelete size={24} color="white" />
      </h3>
      <div className="w-[300px] h-[200px] bg-blue-400 rounded-md mt-[20px]">
        <div className="mt-3">
          <label htmlFor="name">Names</label>
          <input
            className="w-[230px] rounded-md mb-2"
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Names"
            onChange={changeHandler}
          />
        </div>

        <div className="mt-3">
          <label htmlFor="email">Emails</label>
          <input
            className="w-[230px] rounded-md mb-2"
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={changeHandler}
          />
        </div>

        <div className="mt-3">
          <label htmlFor="Phone">PhoneNo</label>
          <input
            className="w-[230px] rounded-md mb-2"
            type="text"
            id="phone"
            name="phone"
            value={phone}
            placeholder="PhoneNo"
            onChange={changeHandler}
          />
        </div>
        <PaystackHookExample />
      </div>
    </>
  );
};

export default Checkout;
