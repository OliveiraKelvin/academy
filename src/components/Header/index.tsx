import * as C from './style'
import menu2 from '../../assets/menu2.jpg'


export const Header = () => {

    const  handleMatri = () => {
        alert('funcionou!!')
    }

    const handleUni = () => {
        alert('funcionou')
    }

    const handleAten = () => {
        alert('funcionou')
    }

    const handleFal = () => {
        alert('funcionou')
    }

    const handleProf = () => {
        alert('funcionou')
    }

    const handleLog = () => {
        alert('Cadastrou!')
    }

    return (
        <C.Container> 
            <C.Nav> <a href='' />
            <div className='bg'>
                <input type='checkbox' className='Faketrigger'/>
                <ul className='menu-details'>
                    <li><a href="" onClick={handleMatri}>MATRICULE-SE</a></li>
                    <li><a href="" onClick={handleUni}>UNIDADES</a></li>
                    <li><a href="" onClick={handleAten}>ATENDIMENTO</a></li>
                    <li><a href="" onClick={handleFal}>FALE CONOSCO</a></li>
                    <li><a href="" onClick={handleProf}>PROFISSIONAIS</a></li>
                </ul>
                <img src={menu2} alt="" className='menu'/>
                <h4 onClick={handleLog}>Login | Acessar</h4>  
            </div>            
            </C.Nav>
        </C.Container>
    )
}