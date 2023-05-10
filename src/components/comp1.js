import React, { useState } from 'react';
import './comp1.css';
function Comp1(props) {
    const [title,setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle(props.title+' Updated!');
        console.log(title);
    };

    return (<div className="product">
        <h2>{title}</h2>
        <p className="price">{props.price}</p>
        <p>{props.description}</p>
        <button onClick={clickHandler}>Click Me!</button>
    </div>);
}

export default Comp1;