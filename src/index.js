import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reducer from './reducers'
import middleware from './middleware'
import { Provider } from 'react-redux'
import { createStore } from 'redux'


const store = createStore(reducer, middleware)


ReactDOM.render(
  <Provider store={/*We only pass the store as prop here and any of the child components can grap the store without calling props
    <Provider>
        <App>
            <Context.Consumer>
                {(store) => ()}
            </Context.Consumer>
        </App>
    </Provider>
    But instead of passing app down directly, we created a container implemented a ConnectedCOmponent pattern. It looks like this
    <ConnectedComponent>
        <PresentationalComponent>
                {(store) => ()}
        </PresentationalComponent>
    </ConnectedComponent>
    - Connected Component: This component is connected to the store. This component is only responsible for interacting with the store. 
    Anything to do with the store and the data is done in the connected component
    - Presentational Component: This is just responsible for rendering content. 
    So, it concerned with how things look. Anything that have to do with something to render
    */
    store
  }>
    <App />
  </Provider>,
  document.getElementById('root')
);

