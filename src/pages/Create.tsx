import { useEffect, useState } from 'react';

function Create() {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [validated, setValidated] = useState<boolean>(false);

  function handleClick() {
    console.log('clicou');
  }

  useEffect(() => {
    if (name && description && price) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  }, [name, description, price]);

  function handleDown() {
    window.scrollTo(0, 1000);
  }

  useEffect(() => {
    setTimeout(() => {
      handleDown();
    }, 100);
  }, []);

  return (
    <div style={{ height: '200vh' }}>
      <h1>Criar produto</h1>
      <div>
        <label htmlFor="name">Nome:</label>
        <input type="text" style={{ width: '100%' }} value={name} onChange={ev => setName(ev.target.value)} />
      </div>
      <div>
        <label htmlFor="description">Descrição:</label>
        <input
          type="text"
          style={{ width: '100%' }}
          value={description}
          onChange={ev => setDescription(ev.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Preço:</label>
        <input type="text" style={{ width: '100%' }} value={price} onChange={ev => setPrice(ev.target.value)} />
      </div>
      <div>
        <button disabled={!validated} onClick={handleClick}>
          Salvar
        </button>
      </div>

      <div>
        <button onClick={handleDown}>Pra baixo</button>
      </div>
    </div>
  );
}

export default Create;
