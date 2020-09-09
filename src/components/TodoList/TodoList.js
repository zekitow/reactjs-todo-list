import React, { Component } from 'react';

import styles from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem'
import TodoInput from '../TodoInput/TodoInput';

class TodoList extends Component {
  state = {
    todos: []
  }

  addTodoHandler = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  toggleStatusHandler = (todoId) => {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          id: todo.id,
          name: todo.name,
          isDone: !todo.isDone
        }
      }
      return todo
    })

    this.setState({ todos: todos })
  }

  render () {
    const todoItems = this.state.todos.map((todo, index) => {
      return (
        <TodoItem
          key={ 'todoItem-' + index }
          id={ todo.id}
          name={ todo.name }
          isDone={ todo.isDone }
          toggleStatus={ this.toggleStatusHandler }
        />
      )
    })

    return (
      <main className={styles.main}>
        <h1>React Todo List</h1>
        <ul className={styles.mainList}>{ todoItems }</ul>
        <TodoInput addTodo={ this.addTodoHandler } />
      </main>
    )
  }
}

export default TodoList;