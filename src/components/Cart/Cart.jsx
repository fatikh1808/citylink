import React, {useEffect, useState} from "react";

import CartBar from "./CartBar";
import './Cart.css';

import Stepper from "./Stepper";

const step = ['Сборка заказа', 'Сервисы и услуги', 'Способ и адрес доставки', 'Способ оплаты', 'Подтверждение и оплата'];

const Cart = (props) => {

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

    const [buyItems] = useState(boughtItems)
    const [generalPrice, setGeneralPrice] = useState(sum(buyItems));
    const [sortedBuyItems, setSortedBuyItems] = useState(bought(buyItems));
    const [generalAmount, setGeneralAmount] = useState(amount(sortedBuyItems));
    const [checkedItems, setCheckedItems] = useState([]);
    const [orderInfo, setOrderInfo] = useState([])
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

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
                                - >
                            </li>
                        );
                    })}
                </div>
                <div className={'cart_content'}>
                    <Stepper
                        firstCart={firstCart}
                        secondCart={secondCart}
                        thirdCart={thirdCart}
                        fourthCart={fourthCart}
                        boughtItems={boughtItems}
                        generalPrice={generalPrice}
                        generalAmount={generalAmount}
                        onChange={onChange}
                        onChangeCheckbox={onChangeCheckbox}
                        generalDelete={generalDelete}
                        stepperGo={stepperGo}
                        sortedBuyItems={sortedBuyItems}
                        setOrderInfo={setOrderInfo}
                        name={name}
                        setName={setName}
                        lastName={lastName}
                        setLastName={setLastName}
                        orderInfo={orderInfo}
                    />
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

export default Cart;