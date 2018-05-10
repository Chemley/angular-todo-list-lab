(function () {
  function TodoController() {

/* TODO: controller must add an array of sample todo objects to the view model.
  Each todo object has “task” (string) and “completed” (boolean).
  Include a mix of complete and incomplete items. */
    var vm = this;

   vm.todoList = [
     {task: "Wash Clothes",
    completed: false},
     {task: "Do Dishes",
    completed: false},
     {task: "Take Out Dog",
    completed: false}
   ];
   vm.newTaskText = "";


    vm.addTodo = function(task) {
      console.log(task);
      vm.todoList.push({
        task: task,
        completed: false
      });
      // clears the input after a new task is added.
      vm.newTaskText = "";
    };

    vm.deleteTodo = function(task) {
      vm.todoList.splice(task, 1);
    }

    vm.completeTodo = function(task) {
      task.completed = true;
    }
  }


  angular
    .module("todoApp")
    .controller("TodoController", TodoController);
})();
