import data from '../components/Norm.json'

const initialState = {
    catalog: data,
    groups: data,
    section: data,
    items: data
}

export default function catalogReducer(state = initialState) {
    return state
}