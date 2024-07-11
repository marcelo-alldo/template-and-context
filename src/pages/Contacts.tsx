import { useContext, useEffect, useState } from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { ContactsContext } from '../contexts/ContactsContext';
import ContactType from '../types/ContactType';

function Contacts() {
  const config = {
    navigation: true,
    footer: true,
  };

  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const contactsContext = useContext(ContactsContext);

  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    if (userContext?.data.user === '') {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    if (contactsContext?.data) {
      setContacts(contactsContext.data);
    }
  }, [contactsContext]);

  useEffect(() => {
    if (search.length >= 3) {
      const filtered = contacts.filter(item => {
        if (item.name.toLowerCase().includes(search.toLowerCase())) {
          return true;
        }

        if (item.phone.includes(search)) {
          return true;
        }

        return false;
      });

      setContacts(filtered);
    }

    if (!search.length) {
      if (contactsContext?.data) {
        setContacts(contactsContext?.data);
      }
    }
  }, [search]);

  return (
    <DefaultLayout config={config}>
      <h1>Lista de contatos</h1>

      <div>
        {contacts.length > 0 && <input type="text" value={search} onChange={ev => setSearch(ev.target.value)} />}
      </div>
      {contacts.map(item => (
        <div key={item.phone}>
          <div>
            <h2>Nome: {item.name}</h2>
          </div>
          <div>
            <h2>Telefone: {item.phone}</h2>
          </div>
        </div>
      ))}
    </DefaultLayout>
  );
}

export default Contacts;
