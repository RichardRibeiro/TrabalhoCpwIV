angular.module("ecommerce")
    .controller("descricaoController", function ($scope, productService,categoryService, carrinhoService, $routeParams) {

        var carregarProdutos = function () {
            var id = $routeParams.idProduto;
            productService.buscarProdutosPorIdCategoria(id,1)
                .then(function (response) {
                    $scope.produtos = response.data;
                })
                .catch(function (response) {
                    alert(response.data)
                })
        }


        var visualizarProdutoPorId = function(){
            var id = $routeParams.idProduto;
            productService.visualizarProdutoPorId(id)
                .then(function (response) {
                    $scope.produto = response.data;
                    $scope.categoria = response.data.category;
                })
                .catch(function (response) {
                    alert(response.data)
                })
        }

        $scope.colocarNoCarrinho = function (Produto, qtde)
        {
            carrinhoService.addProduto(Produto, qtde);
        }
        ;

        visualizarProdutoPorId();
       // carregarProdutos();


    })