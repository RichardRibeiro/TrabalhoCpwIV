angular.module("ecommerce")
    .controller("cadastrarCategoriaController", function ($scope, categoryService) {

        $scope.cadastrarCategorias = function (categoria) {
            categoryService.cadastrarCategoria(categoria)
                .then(function (response) {
                    alert("Categoria cadastrado");
                }).catch(function (response) {
                alert("Categoria não cadastrada");
            })
        };


    });