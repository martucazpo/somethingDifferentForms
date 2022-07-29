import  Form  from "../utils/Form.js"

export const formArr = [{
    name: "task",
    type: "text",
    required: true
}]

const AddTaskModule = (inputHandler, submitHandler, el) =>{
    const section = document.createElement("section")
    section.classList.add("add-form-section")
    const addForm = Form( formArr, "ADD", inputHandler, submitHandler)
    section.append(addForm)
    el.append(section)
}

export default AddTaskModule