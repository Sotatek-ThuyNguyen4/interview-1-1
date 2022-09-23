import { ADD_TASK, REMOVE_LAST_TASK, REMOVE_TASK_FAILED } from "./types";

const initialState = {
  taskList: [],
  showError: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK: {
      const newState = { ...state, showError: false };
      newState.taskList.push(payload);
      return newState;
    }

    case REMOVE_LAST_TASK: {
      const newState = { ...state };
      newState.taskList.shift();
      return newState;
    }

    case REMOVE_TASK_FAILED: {
      const newState = { ...state, showError: true };
      return newState;
    }

    default:
      return state;
  }
};
