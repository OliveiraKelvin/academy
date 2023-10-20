import styled from "styled-components";

export const Container = styled.div`

    .body-parts { 
        height: 50px;
        width: 100%;
    }

    
    .body-parts p:hover {
        color: gray;
        transition: all ease 0.1;
    }   
    
    .body-parts p {
        display: inline-block;
        justify-content: center;
        padding: 10px;
        margin-left: 160px;
        font-family: Helvetica, sans-serif;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        color: black;
        border: 1px solid black;
        background-color: yellow;
        padding: 15px;
        border-radius: 15px;
    }
`;