import * as C from './style.'

export const Footer = () => {
    return (
        <C.Container>
            <h1>Cadastre-se</h1>
            <input type='email' placeholder='Digite seu e-mail'/>
            <input type='password' placeholder='Digite sua senha'/>
        </C.Container>
    )
}