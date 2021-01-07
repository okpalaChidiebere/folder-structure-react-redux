import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle
} from '../actions/todos'

class Todos extends React.Component {
            
    addItem = (e) => {

        e.preventDefault()

        this.props.dispatch(handleAddTodo(
            this.todoInput.value,
            () => this.todoInput.value = ''
        ))
        /*const name = this.todoInput.value //we can easily reference this.input with arrow functions here because we assigned an input property to the global this within this component
        this.todoInput.value = ''
        
        //the store was passed as props from the parent, the App Component. We will still break this props down into separete modules later
        //but passing it as props for now makes it easier for refactoring later
        this.props.store.dispatch(addTodoAction({
            name,
            complete: false,
            id: generateId()
        }))*/
    }

    removeItem = (todo) => {

        //Now we just have UI logic. We moved the API logic to an asynchronous function the returns a promise
        this.props.dispatch(handleDeleteTodo(todo))
    }

    toggleItem = (id) => {
        this.props.dispatch(handleToggle(id))
        //this.props.store.dispatch(toggleTodoAction(id))
    }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
        type='text'
        placeholder='Add Todo'
        ref={ /*
            inputElement is a reference to the input DOM element. We are storing a reference to the input DOM element
            in the todoInput instance property of the Todos class.
            Remeber With arrow functions, the value of "this" is based on the function's surrounding context 
            (where the function is located in the code). In other words, the value of this inside an arrow function 
            is the same as the value of this outside the function.

            Instead of sticking the value of this input field on our Component state to make it controlled,
            We added a ref and stick this ref on this component instance. So whenever, we want
            to grap the value of the input, we will grap it from 'this.todoInput'

            for more on when to use refs cehck here https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
            */
            (inputElement) => this.todoInput = inputElement}
        />
        <button onClick={this.addItem}>Add Todo</button>

        <List items={this.props.todos} remove={this.removeItem} toggle={this.toggleItem}/>
      </div>
    )
  }
}

/*This will be our default export so that whenever we import Todos Module, what we will get back is our ConnectedTodos Component coming from the connect function in ReactRedux*/
export default ConnectedTodos = connect((state) => ({
    todos: state.todos
}))(Todos)