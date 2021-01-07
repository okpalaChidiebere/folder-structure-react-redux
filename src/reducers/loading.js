import {
    RECEIVE_DATA
} from '../actions/shared'

/*
REMEMBER: reducer always receives a state and action then returns a new state. And also reducers must be pure functions
*/
export default function loading (state = true, action) {
    console.log(action.type)
    switch(action.type) {
        case RECEIVE_DATA : //we already had the action type in todos and goals reducers that we wanted to listen for
            return false //we update the loading state of our store to false
        default :
        return state
    }
}
