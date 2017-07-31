import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import pianoApp from './reducers/index.js'
import App from './components/App.jsx'
import style from "./styles/main.scss"; 


let store = createStore(pianoApp);

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

