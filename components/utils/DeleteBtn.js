const DeleteBtn = (item, deleteHandler, el) => {
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", () => deleteHandler(item.id));
  el.append(deleteBtn);
};

export default DeleteBtn;
