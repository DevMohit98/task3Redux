import {createStore} from "redux"
import reducer from "./reducers/index"
function saveToLocalStorage(state) {
    try {
      const task = JSON.stringify(state);
      localStorage.setItem("Task", task);
    } catch (e) {
      console.warn(e);
    }
  }
  function loadFromLocalStorage() {
    try {
      const task = localStorage.getItem("Task");
      if (task === null) return undefined;
      return JSON.parse(task);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }
const store=createStore(reducer,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store