(function() {

	'use strict'
	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyListController',ToBuyListController)
	.controller('BoughtListController',BoughtListController)
	.service('ShoppingListService',ShoppingListService);


	ToBuyListController.$inject = ['ShoppingListService'];

	function ToBuyListController(ShoppingListService){

		var BuyItem = this;
		BuyItem.message = "Every Thing Is Bought!";
		BuyItem.ToBuyShoppingList = ShoppingListService.gitList();

		BuyItem.removeItem = function(itemIndex){
			ShoppingListService.removeItem(itemIndex);

		};

		BuyItem.addItem = function(){
			ShoppingListService.addItem();
		};


	}

	BoughtListController.$inject = ['ShoppingListService'];

	function BoughtListController(ShoppingListService){

		var BoughItem = this;
		BoughItem.showList = ShoppingListService.showList();
		BoughItem.message = "Nothing Bought Yet!";

	}

	function ShoppingListService(){

		var service = this;

		var ToBuy = [
			{
				name: "cookies",
				quantity: "100"
			},
			{
				name: "Milk",
				quantity: "10"
			},
			{
				name: "juice",
				quantity: "5"
			},
			{
				name: "apple",
				quantity: "2"
			},
			{
				name: "Banana",
				quantity: "3"
			}
		];
		var Bought = [];
		var item;

		service.gitList = function(){

			return ToBuy;
		};

		service.removeItem = function(itemIndex){

			item = ToBuy[itemIndex];
			//addItem(item);
			ToBuy.splice(itemIndex,1);
			console.log("Item Removed!, To Buy List Is :",ToBuy);

		};
		service.addItem = function(){

			Bought.push(item);
			console.log("Item Added!, Bought List Is :",Bought);
		};

		service.showList = function(){
			return Bought;
		};

	}

})();