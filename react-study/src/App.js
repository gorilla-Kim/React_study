import React from 'react';
import logo from './logo.svg';
import './App.css';
const exampleData = [
  {
    title: "React",
    value: 0
  },
  {
    title: "Anguler",
    value: 0
  },
  {
    title: "Express",
    value: 0
  }
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          exampleData.map(key => (
            <>
            <p key={key.value}>title: {key.title} | value: {key.value}</p>
            </>
          ))
        }
      </header>
    </div>
  );
}

export default App;
