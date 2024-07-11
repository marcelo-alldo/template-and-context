import { useContext, useEffect, useState } from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import { ContactsContext } from '../contexts/ContactsContext';
import ButtonDefault from '../components/ButtonDefault';
import FeedBack from '../components/FeedBack';

function CreateContact() {
  const config = {
    navigation: true,
    footer: true,
  };

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [showFeedBack, setShowFeedBack] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  const contactsContext = useContext(ContactsContext);

  function handleCreate() {
    const data = contactsContext?.data;
    if (data?.length) {
      contactsContext?.setData([...data, { name, phone }]);
    } else {
      contactsContext?.setData([{ name, phone }]);
    }

    setShowFeedBack(true);
    setName('');
    setPhone('');
  }

  useEffect(() => {
    if (name.length && phone.length) {
      setDisabled(false);
    }
  }, [name, phone]);

  return (
    <DefaultLayout config={config}>
      <h1>Criar Contato</h1>
      <div>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" value={name} onChange={ev => setName(ev.target.value)} />
        </div>
        <div>
          <label htmlFor="phone">Telefone:</label>
          <input type="text" value={phone} onChange={ev => setPhone(ev.target.value)} />
        </div>
        <div>
          <ButtonDefault disabled={disabled} action={handleCreate} label="Cadastrar" />
        </div>
      </div>
      <FeedBack show={showFeedBack} setShow={setShowFeedBack} msg="Contato criado com sucesso." />
    </DefaultLayout>
  );
}

export default CreateContact;
