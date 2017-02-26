import React from 'react'

export default class TodosPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Todos!</h1>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
