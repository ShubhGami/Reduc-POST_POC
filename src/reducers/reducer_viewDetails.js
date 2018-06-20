export default function(state = null, action) {
  console.log("reducer viewdetails", action.payload);
  switch (action.type) {
    case "VIEW_DETAILS":
      return action.payload;
  }
  return state;
}
