import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleIncrease = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleAdd = () => {
        if (stock > 0) {
            onAdd(count);
        }
    };

    return (
        <div className="item-count">
            <div className="d-flex align-items-center">
                <button className="btn btn-secondary" onClick={handleDecrease}>-</button>
                <span className="mx-3">{count}</span>
                <button className="btn btn-secondary" onClick={handleIncrease}>+</button>
            </div>
            <button className="btn btn-primary mt-3" onClick={handleAdd} disabled={stock === 0}>
                Adicionar ao Carrinho
            </button>
        </div>
    );
};

export default ItemCount;
