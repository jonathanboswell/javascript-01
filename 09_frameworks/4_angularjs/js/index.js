angular
.module('app', [])
.controller('TaskController', function($scope, TaskFactory) {
    $scope.title = "My Tasks";
    $scope.task = null;
    $scope.tasks = TaskFactory.getTasks();

    $scope.add = function()
    {
      $scope.tasks.push($scope.task);
      $scope.task = "";
    }

    $scope.remove = function(task)
    {
        var index = $scope.tasks.indexOf(task);
        $scope.tasks.splice(index,1);
    }
})
.factory('TaskFactory', function(){

    var tasks = {
        taskArray: ['wake-up'],
        getTasks: function(){
            return this.taskArray;
        }
    };

    return tasks;
});
