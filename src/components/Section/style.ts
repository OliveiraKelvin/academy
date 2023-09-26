import styled from "styled-components";

export const Container = styled.div`

    .body-parts { 
        height: 50px;
        width: 100%;
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
        color: white;
        border: 1px solid black;
        background-color: black;
        padding: 15px;
        border-radius: 8px;
    }

    .body-parts p:hover {
        color: red;
        transition: all ease 0.4;
    }   
`;