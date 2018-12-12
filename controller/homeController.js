angular.module("ecommerce").controller("homeController", function ($scope, categoryService, loginService) {

    var carregarCategorias = function(){
        categoryService.listarTodasAsCategorias()
            .then(function (response) {

                $scope.categorias = response.data;
            })
            .catch(function (response) {
                console.log(response)
            })
    };
    $scope.buscar = function(categoriaId){
        categoryService.buscaCategoriaPorID(categoriaId)
            .then(function (response) {
                $scope.categoria = response.data;
            })
            .catch(function (response) {
                alert(response.data);
            })
    };
    carregarCategorias();


    var funcao = function () {
        if (loginService.logado() == "ADMINISTRATOR") {
            $scope.acesso = true;
            $scope.logout = true;
            $scope.logiin = false;
        }else{
            $scope.logiin = true;
            $scope.acesso = false;
            $scope.logout = false;
        }

    };
    funcao();

    $scope.logoout = function () {
        loginService.logout();
        location.reload(menubar);
        $location.url("/home")
    };
});