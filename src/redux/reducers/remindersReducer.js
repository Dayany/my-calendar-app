export default function remindersReducer(
  state = { reminders: [], isOpen: false },
  action
) {
  switch (action.type) {
    case "ADD_REMINDER":
      return { reminders: [...state.reminders, action.payload], isOpen: true };
    case "TOGGLE_OPEN":
      return { reminders: state.reminders, isOpen: !state.isOpen };
    case "EDIT_REMINDER":
      return {
        reminders: state.reminders.map((curr) =>
          curr.uuid === action.payload.uuid ? { ...action.payload } : curr
        ),
        isOpen: state.isOpen,
      };
    case "DELETE_REMINDER":
      return {
        reminders: state.reminders.filter((curr) => {
          return curr.uuid !== action.payload.uuid;
        }),
        isOpen: state.isOpen,
      };
    default:
      return state;
  }
}
