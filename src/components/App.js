import React from 'react'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import { connect } from 'react-redux'
import {
  handleInitialData
} from '../actions/shared'

class App extends React.Component {

  componentDidMount () {
      //const { store } = this.props //we no longer pass the whole store here
      const { dispatch } = this.props
      
      //The user no longer needs to manually subscribe we cause we can wrap this implementeation inside the connect function too
      //store.subscribe(() => this.forceUpdate()) //forceUpdate is an anti-pattern in React. We rearly use it but it works

      //store.dispatch(handleInitialData())
      dispatch(handleInitialData())

      
      /*Promise.all([
          API.fetchTodos(),
          API.fetchGoals()
      ]).then(([ todos, goals ]) => {
          //console.log('Todos', todos)
          //console.log('Goals', goals)
          store.dispatch(receiveDataAction(todos, goals))
      })*/
  }

render() {

  /*Whenever the forceUpdate gets called we will re-render this component. This is rarely used to re-render components but for our case right here, it fits
  because we dont have a state inside of the App component and it does not make sense to any any just to cause a re-render
  Most of the times, we use this.setState to re-render the UI wheich we are use to*/
  //const { store } = this.props
  /*We no longer need to pass the todos and goals slice of the store down as prop.
  Uisng the ContainerComponent pattern helps solves this
  */ 
  //const { loading } = store.getState() //get the slices of the state tree and pass them down as props to the individual component that needs them which will eventually used to render a list of todos and goals

  if (this.props.loading === true) {
      return <h3>Loading</h3>
  }

  return (
    <div>
      <ConnectedTodos />
      <ConnectedGoals />
    </div>
  )
}
}

/*
        This component is connected to the store. This component is only responsible for interacting with the store. 
        Anything to do with the store and the data is done in the connected component
        So in our case, we grab the store of the context and then pass it to the APP component
        This helps us solve the problem that we have in APP component where need access to the store inside componentDidMount and render methods respectively
        So using this Connect or Container Component pattern helps us
        */
        /*class ConnectedApp extends React.Component {
            render() {
                return (
                <Context.Consumer>
                {(store) => (
                    <App store={store} />
                )}
                </Context.Consumer>
                )
            }
        }*/

/*We no longer need the code above because we have a connect function that will abstract 
the Context.Consumer the way we abstracted Context.Provider in Provider component*/
export default connect((state) => ({
  //We pass whatever prop the component to redner will need from store
  loading: state.loading
}))(App)