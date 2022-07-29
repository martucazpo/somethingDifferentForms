import HeaderModule from "./components/modules/HeaderModule.js";
import AddTaskModule from "./components/modules/AddTaskModule.js";
import RenderListModule from "./components/modules/RenderListModule.js";
import FinishedListModule from "./components/modules/FinishedListModule.js";
import { uuidv4 } from "./js/uuidv4.js";

const root = document.getElementById("root");

const state = {
  id: "",
  task: "",
  tasks: [],
  finished: [],
  isEdit: false,
};

const handleInput = (e) => {
  let { name, value } = e.target;
  state[name] = value;
};

const handleSubmit = (e) => {
  e.preventDefault();
  let todo = {};
  todo.task = state.task;
  todo.id = uuidv4();
  state.tasks.push(todo);
  state.task = "";
  render();
};

const handleDelete = (id) => {
  let allTheOthers = state.tasks.filter((item) => item.id !== id);
  let theOne = state.tasks.filter(item => item.id === id)
  if(state.finished.length <= 5){
    state.finished.push(theOne[0])
  } else {
    state.finished.shift()
    state.finished.push(theOne[0])
  }
  state.tasks = allTheOthers;
  render();
};

const handleToggle = (todo) => {
  state.id = todo.id;
  state.task = todo.task;
  state.isEdit = true;
  render();
};

const handleEdit = (e,id) => {
    e.preventDefault()
  let youveChanged = state.tasks.map((item) => {
    if (item.id === id) {
      item.task = state.task;
    }
    return item;
  });
  state.tasks = youveChanged;
  state.id = "";
  state.task = "";
  state.isEdit = false;
  render()
};

const restoreTask = (id) =>{
  let allTheOthers = state.finished.filter(item => item.id !== id)
  let theOne = state.finished.filter(item => item.id === id)
  state.tasks.push(theOne[0])
  state.finished = allTheOthers
  render()
}

const render = () => {
  root.innerHTML = "";
  HeaderModule(root);
  const main = document.createElement("main");
  main.innerHTML = "";
  root.append(main);
  AddTaskModule(handleInput, handleSubmit, main);
  RenderListModule(
    state.tasks,
    main,
    handleDelete,
    handleToggle,
    state.isEdit,
    state.id,
    handleEdit,
    handleInput,
    state.task,
    restoreTask
  );
  FinishedListModule(state.finished, main, restoreTask)
};

render();
