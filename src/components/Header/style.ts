import styled from "styled-components";


export const Container = styled.div`

`;

export const Nav = styled.div`
    margin-left: 26px;
    margin-top: 26px;

    h4 {
        max-height: 30px;
        margin-left: 1300px;
        cursor: pointer;
        color: white;
    }
    
    h4:hover {
        color: yellow;
    }

    .menu {
        width: 35px;
        height: 35px;
        position: absolute;
        z-index: 999;
        border-radius: 10px;
        margin-top: 8px;
    }

    
    .menu-details {
        position: absolute;
        z-index: 998;
        left: 0;
        top: 0;
        width: 300px
        height: calc(100vh - 100px);
        padding-top: 100px;
        color: white;
        margin-left: -300px;
    }

    .Faketrigger {
        width: 35px;
        height: 35px;
        position: absolute;
        z-index: 1000;
        opacity: 0;
        cursor: pointer;
        border-radius: 10px;
        margin-top: 8px;
    }

    
    .Faketrigger:checked~ul {
        margin: 0;
        transition: all ease 0.2;
        height: calc(100vh - 100px);
    }


    li {
        padding: 10px 5px;
        color: white
    }

    ul li a {
        text-decoration: none;
        color: white;
        font-size: 22px;
    }

    ul li a:hover {
        color: yellow;
    }

    .bg {
        display: flex;
        width: 100%;
        height: 100vh;
    }
`;

