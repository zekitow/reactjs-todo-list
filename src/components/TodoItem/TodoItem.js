import React, { Component } from 'react';

import styles from './TodoItem.module.css';

class TodoItem extends Component {
  clickItemHandler = (e) => {
    this.props.toggleStatus(this.props.id)
  }

  render () {
    const itemDoneStyle = this.props.isDone ? styles.done : ''
    const classNames = [
      styles.todoItem,
      itemDoneStyle
    ]

    return (
    <li
      onClick={ this.clickItemHandler }
      className={ classNames.join(' ') }>
      { this.props.name }
    </li>
    )
  }
}

export default TodoItem;