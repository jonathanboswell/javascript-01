angular
.module('app.home',[])
.config(function($stateProvider){
  $stateProvider
  .state({
    name: 'home',
    url: '/',
    controller: 'HomeController',
    templateUrl: 'app/home/home.html'
  })
  .state({
    name: 'about',
    url: '/about',
    controller: 'HomeController',
    templateUrl: 'app/home/about.html'
  })
  .state({
    name: 'articles',
    url: '/articles',
    controller: 'ArticlesController',
    templateUrl: 'app/home/articles/list.html'
  })
  .state({
    name: 'articles.view',
    url: '/view',
    controller: 'ArticlesController',
    templateUrl: 'app/home/articles/view.html'
  })
  .state({
    name: 'articles.edit',
    url: '/edit',
    controller: 'ArticlesController',
    templateUrl: 'app/home/articles/edit.html'
  })
  .state({
    name: 'articles.save',
    url: '/save',
    controller: 'ArticlesController',
    templateUrl: 'app/home/articles/save.html'
  })
  .state({
    name: 'login',
    url: '/login',
    controller: 'HomeController',
    templateUrl: 'app/home/login.html'
  });
})
