const initialState = {
  post: [
    {
      titleValue: "My day of the beach",
      categories: "Beach,Fun",
      content:
        "Book 1 Data My day of the beach which having a category of Beach ,Fun etc etc."
    },
    {
      titleValue: "Fun with a new puppy",
      categories: "Fun,Puppy",
      content:
        "Book 2 Data Fun with a new puppy which having a category of Puppy, Fun etc etc."
    },
    {
      titleValue: "Another day of work",
      categories: "Job",
      content:
        "Book 3 Another day of work which having a category of Job etc etc."
    }
  ]
};
export default function(state = initialState, action) {
  switch (action.type) {
    case "NEW_ENTRY":
      // console.log("Reducer save action", action.payload);
      // console.log("Reducer State", state.post);
      return { post: state.post.concat(action.payload) };
    case "DELETE_POST":
      return {
        post: state.post.filter(post => post.titleValue !== action.payload)
      };
  }
  return state;
}
