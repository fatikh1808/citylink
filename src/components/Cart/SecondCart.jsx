import React from 'react';
import SecondCartItem from "./SecondCartItem";

export default function SecondCart(props) {

    const {
        stepperGo,
        sortedBuyItems
    } = props;

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
            {
                sortedBuyItems.map((item) => (
                    <SecondCartItem
                        item={item}
                    />
                ))
            }
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