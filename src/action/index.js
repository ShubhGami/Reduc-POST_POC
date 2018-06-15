export function showPost(booksDetail, initial) {
  console.log("flag value is :", booksDetail);
  return {
    type: "BOOK1",
    payload: { post: booksDetail, flag: initial }
  };
}
export function addPost(post) {
  return {
    type: "NEW_ENTRY",
    payload: post
  };
}
export function showEditPost(flag) {
  return {
    type: "EDIT_CONTENT",
    payload: flag
  };
}
