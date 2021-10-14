// Creates a Redux store that holds the state of the app. Only one store should exist.
import { createStore } from 'redux';

// Importing the reducer file that is mostly unchanged
import reducers from './reducer';

export default createStore(reducers);
