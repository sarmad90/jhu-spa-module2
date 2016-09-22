(function(){
  var ShoppingListCheckOffApp = angular.module('ShoppingListCheckOff', []);
  ShoppingListCheckOffApp.controller('ToBuyShoppingController', ToBuyShoppingController);
  ShoppingListCheckOffApp.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController);
  ShoppingListCheckOffApp.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ["ShoppingListCheckOffService"];
  AlreadyBoughtShoppingController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyShoppingController(ShoppingListCheckOffService){
    this.toBuyList = ShoppingListCheckOffService.toBuyList;

    this.buy = function(index){
      ShoppingListCheckOffService.moveItem(index);
    };
  };

  function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
    this.alreadyBoughtList = ShoppingListCheckOffService.alreadyBoughtList;
  };

  function ShoppingListCheckOffService(){
    var service = this;
    service.toBuyList = [
      { quantity: "10", name: "Cookies"},
      { quantity: "12", name: "Eggs"},
      { quantity: "4lbs", name: "Boneless Chicken"},
      { quantity: "1", name: "Mustard Sauce"},
      { quantity: "10 bottles of", name: "Fizzy Drinks"}
    ];
    // service.toBuyList = ["10 Cookies", "12 Eggs", "iPhone 7", "Macbook Pro 13", "2 Litres Milk"];
    service.alreadyBoughtList = [];

    service.moveItem = function(index){
      var item = service.toBuyList[index];
      service.toBuyList.splice(index, 1);
      service.alreadyBoughtList.push(item);
    };
  };


})();
