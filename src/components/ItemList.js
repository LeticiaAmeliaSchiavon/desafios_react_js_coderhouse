import React from 'react';
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemList = ({ items }) => {
    return (
        <div className="row">
            {items.map(item => (
                <div className="col-md-4" key={item.id}>
                    <Item {...item} />
                </div>
            ))}
        </div>
    );
};

export default ItemList;
