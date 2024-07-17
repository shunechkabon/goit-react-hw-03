import { useState } from 'react'
import ContactForm from './components/ContactForm';
import SearchBox from './components/SearchBox';
import ContactList from './components/ContactList';
import './App.css'

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(initialContacts);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  )
}

export default App;