const EditBtn = (item, toggleHandler, el) => {
  let editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.innerText = "Edit";
  editBtn.addEventListener("click", () => toggleHandler(item));
  el.append(editBtn);
};

export default EditBtn