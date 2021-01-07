import checker from './checker'
import logger from './logger'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
  thunk,
  checker,
  logger
)

/*
In case you forgot
•	Thunks: Thunk middleware can then be used to delay an action dispatch, 
or to dispatch only if a certain condition is met (e.g., a request is resolved). 
This logic lives inside action creators rather than inside components. Middleware 
like thunk helps support asynchronicity in a Redux application. Without thunks, 
synchronous dispatches are the default. We could still make API calls from React components
 (e.g., using the componentDidMount() lifecycle method to make these requests) -- 
 but using thunk middleware gives us a cleaner separation of concerns. Components don't need to 
 handle what happens after an asynchronous call, since API logic is moved away from components to action creators.

 https://github.com/okpalaChidiebere/building-the-store/commit/332820888703bd1c2b042d775a6218ea651e0b7f
 */