import React from 'react'
import classNames from 'classnames'

import TodoItem from './TodoItem'

import css from './TodoList.css'

export default class TodoList extends React.Component {
  renderTodo(todo) {
    return <TodoItem todo={todo}/>
  }

  render() {
    const todos = this.props.todos.map(this.renderTodo)

    return (
      <div className={css.TodoList}>
        <ul className={css.list}>
          {todos}
        </ul>
      </div>
    )
  }
}
