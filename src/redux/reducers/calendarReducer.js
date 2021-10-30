export default function calendarReducer(
  state = { selectedDate: new Date() },
  action
) {
  switch (action.type) {
    case "SET_SELECTED_DATE":
      return {
        selectedDate: action.payload,
      };
    default:
      return state;
  }
}
