import React, {useState} from "react";
import "./Register.css"
import {useHistory} from "react-router-dom";

const Register = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    let {
        handleRegisterSubmit,
    } = props;

    function RegisterSubmit(event) {
        event.preventDefault()

        handleRegisterSubmit(username, password)
    }

    return (
        <div className={'main_content_register'}>
            <div className={'register_header'}>
                <h1>Регистрация</h1>
            </div>
            <div className={'register_first_text'}>
                После регистрации у вас появится уникальная возможность получать скидки, подарки и специальные предложения для зарегистрированных пользователей.
            </div>
            <div className={'register_stepper'}>
                stepper
            </div>
            <div className={'register_email_password_block'}>
                <div className={'register_email'}>
                    Электронный адрес
                </div>
                <div>
                    <input
                        className={'register_email_input'}
                        required
                        placeholder={'Type your username ...'}
                        type={'text'}
                        autoComplete={'username'}
                        value={username}
                        id={'username'}
                        onChange={event => setUsername(event.target.value)}
                    />
                </div>
                <div className={'register_mobile'}>
                    Мобильный телефон
                </div>
                <div>
                    <input
                        className={'register_mobile_input'}
                        required
                        placeholder={'Type your password ...'}
                        type={'text'}
                        autoComplete={'password'}
                        value={password}
                        id={'password'}
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
            </div>
            <div className={'register_buttons_block'}>
                <div>
                    <button
                        className={'register_back_button'}
                        onClick={() => history.push(`/`)}
                    >
                        Назад
                    </button>
                </div>
                <div>
                    <button
                        className={'register_next_button'}
                        onClick={RegisterSubmit}
                    >
                        Далее
                    </button>
                </div>
            </div>
            <div className={'register_question'}>
                Уже регистрировались?
            </div>
            <div>
                <button className={'register_to_begin'}>В начало страницы</button>
            </div>
        </div>
    );
}

export default Register;