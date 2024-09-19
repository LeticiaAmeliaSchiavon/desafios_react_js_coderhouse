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

    
const createOrder = async (buyer, items) => {
    const batch = writeBatch(db);
    const itemIds = items.map(item => item.id);
  
    // Verificar e atualizar estoque
    const itemsRef = collection(db, 'items');
    const q = query(itemsRef, where(documentId(), 'in', itemIds));
    const querySnapshot = await getDocs(q);
  
    querySnapshot.forEach(doc => {
      const itemData = doc.data();
      const itemInCart = items.find(item => item.id === doc.id);
  
      if (itemData.stock >= itemInCart.quantity) {
        batch.update(doc.ref, { stock: itemData.stock - itemInCart.quantity });
      } else {
        throw new Error(`Estoque insuficiente para o item: ${itemData.title}`);
      }
    });
  
    await batch.commit();
  
    // Criar ordem
    const order = {
      buyer,
      items,
      date: new Date(),
      total: items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    };
  
    const docRef = await addDoc(collection(db, 'orders'), order);
    return docRef.id;
  };

export default ItemListContainer;
