angular.module("ecommerce")
    .controller("listarCategoriaController", function ($scope, categoryService) {
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

    });