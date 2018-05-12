//Interact with our framework

//CREATES app with libraries
jangular
.module('app',[]);

//GETS app and ADDS controller
.controller('NewController', function($scope){
    console.log("New controller is invoked!");
    $scope.title = "This is my website";
})
.controller('ArticleController', function($scope){
  $scope.article = 'World Ends';
})
.run();
.renderToDom();
