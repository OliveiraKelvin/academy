import styled from "styled-components";

export const Container = styled.div`
   

    .screen {
        display: flex;
        height: 100vh;
    }

    .leftside {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .leftside img {
        max-width: 500px;
        height: auto;
    }

    .rigthside {
        width: 400px;
        background-color: gold;
        padding: 50px;
    }    


    .rigthside label {
        display: block;
        margin-bottom: 20px;
    }

    .rigthside input {
        border: 1px solid #999;
        border-radius: 3px;
        padding: 8px;
        font-size: 14px;
        width: 100%;
        outline: 0;
    }

    .link input {
        width: 90px;
        margin-left: 155px;
        margin-top: 30px;
        background-color: yellow;
        font-weight: bold;
    }
`;