import React, {useState} from 'react';
import SetPickup from "./SetPickup";

const ThirdCart = (props) => {

    const {
        stepperGo,
        setOrderInfo,
        name,
        setName,
        lastName,
        setLastName
    } = props;

    const [phone, setPhone] = useState('');
    const [extraPhone, setExtraPhone] = useState('');
    const [delivery, setDelivery] = useState(false);
    const [shopAddress, setShopAddress] = useState('');

    function handleOnChange(setName, event) {
        setName(event.target.value);
    }

    function handleClickRadio(event) {
        setShopAddress(event.target.value);
    }


    function nextPage() {
        if (name === '') {
            alert('name?')
        } else if (lastName === '') {
            alert('last name?')
        } else if (phone === '') {
            alert('wht abt ur phone number ?')
        } else if (shopAddress === '') {
            alert('shop address?')
        } else {
            if (delivery === true) {
                setOrderInfo(['delivery', shopAddress])
            } else {
                setOrderInfo(['pickup', shopAddress, name, lastName, phone, extraPhone])
            }
            stepperGo({
                name: 'thirdCart',
                motion: false,
                secondName: 'fourthCart',
                secondMotion: true
            })
        }
    }


    return (
        <div>
            <div>
                <div className={'delivery_text'}>
                    Способ доставки
                </div>
                <div className={'buttons_block'}>
                    <button
                        className={'delivery_button_first'}
                        onClick={() => setDelivery(false)}
                    >Самовывоз
                    </button>
                    <button
                        className={'delivery_button_second'}
                        onClick={() => setDelivery(true)}
                    >Доставка
                    </button>
                </div>
            </div>
            <SetPickup
                delivery={delivery}
                name={name}
                setName={setName}
                lastName={lastName}
                setLastName={setLastName}
                phone={phone}
                setPhone={setPhone}
                extraPhone={extraPhone}
                setExtraPhone={setExtraPhone}
                handleOnChange={handleOnChange}
                handleClickRadio={handleClickRadio}/>
            <div>
                <div>
                    <button
                        className={'third_page_next'}
                        onClick={() => nextPage()}
                    >Далее
                    </button>
                </div>
                <div className={'third_page_next_text'}>
                    К выбору способа оплаты
                </div>
            </div>
        </div>
    );
}

export default ThirdCart;