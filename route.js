angular.module("ecommerce").config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/categoryProducts/:idCategoria", {
        templateUrl: "view/categoryProducts.html",
        controller: "productsController"
    })
}]);