import * as types from '../constants';

export function handleAuthSubmit(username, password) {
    return (dispatch) => {
        dispatch({
            type: types.AUTH_SUBMIT_REQUEST,
        });
        return fetch('http://localhost:3000/users', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(json => {
                const oldUser = json.filter(item => item.username === username && item.password === password)
                if (oldUser.length > 0) {
                    return oldUser;
                }
                alert('not found')
                throw new Error('не найдено');
            })
            .then(json => {
                if (!json[0].token) {
                    throw new Error('Token has not been provided')
                }

                localStorage.setItem('token', json[0].token);
                dispatch({
                    type: types.AUTH_SUBMIT_SUCCESS,
                    payload: json
                })
            })
            .catch(reason => dispatch({
                type: types.AUTH_SUBMIT_FAILURE,
                payload: reason
            }))
    }
}
export function handleLogout() {
    return (dispatch) => {
        dispatch({
            type: types.LOGOUT_SUBMIT_REQUEST
        });
        return fetch('http://localhost:3000/users', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        })
            .then(json => {
                // Remove JWT from localStorage
                localStorage.removeItem('token');

                // redirect to welcome in case of failure
                dispatch({
                    type: types.LOGOUT_SUBMIT_SUCCESS,
                    payload: json
                })
            })
            .catch(reason => dispatch({
                type: types.LOGOUT_SUBMIT_FAILURE,
                payload: reason,
            }));
    };
}