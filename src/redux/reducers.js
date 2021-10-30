import { combineReducers } from "redux";
import calendarReducer from "./reducers/calendarReducer";
import remindersReducer from "./reducers/remindersReducer";

export default combineReducers({
  calendar: calendarReducer,
  reminders: remindersReducer,
});
