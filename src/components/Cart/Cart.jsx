import React, {useState} from "react";

import CartBar from "./CartBar";
import './Cart.css';

import SecondCart from "../../containers/SecondCart";
import ThirdCart from "../../containers/ThirdCart";
import FourthCart from "../../containers/FourthCart";
import FifthCart from "../../containers/FifthCart";
import FirstCart from "../../containers/FirstCart"

const step = ['Сборка заказа', 'Сервисы и услуги', 'Способ и адрес доставки', 'Способ оплаты', 'Подтверждение и оплата'];

export default function Cart(props) {

    const {
        firstCart,
        secondCart,
        thirdCart,
        fourthCart,
        stepperGo,
        boughtItems
    } = props;

    const [productAmount, setProductAmount] = useState('');
    const [price, setPrice] = useState('');
    const [generalPrice, setGeneralPrice] = useState('');
    const [delivery, setDelivery] = useState('');
    const [shopAddress, setShopAddress] = useState('');
    const [pickerOfTheGoods, setPickerOfTheGoods] = useState([]);
    const [paymentType, setPaymentType] = useState('');
    const [notificationType, setNotificationType] = useState([]);
    const [getSmsWithNumberOfTheGood, setGetSmsWithNumberOfTheGood] = useState('');
    const [smsNotification, setSmsNotification] = useState('');
    const [allInfo, setAllInfo] = useState([]);

    function stepper() {
        if (firstCart) {
            return <FirstCart
                stepperGo={stepperGo}
                boughtItems={boughtItems}
            />
        } else if (secondCart) {
            return <SecondCart
                stepperGo={stepperGo}
                boughtItems={boughtItems}
            />
        } else if (thirdCart) {
            return <ThirdCart
                stepperGo={stepperGo}
                boughtItems={boughtItems}
            />
        } else if (fourthCart) {
            return <FourthCart
                stepperGo={stepperGo}
                boughtItems={boughtItems}
            />
        } else {
            return <FifthCart
                stepperGo={stepperGo}
                boughtItems={boughtItems}
            />
        }
    }

    return (
        <div>
            <div className={'cart_content'}>
                <div className={'cart_name_header'}>
                    <h1>
                        Корзина
                    </h1>
                </div>
                <div className={'cart_stepper_content'}>
                    {step.map((order_step) => {
                        return (
                            <li key={order_step} className={'order_step'}>{order_step}
                                <li className={'order_stepper'}>-></li>
                            </li>
                        );
                    })}
                </div>
                <div className={'cart_content'}>
                    {stepper()}
                </div>
            </div>
            <div>
                <CartBar
                    stepperGo={stepperGo}
                    firstCart={firstCart}
                    boughtItems={boughtItems}
                />
            </div>
        </div>
    )
}