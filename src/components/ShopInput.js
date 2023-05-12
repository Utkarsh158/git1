import React from "react";
import ShopForm from "./ShopForm";
const ShopInput = (props) => {
  const saveShopDataHandler = (enteredShopData) => {
    const shopData = {
      ...enteredShopData,
      id: Math.random().toString(),
    };
    props.onAddShop(shopData);
  };
  return (
    <div>
      <div className="pro">
        <h1 align="center" style={{ fontSize: "2.5rem" }}>
          Enter Details
        </h1>
      </div>
      <ShopForm onSaveShopData={saveShopDataHandler} />
    </div>
  );
};

export default ShopInput;
