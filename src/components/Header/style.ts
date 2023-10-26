import styled from "styled-components";


export const Container = styled.div`

`;

export const Nav = styled.div`
    margin-left: 26px;
    margin-top: 26px;

    .login {
        padding-top: 7px;
        width: 120px;
        max-height: 45px;
        margin-left: 1300px;
        cursor: pointer;
        color: black;
        font-size: 20px;
        background-color: yellow;
        margin-top: 5px;
        font-weight: bold;
        border-radius: 20px;
        text-align: center;
        text-decoration: none;
        animation-name: animacao;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-delay: 1s;        
    }

    @keyframes animacao {
        from {background-color: yellow; max-widht: 120px;}
        to {background-color: green; max-width: 120px;}
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

