import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  function getData() {
    console.log('fetching');
    fetch('http://localhost:8000/hello')
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      {list.map((item) => (
        <div>Hello {item.name}</div>
      ))}
      <button onClick={getData}>Click to get Names!</button>
    </div>
  );
}

export default App;
