const defaultState = {
    cash: 5,
}

export const cashReducer = (state = defaultState, action) => { // reducer весгда возвращает новый объект состояния

    switch (action.type) { // типы это ADD_CASH, GET_CASH
        case 'ADD_CASH':
            return { ...state, cash: state.cash + action.payload } //cash это изменения старого поля
        case 'GET_CASH':
            return { ...state, cash: state.cash - action.payload }

        default:
            return state
    }
}