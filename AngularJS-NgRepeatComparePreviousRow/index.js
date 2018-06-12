var app = angular.module('groupbymultipleelementsfunctionality', []);
app.controller('GroupByMultipleElementsController', function ($scope, $window) {
    $scope.ItemDetails = [
        {
            ItemId: 1,
            CategoryCode: "TX001",
            ItemCategory: "Computer",
            ItemCode: "KB384",
            ItemName: "KeyBoard",
            ItemOldPrice: "600",
            ItemNewPrice: "500"
        },
    {
        ItemId: 2,
        CategoryCode: "TX001",
        ItemCategory: "Computer",
        ItemCode: "MU932",
        ItemName: "Mouse",
        ItemOldPrice: "500",
        ItemNewPrice: "400"
    },
    {
        ItemId: 3,
        CategoryCode: "TX001",
        ItemCategory: "Computer",
        ItemCode: "PD843",
        ItemName: "Pendrive",
        ItemOldPrice: "600",
        ItemNewPrice: "400"
    },
    {
        ItemId: 4,
        CategoryCode: "TX001",
        ItemCategory: "Computer",
        ItemCode: "DV0495",
        ItemName: "DVD Drive",
        ItemOldPrice: "2000",
        ItemNewPrice: "1500"
    },
       {
           ItemId: 5,
           CategoryCode: "TX002",
           ItemCategory: "Electricity",
           ItemCode: "KB384",
           ItemName: "KeyBoard",
           ItemOldPrice: "500",
           ItemNewPrice: "300"
       },
    {
        ItemId: 6,
        CategoryCode: "TX002",
        ItemCategory: "Electricity",
        ItemCode: "MU932",
        ItemName: "Mouse",
        ItemOldPrice: "400",
        ItemNewPrice: "300"
    },
    {
        ItemId: 7,
        CategoryCode: "TX002",
        ItemCategory: "Electricity",
        ItemCode: "PD843",
        ItemName: "Pendrive",
        ItemOldPrice: "800",
        ItemNewPrice: "700"
    },
    {
        ItemId: 8,
        CategoryCode: "TX002",
        ItemCategory: "Electricity",
        ItemCode: "DV0495",
        ItemName: "DVD Drive",
        ItemOldPrice: "1000",
        ItemNewPrice: "800"
    }
    ]; //To Declare List
      
});