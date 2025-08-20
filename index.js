
var Todos = [];

function addTodo(){

    var inputElement = document.getElementById("inputTask")
    Todos.push(inputElement.value);
    inputElement.value = "";
}

function showlist()
{
    var listItems = document.getElementById("todo-list")
    for(var i=0; i<Todos.length; i++)
    {
        listItems.innerHTML = '<li> html </li>'
    }
    
    
}