import * as C from './style'
import fit from '../../assets/fit.jpg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../contexts/Context'

export const Form = () => {
    const { state, dispatch } = useContext(Context)

    return (
        <C.Container>
           
            <div className='screen'>
                <div className='leftside'>
                    <img src={fit} alt=''/>
                </div>
           
                    <div className='rigthside'>
                        <h1>Crie uma conta</h1>

                        <form method='post'>
                            <label>
                                seu nome: <br/>
                                <input type='name' name='name' required/>
                            </label>
                        
                            <label>
                                seu e-mail: <br/>
                                <input type='email' name='email' required/>
                            </label>

                            <label>
                                sua senha: <br/>
                                <input type='password' name='password' required/>
                            </label>

                            <Link className='link' to='/header'>
                                <input type='submit' value='Enviar' required/>
                            </Link>
                        </form> 
                    </div>
            </div>

           
        </C.Container>
    )
}