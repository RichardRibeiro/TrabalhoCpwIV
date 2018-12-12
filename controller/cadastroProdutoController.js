
angular.module("ecommerce")
    .controller("cadastroProdutoController", function ($scope, productService, categoryService) {

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

        $scope.cadastrarProduto = function (produto) {
            produto.img = produto.img.base64;
            productService.cadastrarProduto(produto)
                .then(function (response) {
                    alert("Produto cadastrado");
                }).catch(function (response) {
                alert("Produto não cadastrada");
            })
        };

    });