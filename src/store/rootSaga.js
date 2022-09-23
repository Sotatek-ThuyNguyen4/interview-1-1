import { all } from "redux-saga/effects";
import { watchAddTask } from "./task";

export default function* rootSaga() {
  yield all([watchAddTask()]);
}
