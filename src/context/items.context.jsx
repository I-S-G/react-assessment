import { createContext, useState, useEffect } from "react";

export const ItemsContext = createContext({
    items: [],
    setItems: () => {},
    addItem: () => {},
    removeItem: () => {},
    toggleCheck: () => {},
});

export const ItemsProvider = ({children}) => {

    const [items, setItems] = useState(() => {
        const retrievedItems = localStorage.getItem('items');
        return JSON.parse(retrievedItems) || [];
    });

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
      }, [items]);

    const addItem = (itemToAdd) => {
        if(items.find(item => item.name.toLowerCase() === itemToAdd.name.toLowerCase())) {
            alert("Item already exists in the list");
            return;
        }
        const newItems = [...items, itemToAdd];
        setItems(newItems);
    }

    const removeItem = (itemToRemove) => {
        const newItems = items.filter(item => item.name !== itemToRemove.name);
        setItems(newItems);
    }

    const toggleCheck = (itemToEdit, payload) => {
        const newItems = items.map(item => item.name === itemToEdit.name? {...item, checked: payload}: item);
        setItems(newItems);
    }

    const value = { items, setItems, addItem, removeItem, toggleCheck };

    return(
        <ItemsContext.Provider value = {value}>
            {children}
        </ItemsContext.Provider>
    )
}
