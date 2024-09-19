import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

const mockItem = {
    id: 1,
    title: 'Produto 1',
    description: 'Descrição detalhada do Produto 1',
    price: 100,
    pictureUrl: 'https://via.placeholder.com/150'
};

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(mockItem);
                }, 2000);
            });
        };

        fetchItem().then(data => setItem(data));
    }, []);

    return (
        <div className="container mt-4">
            {item ? <ItemDetail item={item} /> : <p>Carregando...</p>}
        </div>
    );
};

export default ItemDetailContainer;
