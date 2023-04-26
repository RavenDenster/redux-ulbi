import { createStore, combineReducers, applyMiddleware } from 'redux'
import { cashReducer } from './cashReducer'
import { CustomerReducer } from './customerReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    cash: cashReducer, // cashReducer это функция которая возвращает state, тоесть объект с полем cash
    customers: CustomerReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) // applyMiddleware нужен когда в rootReducer есть асинхронность, он помогает внутри каких-то сторонних функциях использовать диспатч
