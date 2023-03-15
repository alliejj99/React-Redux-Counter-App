enum ActionType {
  FETCH_POSTS = "FETCH_POSTS",
  DELETE_POSTS = "DELETE_POSTS",
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Action {
  type: ActionType;
  payload: Post[];
}

const post = (state = [], action: Action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return [...state, ...action.payload]; // payload의 값이 하나가 아니기 때문에 복사
    default:
      return state;
  }
};
export default post;
