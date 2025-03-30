import Item from "./Item";
import "./ItemList.css";

const ItemList = ({ items, onDelete, onUpdate, editItem, setEditItem }) => {
    return (
        <div className="item-list">
            <h2>🚪 Doors List</h2>
            {items.map((item) => (
                <Item 
                    key={item.id} 
                    item={item} 
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                    editItem={editItem}
                    setEditItem={setEditItem}
                />
            ))}
        </div>
    );
};

export default ItemList;
