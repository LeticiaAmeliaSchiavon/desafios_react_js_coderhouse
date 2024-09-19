import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import { useHistory } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(0);
    const history = useHistory();

    const handleAdd = (count) => {
        setQuantity(count);
    };

    const handleCheckout = () => {
        history.push('/cart');
    };

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={item.pictureUrl} className="card-img-top" alt={item.title} />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">R$ {item.price}</p>
                {quantity === 0 ? (
                    <ItemCount stock={10} initial={1} onAdd={handleAdd} />
                ) : (
                    <button className="btn btn-success" onClick={handleCheckout}>
                        Finalizar Compra
                    </button>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
