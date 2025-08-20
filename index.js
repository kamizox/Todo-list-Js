
var Todos = [];
var editValue = -1;
function addTodo(){

    var inputElement = document.getElementById("inputTask")
    var value = inputElement.value.trim();
    inputElement.value = "";
    if(value === ""){return}

    if(editValue == -1)
    {
        Todos.push(value);
    }else
    {
        Todos[editInd] = value;
        editInd = -1;
    }
    inputElement.value = "";
    showlist();
}
function showlist()
{
    var listItems = document.getElementById("todo-list")
    listItems.innerHTML = "";
    for(var i=0; i<Todos.length; i++)
    {
        listItems.innerHTML += `<li> ${Todos[i]}
        <button onclick="update(${i})">Edit</button>  
        <button onclick="delet(${i})">delet</button> </li>`
    } 
}
showlist();
function delet(delitm)
{
     Todos.splice(delitm,1);
     showlist();
}


function updadt(ind)
{
    var inputElement = document.getElementById("inputask");
    inputElement.value = Todos[ind];

}