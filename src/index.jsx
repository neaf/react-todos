import React from 'react'
import ReactDOM from 'react-dom'

import router from './routes'

const rootEl = document.getElementById('root')

ReactDOM.render(router, rootEl)

if (module.hot) module.hot.accept('./App', () => render(App))
