angular.module("ecommerce")
    .controller("loginController", function ($scope,$location, loginService) {
        $scope.cadastrar = function (usuario) {
    loginService.signup(usuario)
        .then(function (response) {
            alert("usuario cadastrado");
        }).catch(function (response) {
        alert("Problema ao cadastrar");
    })
};

$scope.autenticar = function (usuario) {
    loginService.login(usuario)
        .then(function (response) {
            $scope.dataUser = response.data;
            localStorage.setItem("token", JSON.stringify($scope.dataUser.token));
            localStorage.setItem("user", JSON.stringify($scope.dataUser));
            $location.url("/carrinho");
        })
        .catch(function (response) {
            alert("falha ao logar")
        })
};
});