import List from "../utils/List.js";

const ListHeader = (el) => {
  const div = document.createElement("div");
  div.classList.add("list-header");
  const h3 = document.createElement("h3");
  h3.innerText = "There's nothing here to do!";
  div.append(h3);
  el.append(div);
};

const RenderListModule = (
  arr,
  el,
  deleteHandler,
  toggleHandler,
  edit,
  editId,
  editHandler,
  inputHandler,
  value1
) => {
  const section = document.createElement("section");
  section.classList.add("list-section");
  section.innerHTML = "";
  arr.length < 1
    ? ListHeader(section)
    : List(
        arr,
        section,
        "task",
        true,
        deleteHandler,
        toggleHandler,
        edit,
        editId,
        editHandler,
        inputHandler,
        value1
      );
  el.append(section);
};

export default RenderListModule;
