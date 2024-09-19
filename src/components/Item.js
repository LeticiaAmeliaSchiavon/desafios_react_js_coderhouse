import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({ id, title, description, price, pictureUrl }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={pictureUrl} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">R$ {price}</p>
                <a href={`/item/${id}`} className="btn btn-primary">Ver Detalhes</a>
            </div>
        </div>
    );
};

export default Item;
