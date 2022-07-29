const Input = (obj, inputHandler, el, value1) => {
  const input = document.createElement("input");
  input.setAttribute("type", obj.type);
  input.setAttribute("name", obj.name);
  input.required = obj.required;
  value1 ? (input.value = value1) : "";
  input.addEventListener("input", inputHandler);
  el.append(input);
};

const Form = (arr, text, inputHandler, submitHandler, value1, value2) => {
  const form = document.createElement("form");
  arr.map((obj) => Input(obj, inputHandler, form, value1));
  if (!value2) {
    form.addEventListener("submit", submitHandler);
  } else {
    form.addEventListener("submit", (e) => submitHandler(e, value2));
  }
  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.innerText = text;
  form.append(button);
  return form;
};

export default Form;
