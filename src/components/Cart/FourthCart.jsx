import React from 'react';

export default function FourthCart(props) {

    const {stepperGo} = props;

    return (
        <div>
            <div className={'cart_fourth_tip_first'}>
                Для того, чтобы воспользоваться всеми видами оплаты - авторизуйтесь.
            </div>
            <div className={'cart_fourth_name'}>
                Выберите способ оплаты
            </div>
            <div className={'fourth_cart_content'}>
                <div>
                    <input type={'radio'} className={'fourth_cart_radio_first'}/>
                    <div className={'fourth_cart_radio_text_first'}>
                        Банковской картой (онлайн)
                    </div>
                    <div className={'fourth_cart_radio_text_img'}>
                        <img src="https://static.citilink.ru/media/order/cards_payment.png?1592475178" alt=""/>
                    </div>
                    <div className={'fourth_cart_radio_text_first_tip'}>
                        Рекомендуем, как самый безопасный!
                    </div>
                </div>
                <div>
                    <input type={'radio'} className={'fourth_cart_radio'}/>
                    <div className={'fourth_cart_text'}>
                        Наличными или банковской картой при получении
                    </div>
                </div>
                <div>
                    <input type={'radio'} className={'fourth_cart_radio'}/>
                    <div className={'fourth_cart_text'}>
                        Покупка в кредит
                    </div>
                </div>
                <div>
                    <input type={'radio'} className={'fourth_cart_radio'}/>
                    <div className={'fourth_cart_text'}>
                        Яндекс.Деньги
                    </div>
                </div>
                <div>
                    <input type={'radio'} className={'fourth_cart_radio'}/>
                    <div className={'fourth_cart_text'}>
                        Терминалы и кассы
                    </div>
                </div>
                <div>
                    <input type={'radio'} className={'fourth_cart_radio'}/>
                    <div className={'fourth_cart_text'}>
                        WebMoney (комиссия +2.5%)
                    </div>
                </div>
                <div>
                    <input type={'radio'} className={'fourth_cart_radio'}/>
                    <div className={'fourth_cart_text'}>
                        Оплата от юридического лица
                    </div>
                </div>
                <div>
                    <input type={'radio'} className={'fourth_cart_radio'}/>
                    <div className={'fourth_cart_text'}>
                        Оплата через Сбербанк Бизнес Онлайн
                    </div>
                </div>
            </div>
            <div className={'fourth_cart_main_tip'}>
                Оплачивая настоящий заказ, покупатель принимает на себя обязательство в момент приема-передачи товара осуществить полную проверку его внешнего вида и комплектации, ознакомиться с предложенной продавцом информацией, установленной Законом РФ «О защите прав потребителей» и Постановлением Правительства РФ № 612 "Об утверждении Правил продажи товаров дистанционным способом". Кроме того, покупатель подтверждает, что ознакомился с условиями публичной оферты, расположенной на сайте www.citilink.ru, а также с условиями гарантийного обязательства продавца и со сроками в нем установленными. По истечении 24 часов с момента приема-передачи товара продавец имеет право не принимать претензии, связанные с ненадлежащим внешним видом или комплектацией товара.

                Оплата осуществляется картами VISA и MasterCard через систему Яндекс.Деньги сразу после оформления заказа.
                При оформлении заказа необходимо обязательно указать верные ФИО получателя.
                Получатель при передаче заказа (от курьера либо самовывозом) должен предъявить документ, удостоверяющий личность, ФИО в котором должны соответствовать ФИО получателя, указанные при оформлении заказа.
                Документы, удостоверяющие личность: Паспорт РФ, Загранпаспорт РФ, Паспорт моряка, Удостоверение личности военнослужащего РФ, Военный билет, Паспорт иностранного гражданина, Дипломатический паспорт.
            </div>
            <div>
                <button
                    className={'fourth_page_next'}
                    onClick={() => stepperGo({
                        name: 'fourthCart',
                        motion: false,
                        secondName: 'fifthCart',
                        secondMotion: true
                    })}
                >Далее</button>
                <div className={'fourth_page_next_text'}>
                    К подтверждению и оплате
                </div>
            </div>
        </div>
    );
}