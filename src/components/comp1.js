import React, { useState } from 'react';
import './comp1.css';
function Comp1(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle(props.title + ' Added!');
    };
    const clickHandler2 = () => {
        setTitle(props.title + ' Removed!');
    };

    return (<div className="product">
        <h2>{title}</h2>
        <p className="price">{props.price}</p>
        <p>{props.description}</p>
        <button onClick={clickHandler} className='btn'>ADD..</button>
        &nbsp;&nbsp;
        <button onClick={clickHandler2} className='btn'>REMOVE..</button>
    </div>);
}

export default Comp1;