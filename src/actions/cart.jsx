import * as types from '../constants';

export function getBoughtItem() {
    return (dispatch) => {
        dispatch({
            type: types.GET_BOUGHT_ITEM_REQUEST,
        });
        return fetch('http://localhost:3000/boughtItems', {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: types.GET_BOUGHT_ITEM_SUCCESS,
                    payload: json
                })
            })
            .catch(reason => dispatch({
                type: types.GET_BOUGHT_ITEM_FAILURE,
                payload: reason
            }))
    }
}

export function deleteItem (id) {
        return (dispatch) => {
            dispatch({
                type: types.DELETE_BOUGHT_ITEM_REQUEST,
            });
            return fetch(`http://localhost:3000/boughtItems/${id}`, {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
            })
                .then(response => response.json())
                .then(json => {
                    dispatch({
                        type: types.DELETE_BOUGHT_ITEM_SUCCESS,
                        payload: json
                    })
                })
                .catch(reason => dispatch({
                    type: types.DELETE_BOUGHT_ITEM_FAILURE,
                    payload: reason
                }))
        }
    }