import React from 'react';
import Button from './button'; // Import component nút tái sử dụng

function ContactCard({ name, city, onEdit }) {
  return (
    <div className="contact-card">
      <h3>{name}</h3>
      <p>{city}</p>
      <Button onClick={onEdit} className="edit-button">Edit</Button>
    </div>
  );
}

export default ContactCard;