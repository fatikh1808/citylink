import React from "react";
import BarButton from "./BarButton";

const CartBar = (props) => {

    const {
        stepperGo,
        firstCart,
        sum
    } = props;

    function stepperBar() {
        if (firstCart) {
            return {
                name: 'firstCart',
                motion: false,
                secondName: 'secondCart',
                secondMotion: true
            };
        }
    }


    return (
        <div className={'cart_bar_content'}>
            <div className={'cart_bar_content_section_one'}>
                <div className={'cart_bar_content_section_one_sum'}>
                    <div className={'cart_bar_content_section_one_title'}>
                        Сумма к оплате
                    </div>
                    <div className={'cart_bar_content_section_one_price'}>
                        {sum} р
                    </div>
                </div>
            </div>
            <div className={'cart_bar_content_section_two'}>
                <div className={'cart_bar_content_section_two_sum'}>
                    <div className={'cart_bar_content_section_two_button'}>
                        <BarButton
                        firstCart={firstCart}
                        stepperGo={stepperGo}
                        stepperBar={stepperBar}
                        />
                    </div>
                    <div className={'payment_services'}>
                        <img src="https://static.citilink.ru/media/global/visa.png?1587480945" alt="Visa"/>
                        <img src="https://static.citilink.ru/media/global/mastercard.png?1587480945" alt="Master Card"/>
                    </div>
                </div>
            </div>
            <div className={'cart_bar_content_section_three'}>
                Если у вас уже есть клубная карта, то авторизуйтесь , чтобы воспользоваться.
                А если у вас ещё нет, можете:
                получить или активировать клубную карту
            </div>
        </div>
    )
}

export default CartBar;