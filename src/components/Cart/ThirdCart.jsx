import React from 'react';

export default function ThirdCart(props) {

    const {stepperGo} = props;

    return (
        <div>
           <div>
                <div className={'delivery_text'}>
                   Способ доставки
                </div>
               <div className={'buttons_block'}>
                   <button className={'delivery_button_first'}>Самовывоз</button>
                   <button className={'delivery_button_second'}>Доставка</button>
               </div>
           </div>
            <div>
                <div className={'first_text'}>
                    1. Место
                </div>
                <div>
                    <div className={'first_text_block'}>
                        <div>
                            <input type={'radio'} className={'first_checkbox'}/>
                            <div className={'first_checkbox_text'}>
                                Магазин Ситилинк "Московское шоссе ТЦ Империя"Самара, ш Московское, д.163А, ТЦ Империя 1 этаж
                                <div className={'first_checkbox_text_time'}>
                                с 09:00 до 21:00
                            </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className={'second_text_block'}>
                            <input type={'radio'} className={'second_checkbox'}/>
                            <div className={'second_checkbox_text'}>
                                Выбрать другое место самовывоза
                            </div>
                            <div className={'second_checkbox_text_time'}>
                                2 магазина , 20 точек выдачи
                            </div>
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
                        <div className={'name_input_block_name'}>
                            Имя
                        </div>
                        <div className={'name_input_block_input_block'}>
                            <input className={'name_input_block_input'}/>
                        </div>
                    </div>
                    <div className={'full-name_input_block'}>
                        <div className={'full-name_input_block_ful-name'}>
                            Фамилия
                        </div>
                        <div className={'full-name_input_block_input_block'}>
                            <input className={'full-name_input_block_input'}/>
                        </div>
                    </div>
                    <div className={'number_input_block'}>
                        <div className={'number_input_block_number'}>
                            Телефон для связи
                        </div>
                        <div className={'number_input_block_input_block'}>
                            <input className={'number_input_block_input'}/>
                        </div>
                    </div>
                    <div className={'second_number_input_block'}>
                        <div className={'second_number_input_block_second_number'}>
                            Телефон, если не дозвонимся
                        </div>
                        <div className={'second_number_input_block_input_block'}>
                            <input className={'second_number_input_block_input'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <button
                        className={'third_page_next'}
                        onClick={() => stepperGo({
                            name: 'thirdCart',
                            motion: false,
                            secondName: 'fourthCart',
                            secondMotion: true
                        })}
                    >Далее</button>
                </div>
                <div className={'third_page_next_text'}>
                    К выбору способа оплаты
                </div>
            </div>
        </div>
    );
}