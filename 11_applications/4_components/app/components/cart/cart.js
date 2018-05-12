angular
.module('app')
.component('cart', {
    templateUrl: "components/cart/cart.html",
    controller: "CartController",
    controllerAs: "controller",
})
.controller('CartController', function($scope, CartFactory) {
    $scope.cart = CartFactory;
})
.factory('CartFactory', function(){
    var cart = {
      items: [],
      total: 0,
      add: function(product)
      {
        if(this.items.indexOf(product) < 0)
        {
          this.items.push(product);
        }
        product["count"]["cart"]++;
        this.total += product["price"];
      },
      remove: function(product)
      {
        //Update the total
        this.total -= product["price"] * product["count"]["cart"];

        //Move items from cart to inventory and set cart to 0
        product["count"]["inventory"] += product["count"]["cart"];
        product["count"]["cart"] = 0;

        //Remove from cart
        var index = this.items.indexOf(product);
        this.items.splice(index, 1);
      }
    };

    return cart;
})
