import { combineReducers } from "redux";

import users from "./user_reducer";
import benches from "./benches_reducer";

export default combineReducers({
  users,
  benches
});
