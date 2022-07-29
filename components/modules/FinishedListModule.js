import List from "../utils/List.js"

const FinishedText = (arr, el) =>{
    let div = document.createElement("div")
    div.classList.add("finished-header")
    let h3 = document.createElement("h3")
    arr.length < 1 ? h3.innerText = "There's work to do, lets get cracking!" : h3.innerText = "Completed tasks"
    div.append(h3)
    el.append(div)
}

const FinishedListModule = (arr, el) =>{
    const section = document.createElement("section")
    section.classList.add("finished-section")
    FinishedText(arr, section)
    let div = document.createElement("div")
    div.classList.add("finished-list")
    section.append(div)
    List(arr,div,false,false)
    el.append(section)
}

export default FinishedListModule