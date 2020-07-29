import React from 'react';

export default function FifthCart(props) {

    const {stepperGo} = props;

    return (
        <div className={'fifth_cart_content'}>
            <div className={'Fifth_position_table'}>
                <div className={'Fifth_position_name'}>
                    1 позиция
                </div>
                <div className={'Fifth_position_pay'}>
                    К оплате
                </div>
                <div className={'Fifth_position_price'}>
                    7990р
                </div>
            </div>
            <div>
                <div className={'Fifth_items'}>
                    Товары
                </div>
                <div>
                    <div className={'Fifth_items_name'}>
                        Смартфон SAMSUNG Galaxy A10 32Gb, SM-A105F, черный
                    </div>
                    <div className={'Fifth_items_number'}>
                        1 шт.
                    </div>
                    <div className={'Fifth_items_price'}>
                        7990р
                    </div>
                </div>
            </div>
            <div>
                <div className={'Fifth_self'}>
                    Самовывоз
                </div>
                <div className={'Fifth_self_price'}>
                    0 р
                </div>
            </div>
            <div className={'Fifth_tip'}>
                Внимание! Окончательная стоимость и состав заказа, если в нем присутствуют товары и/или услуги,
                участвующие в акции, будет подтверждена после обработки заказа.
            </div>
            <div>
                <div className={'Fifth_get_check'}>
                    Получить чек
                </div>
                <div className={'Fifth_button_email'}>
                    <button className={'Fifth_button_email_email'}> на email</button>
                </div>
                <div  className={'Fifth_button_sms'}>
                    <button  className={'Fifth_button_sms_sms'}> по смс</button>
                </div>
            </div>
            <div>
                <div  className={'Fifth_email_input'}>
                    <input className={'Fifth_email_input_input'}  />
                </div>
                <div  className={'Fifth_email_tip'}>
                    Пожалуйста, укажите данные для получения электронного чека
                </div>
            </div>
            <div>
                <div  className={'Fifth_settings_item'}>
                    Опции заказа
                </div>
                <div className={'Fifth_checkbox_block'}>
                    <div>
                        <input type={'checkbox'}  className={'Fifth_checkbox_sms'}/>
                        <div className={'Fifth_checkbox_sms_tip'}>
                            Прислать SMS с номером заказа на этот номер
                        </div>
                    </div>
                    <div>
                        <input type={'checkbox'}  className={'Fifth_checkbox_sms_number'}/>
                        <div className={'Fifth_checkbox_sms_number_tip'}>
                            Прислать SMS-уведомление о поступлении заказа
                        </div>
                    </div>
                </div>
                <div  className={'Fifth_sms_tip'}>
                    Внимание! Сервис SMS уведомлений предоставляется «как есть».
                </div>
                <div  className={'Fifth_sms_tip'}>
                    Ситилинк не принимает на себя никакой ответственности за задержку или недоставку SMS сообщений.
                </div>
            </div>
            <div>
                <div  className={'Fifth_comments'}>
                    Комментарий к заказу
                </div>
                <div className={'Fifth_comments_input_block'}>
                    <input  className={'Fifth_comments_input'}/>
                </div>
            </div>
            <div  className={'Fifth_getter_name'}>
                В качестве получателя по данному заказу указан Fotikh dvsdsdv.
            </div>
            <div  className={'Fifth_getter_passport'}>
                При получении заказа получатель должен предъявить документ, удостоверяющий личность. Подробнее
            </div>
            <div>
                <input type={'checkbox'}  className={'Fifth_getter_info'}/>
                <div  className={'Fifth_getter_info_ok'}>
                    Данные получателя указаны верно
                </div>
            </div>
            <div >
                <button
                    className={'Fifth_ok_button'}
                    onClick={() => stepperGo({
                        name: 'fifthCart',
                        motion: false,
                        secondName: 'firstCart',
                        secondMotion: true
                    })}
                >Оформить заказ</button>
            </div>
            <div  className={'Fifth_ok_button_tip'}>
                Нажимая на кнопку «Оформить заказ», я даю разрешение Общество с ограниченной ответственностью "Ситилинк"
                (далее – «Ситилинк») в целях заключения и исполнения договора купли-продажи обрабатывать - собирать,
                записывать, систематизировать, накапливать, хранить, уточнять (обновлять, изменять), извлекать,
                использовать, передавать (в том числе поручать обработку другим лицам), обезличивать, блокировать,
                удалять, уничтожать - мои персональные данные: фамилию, имя, номера домашнего и мобильного телефонов,
                адрес электронной почты. Согласие может быть отозвано мною в любой момент путем направления письменного
                уведомления по адресу Ситилинк. Ознакомиться с политикой персональных данных.
            </div>
        </div>
    );
}