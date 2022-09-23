import { takeEvery, put, delay } from "redux-saga/effects";
import { ADD_TASK } from "./types";
import { removeTaskFailed, removeLastTask } from "./actions";

export const getTasks = (state) => state.Task;

export function* addTaskSg(action) {
  try {
    yield delay(5000)
    yield put(removeLastTask());
  } catch (e) {
    yield put(removeTaskFailed());
  }
}

export function* watchAddTask() {
  yield takeEvery(ADD_TASK, addTaskSg);
}
