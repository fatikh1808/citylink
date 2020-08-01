import React from 'react';

export default function SecondCart(props) {

    const {
        stepperGo,
        sortedBuyItems
    } = props;

    {console.log(sortedBuyItems)}
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
                    <div className={'product_info_container'} key={item.id}>
                        <div className={'image_container_second'}>
                            <img
                                className={'product_info_img_img'}
                                src={item.item.mainImg}
                                alt="123456"
                            />
                        </div>
                        <div className={'name_container_second'}>
                            {item.item.id} {item.item.name}
                        </div>
                        <div className={'parse_container_second'}>
                            {item.countItem} шт.
                        </div>
                        <div className={'price_container_second'}>
                            {item.item.price * item.countItem} p
                        </div>
                    </div>
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