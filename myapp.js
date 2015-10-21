(function () {
	var app = angular.module('items', []);

	app.controller('ItemsController', function () {
		this.products = items;
	});

	var items = [
		{
			name: "Milk",
			image: ["milk.png"],
			usedup: true,
	},
		{
			name: "Chicken",
			image: ["chicken.png"],
			usedup: true,
		},
		{
			name: "Apples",
			image: ["apples.png"],
			usedup: true,
		},
		{
			name: "Orange Juice",
			image: ["orange_juice.png"],
			usedup: true,
		},
		{
			name: "Fish",
			image: ["fish.png"],
			usedup: false,
		},
				];
})();