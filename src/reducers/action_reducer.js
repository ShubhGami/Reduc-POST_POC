export default function(state = null, action) {
  switch (action.type) {
    case "BOOK1":
      return action.payload;
  }
  return state;
}
