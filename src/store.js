import { createStore } from 'redux';
import { emailReducer } from './reducers';

export default createStore(emailReducer);
