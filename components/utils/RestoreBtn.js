const RestoreBtn = (item, restoreHandler, el) => {
    let restoreBtn = document.createElement("button");
    restoreBtn.classList.add("restore-btn");
    restoreBtn.innerText = "Redo";
    restoreBtn.addEventListener("click", () => restoreHandler(item.id));
    el.append(restoreBtn);
  };
  
  export default RestoreBtn;