import * as C from './style'
import menu2 from '../../assets/menu2.jpg'


export const Header = () => {
    return (
        <C.Container> 
            <C.Nav> <a href='' />
            <div className='bg'>
                <input type='checkbox' className='Faketrigger'/>
                <ul className='menu-details'>
                    <li><a href="">MATRICULE-SE</a></li>
                    <li><a href="">UNIDADES</a></li>
                    <li><a href="">ATENDIMENTO</a></li>
                    <li><a href="">FALE CONOSCO</a></li>
                    <li><a href="">PROFISSIONAIS</a></li>
                </ul>
                <img src={menu2} alt="" className='menu'/>
                <h4>Login | Acessar</h4>  
            </div>            
            </C.Nav>
        </C.Container>
    )
}