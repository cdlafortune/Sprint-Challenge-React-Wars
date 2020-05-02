import React, {useState, useEffect} from 'react';
import './App.css';
import Character from "./components/Character";
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.\

  const [myData] = useState(null);


  useEffect( () => {
    axios.get("https://swapi.py4e.com/api/people/")
    .then(response => {
      console.log(response);
      myData = response.data.results;
      return myData;
    })

    .catch(err => {
      console.log(err);
    })
  }, []);
  
  


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {myData.map(el => {
        return <Character 
          name = {el.name}
          height = {el.height}
          mass = {el.mass}
          birthYear = {el.birth_year}
        />
        })}
    </div>
  );
};

export default App;
