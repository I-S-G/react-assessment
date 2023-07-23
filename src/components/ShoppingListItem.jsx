import { useContext } from "react";

import classes from "./ShoppingListItem.module.css";
import { ItemsContext } from "../context/items.context";

export const ShoppingListItem = ({item}) => {

  const { removeItem, toggleCheck } = useContext(ItemsContext);

  const handleRemove = () => {
    removeItem(item);
  }

  const handleChange = (event) => {
    const { checked } = event.target;
    toggleCheck(item, checked);
  }

  return (
    <div className="flex items-center p-2">
      <input type="checkbox" className="mr-2" onChange={handleChange} checked = {item.checked} />
      {
        item.checked? (<h3 className="flex-1 line-through">{item.name}</h3>) : (<h3 className="flex-1">{item.name}</h3>)
      }
      
      <button className={classes.removeButton} onClick={handleRemove}>x</button>
    </div>
  );
};
