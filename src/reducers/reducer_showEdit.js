export default function(state = true, action) {
  switch (action.type) {
    case "EDIT_CONTENT":
      return action.payload;
  }
  return state;
}
