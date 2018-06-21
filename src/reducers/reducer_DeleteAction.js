export default function(state = null, action) {
  switch (action.type) {
    case "DELETE_POST":
      return action.payload;
  }
  return state;
}
