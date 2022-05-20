const todoForm = document.getElementById("todoListForm");
const todoInput = document.getElementById("todoInput");
const todoUl = document.getElementById("todoUl");

let Account = localStorage.getItem("Account");
let todoStr = localStorage.getItem(Account+"_todo");
let todo = [];


function addTodo(TD)
{
	const li = document.createElement("li");
	const span = document.createElement("span");
	const button = document.createElement("button");
	
	todoUl.appendChild(li);
	li.appendChild(span);
	li.appendChild(button);
	
	button.addEventListener("click", removeTodo);
	
	span.innerText = TD;
	button.innerText = "CLEAR";
	
	saveTodo();
}

function loadTodo()
{
	if(!todoStr)
		console.log("ERROR");
	else
		todo = JSON.parse(todoStr);
	
	if(todo != null)
		todo.forEach(addTodo);
}

function saveTodo()
{
	localStorage.setItem(Account+"_todo", JSON.stringify(todo));
}

function removeTodo(event)
{
	const li = event.target.parentElement;
	
	for(let T = 0 ; T < todo.length ; T ++)
		if(todo[T] === li.querySelector("span").innerText)
			todo.splice(T, 1);
	
	li.remove();
	saveTodo();
}

function onSubmit(event)
{
	event.preventDefault();
	
	const TD = todoInput.value;
	todoInput.value = "";
	
	todo.push(TD);
	addTodo(TD);
}

loadTodo();
todoForm.addEventListener("submit", onSubmit)