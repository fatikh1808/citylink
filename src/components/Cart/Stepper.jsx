import React from 'react'
import FirstCart from "../../containers/FirstCart";
import SecondCart from "../../containers/SecondCart";
import ThirdCart from "../../containers/ThirdCart";
import FourthCart from "../../containers/FourthCart";
import FifthCart from "../../containers/FifthCart";

const Stepper = (props) => {

    const {
        generalPrice,
        generalAmount,
        onChange,
        onChangeCheckbox,
        generalDelete,
        stepperGo,
        sortedBuyItems,
        setOrderInfo,
        name,
        setName,
        lastName,
        setLastName,
        orderInfo,
        firstCart,
        secondCart,
        thirdCart,
        fourthCart
    } = props;

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
            setOrderInfo={setOrderInfo}
            name={name}
            setName={setName}
            lastName={lastName}
            setLastName={setLastName}
        />
    } else if (fourthCart) {
        return <FourthCart
            stepperGo={stepperGo}
            orderInfo={orderInfo}
            setOrderInfo={setOrderInfo}
        />
    } else {
        return <FifthCart
            stepperGo={stepperGo}
            orderInfo={orderInfo}
            setOrderInfo={setOrderInfo}
            sortedBuyItems={sortedBuyItems}
            generalPrice={generalPrice}
            generalAmount={generalAmount}
            name={name}
            lastName={lastName}
        />
    }
}
export default Stepper;