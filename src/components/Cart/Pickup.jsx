import React from 'react';

export default function Pickup(props) {

    const {
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

    return (
        <div>
            <div>
                <div className={'first_text'}>
                    1. Место
                </div>
                <div>
                    <div className={'first_text_block'}>
                        <div>
                            <input
                                type={'radio'} className={'first_checkbox'}
                                value="Магазин Ситилинк Московское шоссе ТЦ Империя Самара, ш Московское, д.163А, ТЦ Империя 1 этаж"
                                name={'addressPickup'} id={'addressPickup1'}
                                onClick={(event) => handleClickRadio(event)}
                            />
                            <label className={'first_checkbox_text'}>
                                Магазин Ситилинк "Московское шоссе ТЦ Империя"Самара, ш Московское, д.163А, ТЦ Империя 1
                                этаж
                                <label className={'first_checkbox_text_time'}>
                                    с 09:00 до 21:00
                                </label>
                            </label>
                            <input
                                type={'radio'} className={'second_checkbox'}
                                value="Выбрать другое место самовывоза"
                                name={'addressPickup'} id={'addressPickup1'}
                                onClick={(event) => handleClickRadio(event)}
                            />
                            <label className={'second_checkbox_text'}>
                                Выбрать другое место самовывоза
                            </label>
                            <label className={'second_checkbox_text_time'}>
                                2 магазина , 20 точек выдачи
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={'date_name'}>
                    2. Дата и время самовывоза
                </div>
                <div className={'date_text'}>
                    Заказ готов к отгрузке.
                </div>
                <div className={'date_text'}>
                    Товар для Вас зарезервирован до 21:00 10 июля.
                </div>
            </div>
            <div>
                <div className={'third_data_name'}>
                    3. Кто заберет товары
                </div>
                <div className={'data_props_list'}>
                    <div className={'name_input_block'}>
                        <div
                            className={'name_input_block_name'}>
                            Имя
                        </div>
                        <div className={'name_input_block_input_block'}>
                            <input
                                className={'name_input_block_input'}
                                value={name}
                                onChange={(event => handleOnChange(setName, event))}
                            />
                        </div>
                    </div>
                    <div className={'full-name_input_block'}>
                        <div className={'full-name_input_block_ful-name'}>
                            Фамилия
                        </div>
                        <div className={'full-name_input_block_input_block'}>
                            <input className={'full-name_input_block_input'}
                                   value={lastName}
                                   onChange={(event => handleOnChange(setLastName, event))}
                            />
                        </div>
                    </div>
                    <div className={'number_input_block'}>
                        <div className={'number_input_block_number'}>
                            Телефон для связи
                        </div>
                        <div className={'number_input_block_input_block'}>
                            <input
                                className={'number_input_block_input'}
                                value={phone}
                                onChange={(event => handleOnChange(setPhone, event))}
                            />
                        </div>
                    </div>
                    <div className={'second_number_input_block'}>
                        <div className={'second_number_input_block_second_number'}>
                            Телефон, если не дозвонимся
                        </div>
                        <div className={'second_number_input_block_input_block'}>
                            <input
                                className={'second_number_input_block_input'}
                                value={extraPhone}
                                onChange={(event => handleOnChange(setExtraPhone, event))}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}