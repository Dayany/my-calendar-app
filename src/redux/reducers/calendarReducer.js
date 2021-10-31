export default function calendarReducer(
  state = { selectedDate: new Date() },
  action
) {
  switch (action.type) {
    case "SET_SELECTED_DATE":
      return {
        selectedDate:
          action.payload instanceof Date &&
          !isNaN(action.payload) &&
          action.payload.getFullYear().toString().length > 3
            ? action.payload
            : state.selectedDate,
      };
    default:
      return state;
  }
}
