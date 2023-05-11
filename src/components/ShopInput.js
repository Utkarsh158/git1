import React from 'react';
import ShopForm from './ShopForm';
const ShopInput = (props) => {
    const saveShopDataHandler = (enteredShopData) => {
        const shopData = {
            ...enteredShopData,
            id: Math.random().toString()
        }
        props.onAddShop(shopData);
    };
    return (
        <div>
            <ShopForm onSaveShopData={saveShopDataHandler} />
        </div>
    );

};

export default ShopInput;