import API from 'goals-todos-api'

//these three will be importe dinside of our reducers folder so that we can listen for these specific actions
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

function addTodo (todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

function removeTodo (id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}

function toggleTodo (id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

/*These three functions we be used in our components so e exported them
These asynchronous action creates encapsalues the three Non-asynchronous action creators above */
export const handleAddTodo = (name, cb) => (dispatch) => {

    API.saveTodo(name)
    .then((todo) => {
        dispatch(addTodo(todo))
        cb()
    })
    .catch(() => {
        alert('There was an error. Try again.')
    })
}

/*We have a function that can be passed in a dispatch
This function returns dispatch dispatch method */
export function handleDeleteTodo (todo) {
  return (dispatch) => {
    dispatch(removeTodo(todo.id))

    return API.deleteTodo(todo.id)
    /* The reason we do not want to wait for the server. Because sometimes there might be a delay.
    You dont want the delay to reflect in your UI 
        .then(() => {
                    this.props.store.dispatch(removeGoalAction(goal.id))
        })*/
    /* check this link if you want to use fully convert this handleDeleteTodo method to b asycnhronous which it should be
    so that you can use async/await 
    https://jonathangrosdubois.medium.com/the-myth-of-evil-for-loops-and-try-catch-blocks-in-javascript-8601860295c1 */
      .catch(() => {
        dispatch(addTodo(todo)) //we add the item back to the list if there is an error
        alert('An error occurred. Try again.')
      })
  }
}

export const handleToggle = (id) => (dispatch) => {

    dispatch(toggleTodo(id))
    API.saveTodoToggle(id)
    .catch(() => {
        dispatch(toggleTodo(id))
        alert('An error occurred. Try again.')
    })
}
