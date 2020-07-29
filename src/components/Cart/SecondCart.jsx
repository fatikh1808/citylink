import React from 'react';

export default function SecondCart(props) {

    const {stepperGo} = props;

    return (
        <div>
            <div className={'order_second '}>
                Обращаем Ваше внимание, что окончательная стоимость и состав заказа, если в нем присутствуют товары
                и/или услуги, участвующие в акции, будет подтверждена после обработки заказа.
            </div>
            <div className={'next_commands'}>
                <button
                    className={'second_cart_button_next'}
                    onClick={() => stepperGo({
                        name: 'secondCart',
                        motion: false,
                        secondName: 'thirdCart',
                        secondMotion: true
                    })}
                >
                    Далее
                </button>
                <div className={'tip_to_order'}>
                    К выбору способа и адреса доставки, либо выберите сервисы и услуги:
                </div>
            </div>
            <div className={'product_info_container'}>
                <div className={'image_container_second'}>
                    <img src="https://items.s1.citilink.ru/1139317_v01_s.jpg" alt=""/>
                </div>
                <div className={'name_container_second'}>
                    Смартфон SAMSUNG Galaxy A10 32Gb, SM-A105F, черный
                </div>
                <div className={'parse_container_second'}>
                    1 шт.
                </div>
                <div className={'price_container_second'}>
                    7990 p
                </div>
            </div>
            <div className={'next_commands'}>
                <button
                    className={'second_cart_button_next'}
                    onClick={() => stepperGo({
                        name: 'secondCart',
                        motion: false,
                        secondName: 'thirdCart',
                        secondMotion: true
                    })}
                >
                    Далее
                </button>
                <div className={'tip_to_order'}>
                    К выбору способа и адреса доставки
                </div>
            </div>
        </div>
    );
}