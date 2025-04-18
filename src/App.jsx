import { useState } from 'react';
import './App.css';

export default function Todo() {
  const [list, setList] = useState(['star', 'dsf', 'sdf']);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleClickButton = () => {
    if (inputValue === '') return;
    setList([...list, inputValue]);
    setInputValue('');
  };

  return (
    <div className="container">
      <h1 className="title">To-do list</h1>
      <div>
        <input
          type="text"
          onChange={handleInput}
          value={inputValue}
          placeholder="type here.."
        />
        <button onClick={handleClickButton}>add</button>
      </div>
      <div className="items">
        <ul>
          {list.map((value, i) => {
            return <li key={i}>{value}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
