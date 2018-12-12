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
     $routeProvider.when("/listarProduto", {
        templateUrl: "view/listarProduto.html",
        controller: "listarProdutoController"
    });

    $routeProvider.when("/listarCategoria", {
        templateUrl: "view/listarCategoria.html",
        controller: "listarCategoriaController"
    });
    $routeProvider.when("/cadastroCategoria", {
        templateUrl: "view/cadastroCategoria.html",
        controller: "cadastrarCategoriaController"
    });
    $routeProvider.when("/cadastroProduto", {
        templateUrl: "view/cadastroProduto.html",
        controller: "cadastroProdutoController"
    });

    $routeProvider.when("/finalizarCompra", {
        templateUrl: "view/finalizarCompra.html",
        controller: "carrinhoController"
    });

    $routeProvider.when("/minhasCompras", {
        templateUrl: "view/minhasCompras.html",
        controller: "minhasComprasController"
    });





}]);