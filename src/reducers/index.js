import { combineReducers } from 'redux'

import todos from './todos'
import loading from './loading'
import goals from './goals'

//added the brand new reducer to our store. Each reducer you add, hss a new slice of state to manage to the state tree
//exporting this will have us return our root reducer in our main index.js file when we finally create our store
export default combineReducers({
  todos,
  loading, //What happens is calling createStrore, other slices of state tree(todos & goals) will have default value of [] while isloading will have default value of `true`
  goals,
})