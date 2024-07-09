import React, { useState } from 'react';
import ButtonDefault from '../components/ButtonDefault';
import ListCategories from '../components/ListCategories';

function Categories() {
  const [name, setName] = useState<string>('');
  const [list, setList] = useState<string[]>([]);

  function handleClick() {
    if (name.length) {
      setList([...list, name]);
    }

    setName('');
  }

  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const value = ev.target.value;

    setName(value);
  }

  return (
    <>
      <h1>Categorias</h1>
      <div>
        <label htmlFor="category">Nome: </label>
        <input type="text" name="category" value={name} onChange={ev => handleChange(ev)}></input>
        <ButtonDefault label="Criar" action={handleClick} />
      </div>

      <div>
        <ListCategories categories={list} />
      </div>
    </>
  );
}

export default Categories;
