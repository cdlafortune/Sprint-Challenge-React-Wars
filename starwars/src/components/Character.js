import React, {useState} from "react";
import styled from "styled-components";

export default function Character(props) {

    //get character info from props
    const name = props.name;
    const height = props.height;
    const mass = props.mass;
    const birthYear = props.birthYear;

    //style character card 
    const characterCard = styled.div`
        background-color: white;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        color: black;
        font-family: monospace;
    `;
    const largeText = styled.h2`
        font-size: 2rem;
    `;


    return (
        <characterCard>
            <largeText>Name: {name}</largeText>
            <p>Birth Year: {birthYear}</p>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
        </characterCard>
    );


};
