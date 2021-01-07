Refactoring our App to create-react-app to see one approach to folder structure with React and Redux

Actions
todos.js contains all of our todos actions
goals.js contains all of our goals actions
sharedjs contains all actions that are shared across a few different reducers


Reducers
index.js uses combineReducers() and export the invocation of that, passing it all of our reducers. This will return our root reducer when imported in our main inex.js file where we eventually create our store
loading.js contains a loading reducer
goals.js contains our goals reducer
todos.js contains our todos reducer

middleware
checker.js
logger.js
index.js

components
Goals.js exports the ConnectedGoals as default not the actual Goals module
Todos.js exports the ConnectedTodos as default not the actual Todos module
List.js exports the actual List Module

Main Index.js
This is where we our createStore invocation as well as providing the store to our Provider Component 

More on Rails style that we used
https://github.com/reduxjs/redux/tree/master/examples/real-world


Other Patterns
Duck Style https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/

Ultimately, the choice is yours. Whichever way you choose to organize your directory structure, just be sure that it’s something that makes sense for your app, and it’s something you’re comfortable with!

To say it one more time, there's no "right" way to build out the folder structure for you app. However, using this structure has a benefit of that other React developers will already be comfortable with this file/folder organization.


Read these articles: 
1. Organizing State  https://redux.js.org/faq/organizing-state
2. Normalizing State Shape  https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape
3. Redux for state management in large web apps  https://blog.mapbox.com/redux-for-state-management-in-large-web-apps-c7f3fab3ce9b?gi=36bebce20f4e
4. Five Tips for Working with Redux in Large Applications.  https://techblog.appnexus.com/five-tips-for-working-with-redux-in-large-applications-89452af4fdcb