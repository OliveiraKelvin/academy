import * as C from './style';

import { Swiper, SwiperSlide } from 'swiper/react';


export const Statements = () => {

    const Data = [   
        {id: '1', image: 'https://www.movement.com.br//wp-content/uploads/2023/02/academia-fire-sport-2-min.jpg'},
        {id: '2', image: 'https://www.movement.com.br//wp-content/uploads/2023/02/academia-Panobianco-Natal-6-min.jpg'},
        {id: '1', image: 'https://s3.amazonaws.com/smartsystem/pictures/3499/big/smart-fit-academia-sao-jose-do-rio-preto-sjrp-sp-sao-paulo-recepcao.jpg?1478697476'},
        {id: '1', image: 'https://pictures.smartfit.com.br/11740/big/_DSC5989.jpg?1689712537'}
       
    ]

    return (
        <C.Container>
           <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
           >
            {Data.map( (item) => (
                <SwiperSlide 
                    className='slide-item'
                    key={item.id}>
                    <img
                        src={item.image}
                        alt='slider' 
                    />            
                </SwiperSlide>
            ))}
           </Swiper>
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

