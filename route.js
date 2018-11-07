angular.module("ecommerce").config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/categoryProducts/:idCategoria", {
        templateUrl: "view/categoryProducts.html",
        controller: "productsController"
    })

    $routeProvider.when("/descricao/:idProduto", {
        templateUrl: "view/descricao.html",
        controller: "descricaoController"
    })

    $routeProvider.when("/carrinho", {
        templateUrl: "view/carrinho.html",
        controller: "carrinhoController"
    });

    $routeProvider.when("/login", {
        templateUrl: "view/login.html",
        controller: "loginController"
    });


}]);