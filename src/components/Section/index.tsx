import * as C from './style'

export const Section = () => {

    const handlePei = () => {
        alert('funcionou!')
    }

    const handleCos = () => {
        alert('funcionou!')
    }

    const handleOmb = () => {
        alert('funcionou!')
    }

    const handleAbd = () => {
        alert('funcionou!')
    }

    const handlePer = () => {
        alert('funcionou!')
    }


    return (
        <C.Container>
       <div className='body-parts'>
            <p onClick={handlePei}>Peito</p>
            <p onClick={handleCos}>Costas</p>
            <p onClick={handleOmb}>Ombro</p>
            <p onClick={handleAbd}>Abdomen</p>
            <p onClick={handlePer}>Perna</p>
        </div>
    </C.Container>
    )
    
}