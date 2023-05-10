import React from 'react';
import './comp1.css';
function Comp1(props) {
    return <div className="product">
        <h2>{props.title}</h2>
        <p className="price">{props.price}</p>
        <p>{props.description}</p>
    </div>
}

export default Comp1;