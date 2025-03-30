import { useState, useEffect } from "react";
import ItemList from "./components/ItemList";
import "./App.css";
// use the following link to get the data
// `/doors` will give you all the doors.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(API_URI);
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URI}/${id.toString()}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete item');
      }
      setItems(items.filter(item => item.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      const response = await fetch(`${API_URI}/${id.toString()}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error('Failed to update item');
      }
      const updatedItem = await response.json();
      setItems(items.map(item => item.id === id ? updatedItem : item));
      setEditItem(null);
    } catch (err) {
      setError(err.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ItemList 
      items={items} 
      onDelete={handleDelete} 
      onUpdate={handleUpdate}
      editItem={editItem}
      setEditItem={setEditItem}
    />
  );
}

export default App;