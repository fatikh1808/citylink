import * as types from '../constants';

export function handleRegisterSubmit (username, password) {
    return (dispatch) => {
        dispatch({
            type: types.REGISTER_SUBMIT_REQUEST,
        });
        return fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
                "token": Math.random(),
                "id": Math.random()
            }),
        })
            .then(response => response.json())
            .then(json => {
                if (json) {
                    console.log(json)
                    return json;
                }

                throw new Error('не найдено')

            })
            .then(json => {
                if (!json.token) {
                    throw new Error('Token has not been provided')
                }

                localStorage.setItem('token', json.token);

                dispatch({
                    type: types.REGISTER_SUBMIT_SUCCESS,
                    payload: json
                })
            })
            .catch(reason => dispatch({
                type: types.REGISTER_SUBMIT_FAILURE,
                payload: reason
            }))
    }
}