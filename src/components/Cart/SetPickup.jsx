import Delivery from "./Delivery";
import Pickup from "./Pickup";
import React from "react";

export default function SetPickup(props) {

    const {
        delivery,
        name,
        setName,
        lastName,
        setLastName,
        phone,
        setPhone,
        extraPhone,
        setExtraPhone,
        handleOnChange,
        handleClickRadio
    } = props;

    if (delivery === true) {
        return (
            <Delivery/>
        )
    } else {
        return (
            <Pickup
                name={name}
                setName={setName}
                lastName={lastName}
                setLastName={setLastName}
                phone={phone}
                setPhone={setPhone}
                extraPhone={extraPhone}
                setExtraPhone={setExtraPhone}
                handleOnChange={handleOnChange}
                handleClickRadio={handleClickRadio}
            />
        )
    }
}