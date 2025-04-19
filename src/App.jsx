import { useState } from 'react';
import './App.css';

export default function Todo() {
  const [list, setList] = useState([{ text: 'star', done: false }]);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleClickButton = () => {
    if (inputValue === '') return;
    const newObj = { text: inputValue, done: false };
    setList([...list, newObj]);
    setInputValue('');
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleClickButton();
    }
  };

  const handleDeleteButton = (i) => {
    const newList = list.filter((_, index) => index !== i);
    setList(newList);
  };

  const toggleItem = (i) => {
    const newList = list.map((item, index) => {
      if (i === index) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setList(newList);
  };

  return (
    <div className="container">
      <h1 className="title">To-do list</h1>
      <div>
        <input
          type="text"
          onChange={handleInput}
          onKeyDown={handleEnter}
          value={inputValue}
          placeholder="type here.."
        />
        <button onClick={handleClickButton}>add</button>
      </div>
      <div className="items">
        <ul>
          {list.map((value, i) => {
            return (
              <div className="item" key={i}>
                <li
                  onClick={() => {
                    toggleItem(i);
                  }}
                  style={{
                    textDecoration: value.done ? 'line-through' : 'none',
                  }}
                >
                  {value.text}{' '}
                </li>
                <button onClick={() => handleDeleteButton(i)}>삭제</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
