const initinalState = {
  users: [],
};

export function userReducer(state = initinalState, action) {
  let copiedState = JSON.parse(JSON.stringify(state.users));
  switch (action.type) {
    case "ADD":
      return { ...state, users: [...state.users, action.payload] };
    case "REMOVE":
      let copied = JSON.parse(JSON.stringify(state.users));
      copied = copied.filter(function (value) {
        return value.id != action.payload;
      });
      return { ...state, users: copied };
    case "EDIT":
      let copiedEdit = JSON.parse(JSON.stringify(state.users));
      copiedEdit = copiedEdit.filter(function (value) {
        return value.id != action.payload.id;
      });
      copiedEdit.push(action.payload);
      return { ...state, users: copiedEdit };
    default:
      return state;
  }
}
