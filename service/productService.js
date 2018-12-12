angular.module("ecommerce").factory("productService", function ($http) {
    var url = "http://ecommerce-cpw.herokuapp.com/rest";


    var _buscarProdutosPorIdCategoria = function (idCategoria, pagina) {
       return $http.get(url+"/product/list/"+idCategoria+"/"+pagina);
    };
    var _listarProduto = function () {
        return $http.get(url + "/product/list");
    };
    var _visualizarProdutoPorId = function (idProduto) {
        return $http.get(url+"/product/" + idProduto);
    }

    var _cadastrarProduto= function (produto) {
        var token = localStorage.getItem("token");
        var req = {
            method: "POST",
            url: url + "/product",
            headers: {
                "Authorization": "Bearer " +  JSON.parse(token),
                "Content-Type": "application/json"
            }
            ,data: produto
        };
        return $http(req);
    };


    return{
        buscarProdutosPorIdCategoria : _buscarProdutosPorIdCategoria,
        listarProduto : _listarProduto,
        visualizarProdutoPorId : _visualizarProdutoPorId,
        cadastrarProduto : _cadastrarProduto
    }



});