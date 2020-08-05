import React, {useState} from 'react';

export default function FourthCart(props) {

    const {
        stepperGo,
        setOrderInfo,
        orderInfo
    } = props;

    const [payType, setPayType] = useState('')

    function handleClickRadio(event) {
        setPayType(event.target.value);
    }

    function nextPage() {
        if (payType === ''){
            alert('wht abt pay type?')
        } else {
            setOrderInfo([...orderInfo, payType])
            stepperGo({
                name: 'fourthCart',
                motion: false,
                secondName: 'fifthCart',
                secondMotion: true
            })
        }

    }

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
                    <input
                        type={'radio'} className={'fourth_cart_radio_first'}
                        name={'payType'} id={'payType'}
                        value={'Card'}
                        onClick={(event => handleClickRadio(event))}
                    />
                    <label className={'fourth_cart_radio_text_first'}>
                        Банковской картой (онлайн)
                    </label>
                    <label className={'fourth_cart_radio_text_img'}>
                        <img src="https://static.citilink.ru/media/order/cards_payment.png?1592475178" alt=""/>
                    </label>
                    <label className={'fourth_cart_radio_text_first_tip'}>
                        Рекомендуем, как самый безопасный!
                    </label>
                    <div>
                        <input type={'radio'} className={'fourth_cart_radio'}
                               name={'payType'} id={'payType'}
                               value={'Cash'}
                               onClick={(event => handleClickRadio(event))}/>
                        <label className={'fourth_cart_text'}>
                            Наличными или банковской картой при получении
                        </label>
                    </div>
                    <div>
                        <input type={'radio'} className={'fourth_cart_radio'}
                               name={'payType'} id={'payType'}
                               value={'Credit'}
                               onClick={(event => handleClickRadio(event))}/>
                        <label className={'fourth_cart_text'}>
                            Покупка в кредит
                        </label>
                    </div>
                    <div>
                        <input type={'radio'} className={'fourth_cart_radio'}
                               name={'payType'} id={'payType'}
                               value={'Yandex money'}
                               onClick={(event => handleClickRadio(event))}/>
                        <label className={'fourth_cart_text'}>
                            Яндекс.Деньги
                        </label>
                    </div>
                    <div>
                        <input type={'radio'} className={'fourth_cart_radio'}
                               name={'payType'} id={'payType'}
                               value={'Terminal'}
                               onClick={(event => handleClickRadio(event))}/>
                        <label className={'fourth_cart_text'}>
                            Терминалы и кассы
                        </label>
                    </div>
                    <div>
                        <input type={'radio'} className={'fourth_cart_radio'}
                               name={'payType'} id={'payType'}
                               value={'WebMoney'}
                               onClick={(event => handleClickRadio(event))}/>
                        <label className={'fourth_cart_text'}>
                            WebMoney (комиссия +2.5%)
                        </label>
                    </div>
                    <div>
                        <input type={'radio'} className={'fourth_cart_radio'}
                               name={'payType'} id={'payType'}
                               value={'IPpay'}
                               onClick={(event => handleClickRadio(event))}/>
                        <label className={'fourth_cart_text'}>
                            Оплата от юридического лица
                        </label>
                    </div>
                    <div>
                        <input type={'radio'} className={'fourth_cart_radio'}
                               name={'payType'} id={'payType'}
                               value={'SberbankBussiness'}
                               onClick={(event => handleClickRadio(event))}/>
                        <label className={'fourth_cart_text'}>
                            Оплата через Сбербанк Бизнес Онлайн
                        </label>
                    </div>
                </div>
            </div>
            <div className={'fourth_cart_main_tip'}>
                Оплачивая настоящий заказ, покупатель принимает на себя обязательство в момент приема-передачи товара
                осуществить полную проверку его внешнего вида и комплектации, ознакомиться с предложенной продавцом
                информацией, установленной Законом РФ «О защите прав потребителей» и Постановлением Правительства РФ №
                612 "Об утверждении Правил продажи товаров дистанционным способом". Кроме того, покупатель подтверждает,
                что ознакомился с условиями публичной оферты, расположенной на сайте www.citilink.ru, а также с
                условиями гарантийного обязательства продавца и со сроками в нем установленными. По истечении 24 часов с
                момента приема-передачи товара продавец имеет право не принимать претензии, связанные с ненадлежащим
                внешним видом или комплектацией товара.

                Оплата осуществляется картами VISA и MasterCard через систему Яндекс.Деньги сразу после оформления
                заказа.
                При оформлении заказа необходимо обязательно указать верные ФИО получателя.
                Получатель при передаче заказа (от курьера либо самовывозом) должен предъявить документ, удостоверяющий
                личность, ФИО в котором должны соответствовать ФИО получателя, указанные при оформлении заказа.
                Документы, удостоверяющие личность: Паспорт РФ, Загранпаспорт РФ, Паспорт моряка, Удостоверение личности
                военнослужащего РФ, Военный билет, Паспорт иностранного гражданина, Дипломатический паспорт.
            </div>
            <div>
                <button
                    className={'fourth_page_next'}
                    onClick={() => nextPage()}
                >Далее
                </button>
                <div className={'fourth_page_next_text'}>
                    К подтверждению и оплате
                </div>
            </div>
        </div>
    );
}