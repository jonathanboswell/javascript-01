angular
.module('app')
.factory('UserFactory', function($state, $firebaseAuth){

  var auth = $firebaseAuth(); //Explain why we do it this way?

  //Define default user
  var UserFactory = {
    _user: null, //Explain why we do it this way
    getUser: function()
    {
      return this._user;
    },
    login: function(type)
    {
      // Login with Google
      if(type=="google" || type=="facebook")
      {
        auth.$signInWithPopup(type).then(function(response) {
          console.log("Successfully logged in!", response);
        }).catch(function(error) {
          console.log("Authentication failed:", error);
        });
      }
    },
    logout: function()
    {
      auth.$signOut();
    }
  }

  //Event listener on Authentication changes
  auth.$onAuthStateChanged(function(user) {
    if (user) {
      angular.extend(UserFactory, user);
      $state.go('admin');
    } else {
      UserFactory._user = null;
      $state.go('home.features');
    }
  }, function(error) {
    console.log(error);
  });


  return UserFactory;
});
