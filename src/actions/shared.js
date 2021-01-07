import API from 'goals-todos-api'

export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveData (todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals,
  }
}

/**
Rememeber handlers are also Action creators
*/
export const handleInitialData = () => (dispatch) => {

    //Promise.all() to wait until all Promises have resolved before displaying the content to the user.
    //more on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    Promise.all([
        API.fetchTodos(),
        API.fetchGoals()
    ]).then(([ todos, goals ]) => {
        dispatch(receiveData(todos, goals))
    })
}