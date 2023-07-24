import { useContext, useState } from "react";

import "./App.css";
import { ShoppingListItem } from "./components/ShoppingListItem";
import { ItemsContext } from "./context/items.context";

function App() {

  const { addItem, items } = useContext(ItemsContext);
  const [name, setName] = useState('');


  const handleChange = (event) => {
    const {value} = event.target;
    setName(value);
  }

  const handleSubmit = () => {
      const itemToAdd = {
        name: name.trim(),
        checked: false
      };
      addItem(itemToAdd);
      setName(''); 
    
  }

  return (
    <div className="container">
      <h1 className="mb-4">My Shopping List</h1>

      <div className="flex gap-4 pb-3 border-b-2 border-gray-700">
        <input
          type="text"
          placeholder="E.g. Carrots"
          className="v__input flex-1"
          value={name}
          onChange={handleChange}
        />
        <button className="v__button" onClick={handleSubmit} disabled = {!name.length} >Add</button>
      </div>
      <div className="v__list-container overflow-y-scroll">
        {
          items.map((item) => <ShoppingListItem item = {item} key = {item.name} />)
        }
      </div>
    </div>
  );
}

export default App;
