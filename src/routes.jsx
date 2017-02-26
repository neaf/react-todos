import React from 'react'
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router'

import App from './App'
import TodosPage from './todos/TodosPage'
import TodosListPage from './todos/TodosListPage'
import NewTodoPage from './todos/NewTodoPage'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route component={TodosPage}>
        <IndexRoute component={TodosListPage}/>
        <Route path="new"  component={NewTodoPage}/>
      </Route>
    </Route>
  </Router>
)
