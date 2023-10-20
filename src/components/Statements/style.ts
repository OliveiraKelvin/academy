import styled from "styled-components";

export const grid = styled.div`
    height: 380px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
    padding-top: 25px;
    cursor: pointer;

    .grid p {
        border: 1px solid #696969;
        padding: 15px;
        color: black;
        text-align: center;
    }
       
`;


export const Container = styled.div`

.foto-area1 {
    max-height: 400px;
    background-image: url(https://tecnofit-site.s3.sa-east-1.amazonaws.com/media/files/2023/02/03113747/nomes-para-academia.png);
    background-repeat: no-repeat;
    background-size: cover;
    border: 3px solid yellow
}
.foto-area2 {
    max-height: 400px;
    background-image: url(https://newmillen.com.br/wp-content/uploads/2021/09/tipos-de-academia-1.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    border: 3px solid yellow
}
.foto-area3 {
    max-height: 400px;
    background-image: url(https://images.pexels.com/photos/4164640/pexels-photo-4164640.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
    background-repeat: no-repeat;
    background-size: cover;
    border: 3px solid yellow
}
.foto-area4 {
    max-height: 400px;
    background-image: url(https://conteudo.imguol.com.br/c/entretenimento/01/2018/06/12/aula-academia-afundo-treino-exercicio-abre-1528838780171_v2_1x1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    border: 3px solid yellow
}
.foto-area5 {
    max-height: 400px;
    background-image: url(https://media.istockphoto.com/id/619088796/pt/foto/fitness-girl-lifting-dumbbell-in-the-morning.jpg?s=612x612&w=0&k=20&c=_76WNG81vmlYmv07hOQenzQN4mAUXIVGSnHyzQxee94=);
    background-repeat: no-repeat;
    background-size: cover;
    border: 3px solid yellow
}


.locals {
    width: 100%;
    height: 250px;
    text-align: center;
    color: black;
    font-family: Lemon Milk;
    background-image: url(https://geekflare.com/wp-content/uploads/2022/01/google-maps-dropped-pin-1200x385.png);
    border: 4px solid black
}
`;
