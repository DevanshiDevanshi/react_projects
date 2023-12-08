
import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [Height, setHeight] = useState();
  const [SuperPower, setSuperPower] = useState("");
  const [DisplayCharacter,setDisplayCharacter] = useState(false);

  return (
    <div className="App">
      <div>
      <h1>Build A Hero</h1>
      <label>Name:</label>
      <input type="text" style={{ margin: 10 }}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label>Age:</label>
      <input type="Number" style={{ margin: 10 }}
       onChange={(event) => {
        setAge(event.target.value);
      }}
      />
      <label>Height:</label>
      <input type="Number" style={{ margin: 10 }}
       onChange={(event) => {
        setHeight(event.target.value);
      }}/>
      <label>Super Power:</label>
      <input type="text" style={{ margin: 10 }} 
       onChange={(event) => {
        setSuperPower(event.target.value);
      }}/>
    </div>
    <button onClick={() => setDisplayCharacter(true)}>Display Character </button>
    <div>
      <h1>Hero Info</h1>
      {DisplayCharacter && 
      <ul> 
      <li>Name: {name}</li>
      <li>Age: {age}</li>
      <li>Height: {Height}</li>
      <li>SuperPower: {SuperPower}</li>
      </ul>}
    </div>
    </div>
  );
}

export default App;
