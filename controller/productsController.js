angular.module("ecommerce")
    .controller("productsController", function ($scope, $location, productService, categoryService,carrinhoService, $routeParams) {

        var carregarProdutos = function () {
            var id = $routeParams.idCategoria;
            productService.buscarProdutosPorIdCategoria(id, 1)
                .then(function (response) {

                    $scope.produtos = response.data;
                })
                .catch(function (response) {
                    alert(response.data)
                })
        }
        var carregarCategoria = function () {
            var id = $routeParams.idCategoria;
            categoryService.buscaCategoriaPorID((id))
                .then(function (response) {
                    $scope.categoria = response.data;
                })
                .catch(function (response) {
                    alert(response.data)
                })
        }
        $scope.visualizarProduto = function (idProduto) {
            $location.url("/descricao/" + idProduto)
        }

        $scope.colocarNoCarrinho = function (Produto)
        {
            carrinhoService.addProduto(Produto, 1);
        }


        carregarProdutos();
        carregarCategoria();


    });