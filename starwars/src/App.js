import React, {useState, useEffect} from 'react';
import './App.css';
import Character from "./components/Character";
import axios from 'axios';
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.\

  let [myData, setData] = useState([]);


  useEffect( () => {
    axios.get("https://swapi.py4e.com/api/people/")
    .then(response => {
      console.log(response);
      setData(response.data.results);
    })

    .catch(err => {
      console.log(err);
    })
  }, []);

  const Container = styled.div`
    display: flex;
    margin: 0 auto;
    width: 100%;
  `;

  const heading = styled.h1`
    justify-content: center;
  `;

  const Cards = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  `;


  
  


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Container>
        <Cards>
          {myData.map(el => {
            return <Character 
              name = {el.name}
              height = {el.height}
              mass = {el.mass}
              birthYear = {el.birth_year}
            />
            })}
        </Cards>

      </Container>

    </div>
  );
};

export default App;
