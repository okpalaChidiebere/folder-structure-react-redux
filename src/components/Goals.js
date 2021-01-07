import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddGoal,
  handleDeleteGoal
} from '../actions/goals'

class Goals extends React.Component {

    addItem = (e) => {
        e.preventDefault()
        this.props.dispatch(handleAddGoal(
            this.input.value,
            () => this.input.value = '' //invoking this callback function will set this input field to empty
            ))

    }

    removeItem = (goal) => {
        this.props.dispatch(handleDeleteGoal(goal))
    }

  render() {
    return (
      <div>
        <h1>Goals</h1>
        <input
        type='text'
        placeholder='Add Goal'
        ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add Goal</button>

        <List items={this.props.goals} remove={this.removeItem}/>
      </div>
    )
  }
}

/*This will be our default export so that whenever we import Goals Module, what we will get back is our ConnectedGoals Component coming from the connect function in ReactRedux*/
export default connect((state) => ({
    goals: state.goals
}))(Goals)