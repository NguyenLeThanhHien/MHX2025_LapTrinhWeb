import React, { useState } from 'react';

export default function ContactCard({ name, city, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editCity, setEditCity] = useState(city);

  const handleSave = () => {
    onEdit({ name: editName, city: editCity });
    setEditing(false);
  };

  return (
    <div className="contact-card glowing">
      {editing ? (
        <>
          <input
            value={editName}
            onChange={e => setEditName(e.target.value)}
            className="edit-input"
          />
          <input
            value={editCity}
            onChange={e => setEditCity(e.target.value)}
            className="edit-input"
          />
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="cancel-btn" onClick={() => setEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <div className="contact-title">{name}</div>
          <div className="contact-city">{city}</div>
          <div className="card-actions">
            <button className="edit-btn" onClick={() => setEditing(true)}>Edit</button>
            <button className="delete-btn" onClick={onDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}