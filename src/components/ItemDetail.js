import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import { useHistory } from 'react-router-dom';
import { useCart } from './CartContext';

const ItemDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(0);
    const history = useHistory();
    const { addItem } = useCart();

    const handleAdd = (count) => {
        setQuantity(count);
    };

    const handleCheckout = () => {
        history.push('/cart');
    };

    const handleAddToCart = () => {
        addItem(item, 1, quantity); // Adiciona 1 unidade do item ao carrinho
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
            <div>
                <h2>{item.name}</h2>
                <p>Price: ${item.price}</p>
                <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} min="1" />
                <button onClick={handleAddToCart}>Comprar</button>
            </div>

        </div>
        
    );
};

export default ItemDetail;
