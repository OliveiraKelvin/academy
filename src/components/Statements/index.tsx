import * as C from './style';


export const Statements = () => {

    return (
        <C.Container>
            <C.grid>
                    <p className='foto-area1'></p> 
                    <p className='foto-area2'></p>    
                    <p className='foto-area3'></p>
                    <p className='foto-area4'></p>
                    <p className='foto-area5'></p>           
            </C.grid>
            <div>
                <h1 className='locals'>
                    TENHA UMA PERTINHO DE VOCÊ
                    <p>Escolha sua cidade</p>
                    <input type='text' className='locals-input'placeholder='Digite sua cidade'/>

                </h1>
            </div>
        </C.Container>
    )
}

