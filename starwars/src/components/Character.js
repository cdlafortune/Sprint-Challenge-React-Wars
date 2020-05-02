import React, {useState} from "react";
import styled from "styled-components";

export default function Character(props) {

    //get character info from props
    const name = props.name;
    const height = props.height;
    const mass = props.mass;
    const birthYear = props.birthYear;

    //style character card 
    const CharacterCard = styled.div`
        background-color: white;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        color: black;
        font-family: monospace;
        margin: 5%;
        padding: 5%;
        width: 300px;
    `;


    return (
        <CharacterCard>
            <h2>Name: {name}</h2>
            <p>Birth Year: {birthYear}</p>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
        </CharacterCard>
    );


};
