import React, { useState, useEffect } from 'react';
import '../index.css';

const todos = [
  {
    title: "1st todo",
    message: "Teach friends react"
  },
  {
    title: "2nd todo",
    message: "Kiss the homies goodnight"
  }
];

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hey", count);
  }, [count]);

  return (
    <div>
      <h1 className="header">Home Screen</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div className="cards-container">
        {todos.map((t, i) => {
          return (
            <div key={i} className="card-container">
              <h1 className="todo-title">{t.title}</h1>
              <p>{t.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;