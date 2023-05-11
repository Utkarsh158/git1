import React from "react";
import './ShopForm.css';
const ShopForm = () => {
    return (
            <form>
                <div className="new-shop-items">
                    <div className="new-shop-item">
                        <label>Title</label>
                        <input type="text" />
                    </div>
                    <div className="new-shop-item">
                        <label>Price</label>
                        <input type="number" />
                    </div>
                    <div className="new-shop-item">
                        <label>Description</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="new-shop-actions">
                    <button type="submit">Submit</button> 
                </div>
            </form>
       
    );
};

export default ShopForm;