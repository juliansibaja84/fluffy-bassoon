import { combineReducers } from 'redux';
import reducerUser from "./reducer-user";
import reducerActiveUser from './reducer-active-user'

const allReducers = combineReducers({
  users: reducerUser,
  activeUser: reducerActiveUser
});

export default allReducers;