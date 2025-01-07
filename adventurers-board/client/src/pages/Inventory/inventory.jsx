import React, { useState } from 'react';
import Chest from '/src/assets/images/treasure-chest.jpg';
import './inventory.css';

const Inventory = () => {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState('');

    const addItem = () => {
        if (itemName) {
            const existingItem = items.find(item => item.name === itemName);
            if (existingItem) {
                // increase quantity, if one exists, number will increase
                existingItem.quantity += 1;
                setItems([...items]);
            } else {
                // add new item with quantity starting at 1
                setItems([...items, { name: itemName, quantity: 1 }]);
            }
            setItemName('');
        }
    };

    const handleIncrease = (itemName) => {
        setItems(items.map(item => 
            item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const handleDecrease = (itemName) => { // fix amount going into negatives
        setItems(items.map(item => 
            item.name === itemName 
            ? { ...item, quantity: Math.max(item.quantity - 1, 0)  } : item
        ));
    };

    const handleRemoveItem = (itemName) => {
        setItems(items.filter(item => item.name !== itemName));
    };

    return (
        <div className="image-container">
            <img src={Chest} alt="Treasure room flowing with gems and coin" className="inventory-img"></img>
            <h2 className="overlay-text">Inventory</h2>
            <div className="overlay-content">
            <input 
                type="text" 
                value={itemName} 
                onChange={(e) => setItemName(e.target.value)} 
                placeholder="Add new item" 
            />
            <button onClick={addItem}>Add Item</button>
            <ul className="item-list">
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name}: {item.quantity}
                        <button onClick={() => handleIncrease(item.name)}>+</button>
                        <button onClick={() => handleDecrease(item.name)}>-</button>
                        <button onClick={() => handleRemoveItem(item.name)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    );
};

export default Inventory; 