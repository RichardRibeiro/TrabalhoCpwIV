angular.module("ecommerce")
    .controller("minhasComprasController", function ($scope, carrinhoService) {
        var visualizarProdutosCarrinho = function () {
            $scope.produtos = carrinhoService.listarProdutos()
            var total = 0;
            $scope.produtos.forEach(function (produto) {
                total = total + (produto.price * produto.qtde)
            })
            $scope.total = total;
        }

        $scope.removerCarrinho = function (id) {
            $scope.produtos = carrinhoService.removerProduto(id)
            visualizarProdutosCarrinho();
        }
        visualizarProdutosCarrinho();
    });