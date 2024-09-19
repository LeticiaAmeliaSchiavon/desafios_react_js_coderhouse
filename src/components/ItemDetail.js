import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = ({ item }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={item.pictureUrl} className="card-img-top" alt={item.title} />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">R$ {item.price}</p>
            </div>
        </div>
    );
};

export default ItemDetail;
