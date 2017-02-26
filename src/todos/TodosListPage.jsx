import React from 'react'

import TodoList from './TodoList'

export default class TodosListPage extends React.Component {
  todos() {
    return ['Zero', 'Raz', 'Dwa', 'Trzy']

  }
  render() {
    return (
      <div>
        <h2>Current todos:</h2>
        <TodoList todos={this.todos()}/>
      </div>
    )
  }
}
