import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import StoreProduct from "../Component/StoreProduct/StoreProduct";
import "./Store.css";

const Store = () => {
  const { handleButton } = useContext(GlobalContext);
  const { items } = StoreProduct;

  return (
    <div className="main grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => {
        return (
          <div className="store mt-[10px]" key={item.id}>
            <div
            // className="w-full h-[200px] bg-cover bg-no-repeat "
            // style={{backgroundImage:`url("${item.image}")`}}
            >
              <img className="w-[100%]" src={item.image} alt="" />
            </div>
            <h2>{item.name}</h2>
            <h3> ${item.price} </h3>
            <div className="btn-div">
              <button className="btn" onClick={() => handleButton(item)}>
                {" "}
                {item.btn}{" "}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Store;
