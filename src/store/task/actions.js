import { ADD_TASK, REMOVE_LAST_TASK, REMOVE_TASK_FAILED } from "./types";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: {
      ...task,
    },
  };
};

export const removeLastTask = () => ({
  type: REMOVE_LAST_TASK
});

export const removeTaskFailed = () => ({
  type: REMOVE_TASK_FAILED,
});
