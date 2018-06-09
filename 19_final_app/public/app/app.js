// Initialize Firebase
var config = {
  apiKey: "AIzaSyCvyyYlDBN7feyXbLvQBvmZLQN80i3Lcoo",
  authDomain: "message-board-ad58c.firebaseapp.com",
  databaseURL: "https://message-board-ad58c.firebaseio.com",
  projectId: "message-board-ad58c",
  storageBucket: "message-board-ad58c.appspot.com",
  messagingSenderId: "626643767496"
};
firebase.initializeApp(config);

angular
.module('app', ['ui.router','firebase', 'ui.bootstrap', 'ui.grid', 'ui-notification', 'app.home', 'app.admin'])
.config(function($urlRouterProvider, NotificationProvider){
    $urlRouterProvider.otherwise('/');

    NotificationProvider.setOptions({
        delay: 5000,
        startTop: 50,
        startRight: 40,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'right',
        positionY: 'bottom'
    });
})
// Below is the beginner way to configure applciation variables
// When you are ready for various environments:
// https://www.jvandemo.com/how-to-configure-your-angularjs-application-using-environment-variables/
.constant('config', {
    //see components/user/components.js
    defaultState: 'home',
    defaultAdminState: 'admin.users'
})
