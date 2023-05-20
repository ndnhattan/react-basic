const initState = {
  users: [
    { id: 1, name: "Nhat" },
    { id: 2, name: "Tan" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return { ...state, users };
    case "CREATE_USER":
      let user = {
        id: Math.floor(Math.random() * 1001),
        name: `random - ${Math.floor(Math.random() * 1001)}`,
      };
      return { ...state, users: [...state.users, user] };
    default:
      return state;
  }
};

export default rootReducer;
