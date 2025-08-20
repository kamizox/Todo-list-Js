
var Todos = [];

function addTodo(){

    var inputElement = document.getElementById("inputTask")
    Todos.push(inputElement.value);
    inputElement.value = "";
}

function showlist()
{
    var listItems = document.getElementById("todo-list")
    listItems.innerHTML = "";
    for(var i=0; i<Todos.length; i++)
    {
        listItems.innerHTML += `<li> ${Todos[i]} <button onclick="delet(${i})">delet</button> </li>`
    } 
}
showlist();

function delet(delitm)
{
     Todos.splice(delitm,1);
     showlist();
}