import React, { useState, useEffect } from 'react';
import ContactCard from './components/ContactCard';
import ContactForm from './components/ContactForm';
import './app.css';

function App() {
  const initialContacts = [
    { name: 'Alice Johnson', city: 'New York' },
    { name: 'Bob Smith', city: 'Los Angeles' },
    { name: 'Charlie Brown', city: 'Chicago' },
    { name: 'David Williams', city: 'Houston' },
    { name: 'Emma Davis', city: 'Phoenix' },
  ];

  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem('contacts');
    return saved ? JSON.parse(saved) : initialContacts;
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleEditContact = (index, newContact) => {
    const updated = [...contacts];
    updated[index] = newContact;
    setContacts(updated);
  };

  const handleDeleteContact = (index) => {
    const updated = contacts.filter((_, i) => i !== index);
    setContacts(updated);
  };

  return (
    <div className="App">
      <h1>Contact Book</h1>
      <p>Keep track of where your friends live.</p>
      <ContactForm onAddContact={handleAddContact} />
      <div className="contact-list">
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.name}
            city={contact.city}
            onEdit={(newContact) => handleEditContact(index, newContact)}
            onDelete={() => handleDeleteContact(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;