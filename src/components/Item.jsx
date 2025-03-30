import { useState } from 'react';
import "./Item.css";


const Item = ({ item, onDelete, onUpdate, editItem, setEditItem }) => {
    const [editData, setEditData] = useState({
        name: item.name,
        description: item.description
    });

    const handleEdit = () => {
        setEditItem(item.id);
    };

    const handleSave = () => {
        onUpdate(item.id, {
            ...item,
            ...editData
        });
    };

    const handleCancel = () => {
        setEditItem(null);
        setEditData({
            name: item.name,
            description: item.description
        });
    };

    const isEditing = editItem === item.id;

    return (
        <div className="item" style={{
            border: '1px solid #ddd',
            padding: '15px',
            margin: '10px 0',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div className="item-details" style={{ flex: 1, marginRight: '15px' }}>
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={editData.name}
                            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                            style={{
                                display: 'block',
                                width: '100%',
                                marginBottom: '5px',
                                padding: '5px',
                                borderRadius: '4px',
                                border: '1px solid #ddd'
                            }}
                        />
                        <input
                            type="text"
                            value={editData.description}
                            onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '5px',
                                borderRadius: '4px',
                                border: '1px solid #ddd'
                            }}
                        />
                    </>
                ) : (
                    <>
                        <h3 style={{ margin: '0 0 5px 0' }}>{item.name}</h3>
                        <p style={{ margin: '0', color: '#666' }}>{item.description}</p>
                    </>
                )}
            </div>
            <div className="item-actions" style={{ display: 'flex', gap: '10px' }}>
                {isEditing ? (
                    <>
                        <button
                            onClick={handleSave}
                            style={{
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                padding: '8px 15px',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Save
                        </button>
                        <button
                            onClick={handleCancel}
                            style={{
                                backgroundColor: '#808080',
                                color: 'white',
                                border: 'none',
                                padding: '8px 15px',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={handleEdit}
                            style={{
                                backgroundColor: '#2196F3',
                                color: 'white',
                                border: 'none',
                                padding: '8px 15px',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => onDelete(item.id)}
                            style={{
                                backgroundColor: '#ff4444',
                                color: 'white',
                                border: 'none',
                                padding: '8px 15px',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Delete
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Item;
