var Todos = [];
var editInd = -1;

function addTodo() {
    var inputElement = document.getElementById("inputTask")
    var value = inputElement.value.trim();

    if (value === "") {
        alert("Likhy ga to add button chaly ga na");
        return;
    }

    if (editInd == -1) {
        
        var colors = ["#FF6B6B", "#4ECDC4", "#FFD93D", "#6A4C93", ];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        Todos.push({ text: value, color: randomColor }); 
    } else {
        Todos[editInd].text = value;
        editInd = -1;
    }

    inputElement.value = "";
    showlist();
}

function showlist() {
    var listItems = document.getElementById("todo-list");
    listItems.innerHTML = "";

    for (var i = 0; i < Todos.length; i++) {
        listItems.innerHTML += `<li style="background-color:${Todos[i].color};
                                              width:300px; 
                                              height:50px; 
                                              margin:8px 0; 
                                              display:flex; 
                                              align-items:center; 
                                              justify-content:space-between; 
                                              padding:0 10px; 
                                              border-radius:8px; 
                                              color:white;">
           ${Todos[i].text}
           <span class="upspan"> 
               <button class="upbtn" onclick="updadt(${i})">
                   <img src="edit.png" alt="edit icon" width="18" height="18">
               </button>
           </span>  
           <span class="delspan"> 
               <button class="delbtn" onclick="delet(${i})">
                   <img src="delete.png" alt="Delete" width="16" height="16">
               </button>
           </span> 
        </li>`;
    }
}

function delet(delitm) {
    Todos.splice(delitm, 1);
    showlist();
}

function updadt(ind) {
    var inputElement = document.getElementById("inputTask");
    inputElement.value = Todos[ind].text;
    editInd = ind;
    inputElement.focus();
}
