import React, {useEffect, useState} from "react";

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

    let bought = (data) => {

        let tmp = []

        data.forEach(function (item) {
            let tempKey = item.item.id;
            if (!tmp.hasOwnProperty(tempKey)) {
                tmp[tempKey] = {...item};
            } else {
                tmp[tempKey].countItem += item.countItem
            }
        });

        return Object.keys(tmp).map(function (key) {
            return tmp[key];
        });
    }

    let sum = (data) => {
        let sumPrice = []
        data.forEach(function (item) {
            let tempPrice = item.item.price * item.countItem;
            {
                sumPrice = +sumPrice + +tempPrice
            }
        });
        return sumPrice;
    }

    let amount = (data) => {
        let sumPrice = []
        data.forEach(function (item) {
            let tempPrice = item.countItem;
            {
                sumPrice = +sumPrice + +tempPrice
            }
        });
        return sumPrice;
    }

    const [buyItems, setBuyItems] = useState(boughtItems)
    const [generalPrice, setGeneralPrice] = useState(sum(buyItems));
    const [sortedBuyItems, setSortedBuyItems] = useState(bought(buyItems));
    const [generalAmount, setGeneralAmount] = useState(amount(sortedBuyItems));
    const [checkedItems, setCheckedItems] = useState([]);
    const [delivery, setDelivery] = useState('');
    const [shopAddress, setShopAddress] = useState('');
    const [pickerOfTheGoods, setPickerOfTheGoods] = useState([]);
    const [paymentType, setPaymentType] = useState('');
    const [notificationType, setNotificationType] = useState([]);
    const [getSmsWithNumberOfTheGood, setGetSmsWithNumberOfTheGood] = useState('');
    const [smsNotification, setSmsNotification] = useState('');
    const [allInfo, setAllInfo] = useState([]);

    function onChange(event, item) {

        let objectIndex = sortedBuyItems.indexOf(item)

        if (event.target.value === '') {
            sortedBuyItems.splice(objectIndex, 1)
            setCheckedItems(checkedItems.filter(a => a.id !== item.id))
        } else {
            sortedBuyItems[objectIndex].countItem = parseInt(event.target.value)
        }

        setSortedBuyItems([...sortedBuyItems])
        setGeneralAmount(amount(sortedBuyItems))
        setGeneralPrice(sum(sortedBuyItems))
    }

    function onChangeCheckbox(event) {
        const {id, checked, name} = event.target
        if (name === 'itemCheckbox') {
            let check = sortedBuyItems.find(item => parseInt(item.id) === parseInt(id))
            let find = checkedItems.find(item => parseInt(item.id) === parseInt(id))
            if (checked === true) {
                if (find === undefined) {
                    setCheckedItems([...checkedItems, check])
                }
            } else {
                let a = checkedItems.filter(item => item.id !== check.id)
                setCheckedItems([...a])
            }
        } else {
            if (checked === true) {
                setCheckedItems([...checkedItems, ...sortedBuyItems.filter(f => !checkedItems.includes(f))]);
            } else {
                setCheckedItems([])
            }
        }
    }

    function generalDelete() {
        setSortedBuyItems(sortedBuyItems.filter(item => !checkedItems.includes(item)))

        setCheckedItems([])
    }

    useEffect(() => {
        setGeneralAmount(amount(sortedBuyItems))
        setGeneralPrice(sum(sortedBuyItems))
    }, [sortedBuyItems])

    function stepper() {
        if (firstCart) {
            return <FirstCart
                boughtItems={sortedBuyItems}
                generalPrice={generalPrice}
                generalAmount={generalAmount}
                onChange={onChange}
                onChangeCheckbox={onChangeCheckbox}
                generalDelete={generalDelete}
            />
        } else if (secondCart) {
            return <SecondCart
                stepperGo={stepperGo}
                sortedBuyItems={sortedBuyItems}
            />
        } else if (thirdCart) {
            return <ThirdCart
                stepperGo={stepperGo}
                setDelivery={setDelivery}
                setShopAddress={setShopAddress}
                setPickerOfTheGoods={setPickerOfTheGoods}
            />
        } else if (fourthCart) {
            return <FourthCart
                stepperGo={stepperGo}
            />
        } else {
            return <FifthCart
                stepperGo={stepperGo}
            />
        }
    }

    return (
        <div>
            <div className={'cart_content'}>
                {console.log(sortedBuyItems)}
                <div className={'cart_name_header'}>
                    <h1>
                        Корзина
                    </h1>
                </div>
                <div className={'cart_stepper_content'}>
                    {step.map((order_step) => {
                        return (
                            <li key={order_step} className={'order_step'}>{order_step}
                                - >
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
                    boughtItems={buyItems}
                    sum={generalPrice}
                />
            </div>
        </div>
    )
}