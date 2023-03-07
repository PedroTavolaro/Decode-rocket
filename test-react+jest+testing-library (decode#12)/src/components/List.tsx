import React, { useState } from 'react';

type ListProps = {
    initialItems: string[]
}

function List({initialItems}: ListProps) {
  const [list, setList] = useState(initialItems);
  const [newItem, setNewItem] = useState('');
  
  function addToList() {
    //setList(state => [...state, newItem]);
    setTimeout(() => {  //simulação busca api
      setList(state => [...state, newItem])
    }, 500)  
  }

  function removeFromList(item: string) {
    setTimeout(() => {  
      setList(state => state.filter(item => item != item ));
    }, 500)  
  }

  return (
    <>
    <input placeholder='Novo item' value={newItem} onChange={e => setNewItem(e.target.value)} />
    <button onClick={addToList}>Add</button>
    <ul>
      {list.map(item => (
        <li key={item}>
          {item}
          <button onClick={() => removeFromList(item)}>Remover</button>
        </li>
      ))}
    </ul>
    </>
    
  )
}

export default List