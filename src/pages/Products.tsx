import { useState } from 'react';
import ButtonDefault from '../components/ButtonDefault';
import ListProducts from '../components/ListProducts';
import Modal from '../components/Modal';
import FeedBack from '../components/FeedBack';

function Products() {
  const [name, setName] = useState<string>('');
  const [list, setList] = useState<string[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showFeedBack, setShowFeedBack] = useState<boolean>(false);

  function handleClick() {
    if (name.length) {
      setList([...list, name]);
      setName('');
      openModal();
      setShowFeedBack(true);
    }
  }

  function openModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <h1>Produtos</h1>
      <div style={{ textAlign: 'center' }}>
        <label htmlFor="name">Nome: </label>
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}></input>
        <ButtonDefault label="Botão produto" action={openModal} />
      </div>

      <ListProducts products={list} />
      {showModal && (
        <Modal
          actionCancel={openModal}
          actionConfirm={handleClick}
          title="Cadastrar Produto"
          content="Você realmente deseja cadastrar o produto?"
        />
      )}
      <FeedBack show={showFeedBack} setShow={setShowFeedBack} msg="Produto criado com sucesso!" />
    </>
  );
}

export default Products;
