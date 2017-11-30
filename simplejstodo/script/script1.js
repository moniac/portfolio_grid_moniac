// Mohammed Mulazada, raadpleging van
//http://watchandcode.com/courses/practical-javascript
//En raadpleging van www.reddit.com/r/learnjavascript/
//Code geoptimalizeerd met http://jshint.com/

//object wordt hier aangemaakt en opgeslagen in var todoList
var todoList = {

	todos: [],

	// voeg een taak(object) toe aan opdrachtlijstje
	addTodo: function (todoText) {
		"use strict";
		// of this.todos.push als nieuwe items achteraan moeten
		this.todos.unshift({
			todoText: todoText,
			completed: false
		});
	},
	// Pas een specifieke taak aan gebaseerd op het nummer en de nieuwe naam
	changeTodo: function (position, newText) {
		"use strict";
		this.todos[position].todoText = newText;
	},
	// verwijder een todo
	deleteTodo: function (position) {
		"use strict";
		this.todos.splice(position, 1);
	},
	// Verander van false naar true, taak afgerond
	toggleCompleted: function (position) {
		"use strict";
		var todo = this.todos[position];
		todo.completed = !todo.completed;
	}

};

var view = {
	displayTodos: function () {
		"use strict";
		// in dit var wordt de ul aangesproken en opgeslagen
		var todosUL = document.querySelector('ul');
		todosUL.innerHTML = '';

		for (var i = 0; i < todoList.todos.length; i++) {
			var todoLi = document.createElement('li');
			// return een bepaalde object uit de lijst.
			var todo = todoList.todos[i];
			var todoTextWithCompletion;

			if (todo.completed === true) {
				todoTextWithCompletion = '(✓) ' + todo.todoText;
			} else {
				todoTextWithCompletion = '( ) ' + todo.todoText;
			}
			todoLi.textContent = todoTextWithCompletion;
			//appenchild om de tekst in de LI in de UL te stoppen
			todosUL.appendChild(todoLi);
		}
	}
};

var buttons = {
	// voor de text velden
	addTodo: function () {
		"use strict";
		// de var is gevuld met het tekstveld en wat erin zit
		var addTodoTextInput = document.getElementById(
			'addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
		view.displayTodos();
	},
	changeTodo: function () {
		"use strict";
		var changeTodoPositionInput = document.getElementById(
			'changeTodoPositionInput');
		var changeTodoTextInput = document.getElementById(
			'changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber,
			changeTodoTextInput.value);
		changeTodoPositionInput.value = '';
		changeTodoTextInput.value = '';
		view.displayTodos();
	},
	deleteTodo: function () {
		var deleteTodoPositionInput = document.getElementById(
			'deleteTodoPositionInput');
		todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
		deleteTodoPositionInput.value = '';
		view.displayTodos();
	},
	toggleCompleted: function () {
		var toggleCompletedPositionInput = document.getElementById(
			'toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
		view.displayTodos();
	}

};

// Buttons
document.querySelectorAll("div button")[0].addEventListener("click", function () {
	buttons.addTodo();
});
document.querySelectorAll("div button")[1].addEventListener("click", function () {
	buttons.changeTodo();
});
document.querySelectorAll("div button")[2].addEventListener("click", function () {
	buttons.deleteTodo();
});
document.querySelectorAll("div button")[3].addEventListener("click", function () {
	buttons.toggleCompleted();
});
