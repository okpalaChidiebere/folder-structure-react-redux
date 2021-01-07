import API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

function addGoal (goal) {
  return {
    type: ADD_GOAL,
    goal,
  }
}

function removeGoal (id) {
  return {
    type: REMOVE_GOAL,
    id,
  }
}

/*
        The code below executes in this order
        - The API request occurs first
        - The API request is resolved
        - Thunk middleware invokes the function with dispatch()
        - The action returned by the receiveTodos is dispatched
        
        in your project make this function async like
        const handleDeleteGoal = async (goal) => (dispatch) => {} then you can use try/catch as well was await
        like
        try {
            const goal = await API.saveGoal(name);
            dispatch(addGoalAction(goal))
            cb()
        } catch (error) {
            console.log('ERROR!', error);
            alert('There was an error. Try again.')
        }
        https://jonathangrosdubois.medium.com/the-myth-of-evil-for-loops-and-try-catch-blocks-in-javascript-8601860295c1
*/
export const handleAddGoal = (name, cb) => (dispatch) => {
    API.saveGoal(name)
    .then((goal) => {
        dispatch(addGoal(goal))
        cb() //used to set the input filed to be empty
    })
    .catch(() => alert('There was an error. Try again.'))
}

/*
        The code below executes in this order
        -Thunk middleware invokes the first function with dispatch()
        - The action returned by the removeGoalAction is dispatched
        - The API request occurs first
        - The API request is resolved
        **** if the API fails we rollback the previous action made to the state** know as optimistic update
        - Thunk middleware invokes the second function with dispatch()
        - The action returned by the addGoalAction is dispatched */
export const handleDeleteGoal = (goal) => (dispatch) => {

    dispatch(removeGoal(goal.id))
    
    API.deleteGoal(goal.id)
    .catch(() => {
        dispatch(addGoal(goal))
        alert('An error occurred. Try again.')
    })
}