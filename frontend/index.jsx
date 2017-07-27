import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import App from './components/App.jsx'


let store = createStore(App);

ReactDOM.render(
    <Provider store={store}>
        <App author="Bogdan"/>
    </Provider>,
    document.getElementById('root')
)

