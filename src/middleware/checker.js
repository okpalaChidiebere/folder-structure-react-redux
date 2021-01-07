import { ADD_TODO } from '../actions/todos'
import { ADD_GOAL } from '../actions/goals'

const checker = (store) => (next) => (action) => {
    if (
      action.type === ADD_TODO &&
      action.todo.name.toLowerCase().includes('bitcoin')
    ) {
      return alert("Nope. That's a bad idea.")
    }

    if (
      action.type === ADD_GOAL &&
      action.goal.name.toLowerCase().includes('bitcoin')
    ) {
      return alert("Nope. That's a bad idea.")
    }

    return next(action)
}

/*More on why we need checker here
https://github.com/okpalaChidiebere/building-the-store/commit/932d212cf7920c6e0174565391db24d61628773f */

export default checker