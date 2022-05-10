const listAddItem = document.getElementById("adding");
const InputText = document.getElementById("addList");
const submit = document.getElementById("submit");
const addTodo = document.getElementById("addTodo");
const listItem = document.getElementById("listItem")
document.getElementById("addItems").classList.add('active')
let newLists = '';

function addIntoList() {
    newLists = `
     <input type="checkbox">
     <label>${InputText.value}</label>
    `
    let li = document.createElement("li");
    li.innerHTML = newLists;
    listItem.append(li)
    document.getElementById("addItems").classList.add('active');
}

addTodo.addEventListener("click", function () {
    document.getElementById("addItems").classList.toggle('active')
    InputText.value = "";
})

submit.addEventListener("click", addIntoList)