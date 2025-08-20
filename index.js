
var Todos = [];
var editInd = -1;
function addTodo(){

    var inputElement = document.getElementById("inputTask")
    var value = inputElement.value.trim();
    
    if(value === ""){return}

    if(editInd == -1)
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
        <button onclick="updadt(${i})">Edit</button>  
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
    var inputElement = document.getElementById("inputTask");
    inputElement.value = Todos[ind];
    editInd = ind;
    inputElement.focus();
}