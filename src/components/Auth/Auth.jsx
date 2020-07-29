import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import './Auth.css';

export default function Auth(props) {

    let history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [imgPassword, setImgPassword] = useState('');

    let back = event => {
        event.stopPropagation();
        history.goBack();
    };

    function AuthSubmit(event)  {
        event.preventDefault()

        props.handleAuthSubmit(username, password)

        back(event)
    }

    return (
        <div>
            <div className="main_block">
                <div>
                    <p className={'p_email'}>Номер телефона или почта</p>
                </div>
                <div>
                    <input
                        className={"auth_input"}
                        required
                        placeholder={'Type your number or email ...'}
                        type={'text'}
                        autoComplete={'number or email'}
                        id={'username'}
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <p className={'p_email_second'}>Пароль</p>
                </div>
                <div>
                    <p className={'p_email_third'}>Восстановить</p>
                </div>
                <div>
                    <input
                        className={"auth_input"}
                        required
                        placeholder={'Type your password ...'}
                        type={'password'}
                        autoComplete={'password'}
                        id={'password'}
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <p className={'p_email'}>Код с картинки</p>
                </div>
                <div>
                    <input
                        className={"auth_input_second"}
                        required
                        placeholder={'Type words on image ...'}
                        type={'password'}
                        autoComplete={'password'}
                        value={imgPassword}
                        id={'imgPassword'}
                        onChange={event => setImgPassword(event.target.value)}
                    />
                </div>
                <div>
                    <img alt={'password'}
                         src={'https://www.citilink.ru/captcha/image/cd1d4a320362d7b7fe5936eecd9258e7/?_=1593591542'}
                         className={'auth_password'}
                    />
                </div>
                <div>
                    <button
                        className={'auth_button'}
                        onClick={AuthSubmit}
                    >
                        Войти в кабинет
                    </button>
                </div>
                <div>
                    <button
                        className={'auth_button_second'}
                        onClick={() => history.push(`/register`)}
                    >
                        Зарегистрироваться
                    </button>
                </div>
                <div>
                    <p className={'p_email_finish'}>Регистрация позволяет получать больше скидок и бонусов</p>
                </div>
            </div>
        </div>
    );
}