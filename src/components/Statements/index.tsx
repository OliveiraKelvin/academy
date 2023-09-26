import * as C from './style';


export const Statements = () => {

    return (
        <C.Container>
            <div className='grid-area'>
                    <p className='foto-area1'></p> 
                    <p className='foto-area2'></p>    
                    <p className='foto-area3'></p>
                    <p className='foto-area4'></p>
                    <p className='foto-area5'></p>         
            </div>    
            <div>
                <h1 className='locals'>
                    TENHA UMA (NOME) PERTINHO DE VOCÊ
                    <p>Escolha seu cidade</p>
                    <input type='text' className='locals-input'placeholder='Digite sua cidade'/>

                </h1>
            </div>
        </C.Container>
    )
}

