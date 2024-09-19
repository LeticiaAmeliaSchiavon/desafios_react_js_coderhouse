import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { useParams } from 'react-router-dom';

const mockData = [
    { id: 1, title: 'Produto 1', description: 'Descrição do Produto 1', price: 100, pictureUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Produto 2', description: 'Descrição do Produto 2', price: 200, pictureUrl: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Produto 3', description: 'Descrição do Produto 3', price: 300, pictureUrl: 'https://via.placeholder.com/150' },
];

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchItems = async () => {
          let q;
          if (categoryId) {
            q = query(collection(db, 'items'), where('category', '==', categoryId));
          } else {
            q = collection(db, 'items');
          }
    
          const querySnapshot = await getDocs(q);
          const itemsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setItems(itemsList);
        };
    
        fetchItems();
      }, [categoryId]);
    
      return <ItemList items={items} />;
    };

export default ItemListContainer;
