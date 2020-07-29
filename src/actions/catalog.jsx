import * as types from '../constants';

export function getItem() {
    return (dispatch) => {
        dispatch({
            type: types.GET_ITEM_REQUEST,
        });
        return fetch('http://localhost:3000/items', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: types.GET_ITEM_SUCCESS,
                    payload: json
                })
            })
            .catch(reason => dispatch({
                type: types.GET_ITEM_FAILURE,
                payload: reason
            }))
    }
}


export function buyItem(item, customerId) {
    return (dispatch) => {
        dispatch({
            type: types.BUY_ITEM_REQUEST,
        });
        return fetch('http://localhost:3000/boughtItems', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                item,
                "customerId": customerId,
            }),
        })
            .then(response => response.json())
            .then(json => {
                if (json) {
                    return json;
                }

                throw new Error('не найдено')

            })
            .then(json => {
                dispatch({
                    type: types.BUY_ITEM_SUCCESS,
                    payload: json
                })
            })
            .catch(reason => dispatch({
                type: types.BUY_ITEM_FAILURE,
                payload: reason
            }))
    }
}