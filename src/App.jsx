import React from 'react'

import css from './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div className={css.App}>
        {this.props.children}
      </div>
    )
  }
}
