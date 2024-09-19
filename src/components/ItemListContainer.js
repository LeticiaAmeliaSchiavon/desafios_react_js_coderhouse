import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';

const mockData = [
    { id: 1, title: 'Produto 1', description: 'Descrição do Produto 1', price: 100, pictureUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Produto 2', description: 'Descrição do Produto 2', price: 200, pictureUrl: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Produto 3', description: 'Descrição do Produto 3', price: 300, pictureUrl: 'https://via.placeholder.com/150' },
];

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(mockData);
                }, 2000);
            });
        };

        fetchItems().then(data => setItems(data));
    }, []);

    return (
        <div className="container mt-4">
            <h2>{greeting}</h2>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
