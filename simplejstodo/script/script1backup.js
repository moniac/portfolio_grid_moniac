var todoList={todos:[],addTodo:function(t){"use strict";this.todos.unshift({todoText:t,completed:!1})},changeTodo:function(t,e){"use strict";this.todos[t].todoText=e},deleteTodo:function(t){"use strict";this.todos.splice(t,1)},toggleCompleted:function(t){"use strict";var e=this.todos[t];e.completed=!e.completed}},view={displayTodos:function(){"use strict";var t=document.querySelector("ul");t.innerHTML="";for(var e=0;e<todoList.todos.length;e++){var o,d=document.createElement("li"),n=todoList.todos[e];o=n.completed===!0?"(✓) "+n.todoText:"( ) "+n.todoText,d.textContent=o,t.appendChild(d)}}},buttons={addTodo:function(){"use strict";var t=document.getElementById("addTodoTextInput");todoList.addTodo(t.value),t.value="",view.displayTodos()},changeTodo:function(){"use strict";var t=document.getElementById("changeTodoPositionInput"),e=document.getElementById("changeTodoTextInput");todoList.changeTodo(t.valueAsNumber,e.value),t.value="",e.value="",view.displayTodos()},deleteTodo:function(){var t=document.getElementById("deleteTodoPositionInput");todoList.deleteTodo(t.valueAsNumber),t.value="",view.displayTodos()},toggleCompleted:function(){var t=document.getElementById("toggleCompletedPositionInput");todoList.toggleCompleted(t.valueAsNumber),t.value="",view.displayTodos()}};document.querySelectorAll("div button")[0].addEventListener("click",function(){buttons.addTodo()}),document.querySelectorAll("div button")[1].addEventListener("click",function(){buttons.changeTodo()}),document.querySelectorAll("div button")[2].addEventListener("click",function(){buttons.deleteTodo()}),document.querySelectorAll("div button")[3].addEventListener("click",function(){buttons.toggleCompleted()});
