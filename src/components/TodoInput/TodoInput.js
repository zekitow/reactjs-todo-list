import React, { Component } from 'react';

import styles from './TodoInput.module.css';

class TodoInput extends Component {
  state = {
    value: ''
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.addTodo({
      id: this.generateId(),
      name: this.state.value,
      isDone: false
    })
    this.setState({ value: '' })
  }

  changeHandler = (e) => {
    this.setState({ value: e.target.value })
  }

  generateId = () => {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    )
  }

  render () {
    return (
      <form onSubmit={ this.submitHandler }>
        <input
          type="text"
          placeholder="Fill me in and hit enter"
          className={ styles.todoInput }
          onChange={ this.changeHandler }
          value={ this.state.value }
        />
      </form>
    )
  }
}

export default TodoInput;