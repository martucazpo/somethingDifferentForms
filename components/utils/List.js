import DeleteBtn from "./DeleteBtn.js";
import EditBtn from "./EditBtn.js";
import RestoreBtn from "./RestoreBtn.js"
import Form from "./Form.js";
import { formArr } from "../modules/AddTaskModule.js"

const List = (
  arr,
  el,
  key,
  buttons,
  deleteHandler,
  toggleHandler,
  edit,
  editId,
  editHandler,
  inputHandler,
  value1,
  restoreHandler
) => {
  const ul = document.createElement("ul");
  ul.classList.add("list-ul");
  ul.innerHTML = "";
  arr.forEach((item) => {
    let li = document.createElement("li");
    if (edit && item.id === editId) {
      const editForm = Form(formArr,"Change", inputHandler, editHandler, value1, editId);
      li.append(editForm)
    } else {
      let h3 = document.createElement("h3");
      if (buttons==="dedit" && key) {
        h3.innerText = item[key];
        li.append(h3);
        DeleteBtn(item, deleteHandler, li);
        EditBtn(item, toggleHandler, li);
      }else if(buttons==="redo" && key){
        h3.innerText = item[key];
        li.append(h3);
        RestoreBtn(item, restoreHandler, li)
      } else if (key) {
        h3.innerText = item[key];
        li.append(h3);
      } else {
        h3.innerText = item;
        li.append(h3);
      }
    }
    ul.append(li);
  });
  el.append(ul);
};

export default List;
