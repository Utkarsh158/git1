import React, { useCallback, useState } from "react";
import './ShopForm.css';
const ShopForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDesc, setEnteredDesc] = useState('');

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
            description: enteredDesc
        };
        props.onSaveShopData(shopData);
        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDesc('');
    };

    return (
        <div>
        <form onSubmit={submitHandler}>
            <div className="new-shop-items">
                <div className="new-shop-item">
                    <label>Title</label>
                    <input type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div>
                <div className="new-shop-item">
                    <label>Price</label>
                    <input type="number"
                        value={enteredPrice}
                        onChange={priceChangeHandler} />
                </div>
                <div className="new-shop-item">
                    <label>Description</label>
                    <input type="text"
                        value={enteredDesc}
                        onChange={descChangeHandler} />
                </div>
            </div>
            <div className="new-shop-actions">
                <button type="submit">Add Product</button>
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