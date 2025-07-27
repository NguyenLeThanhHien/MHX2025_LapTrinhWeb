import React, { useState } from 'react';
import Button from './button';

function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && city) {
      onAddContact({ name, city });
      setName('');
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name:"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="City:"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <Button type="submit" className="add-contact-button">Add contact</Button>
    </form>
  );
}

export default ContactForm;