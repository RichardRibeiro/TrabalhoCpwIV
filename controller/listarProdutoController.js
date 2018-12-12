angular.module("ecommerce")
    .controller("listarProdutoController", function ($scope, categoryService, productService) {

        var carregarCategorias = function () {
            categoryService.listarTodasAsCategorias()
                .then(function (response) {
                    $scope.Cat = response.data;
                })
                .catch(function (response) {
                    alert("ERROR 404")
                });
        };

        carregarCategorias();
        $scope.carregarProdutos = function (id) {
            // var id = $routeParams.idCategoria;
            productService.buscarProdutosPorIdCategoria(id, 1)
                .then(function (response) {

                    $scope.produtos = response.data;
                })
                .catch(function (response) {
                    alert(response.data)
                })
        }
    });