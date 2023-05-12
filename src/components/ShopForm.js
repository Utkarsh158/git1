import React, { FuseEffect, useState } from "react";
import "./ShopForm.css";

const ShopForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 1) {
      document.title = `Students (${count})`;
    } else {
      document.title = `Students`;
    }
  });

  const changeTitle = () => {
    setCount(count + 1);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const descChangeHandler = (event) => {
    setEnteredDesc(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const shopData = {
      title: enteredTitle,
      price: enteredPrice,
      description: enteredDesc,
    };
    props.onSaveShopData(shopData);
    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDesc("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-shop-items">
          <div className="new-shop-item">
            <label>Name</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-shop-item">
            <label>Class</label>
            <input
              type="text"
              value={enteredPrice}
              onChange={priceChangeHandler}
            />
          </div>
          <div className="new-shop-item">
            <label>College</label>
            <input
              type="text"
              value={enteredDesc}
              onChange={descChangeHandler}
            />
          </div>
        </div>
        <div className="new-shop-actions">
          <button type="submit" onClick={changeTitle}>
            Add
          </button>
        </div>
      </form>

      {/* <h1 className='output'>Submitted Details</h1>
    {
        list.map((values)=>
        <>
        <div className='outputs'>
            Name : {values.title}
        </div>
        <div className='outputs'>
            Email :{values.price}
        </div>
        <div className='outputs'>
            Phone :{values.description}
        </div>
        </>
        )
    } */}
    </div>
  );
};

export default ShopForm;
