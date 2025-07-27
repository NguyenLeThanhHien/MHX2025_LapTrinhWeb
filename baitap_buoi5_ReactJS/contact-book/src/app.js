import React, { useState } from 'react';
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

  const [contacts, setContacts] = useState(initialContacts);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]); 
  };

  const handleEditContact = (index) => {
    // Xử lý sự kiện chỉnh sửa liên hệ
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
                onEdit={() => handleEditContact(index)}
            />
        ))}
      </div>
    </div>

    
  );
}

export default App;