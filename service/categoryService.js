angular.module("ecommerce").factory("categoryService",function ($http) {
    var url = "http://ecommerce-cpw.herokuapp.com/rest";

    var _listarTodasAsCategorias = function(){
        return $http.get(url+"/category/list")
    }
    var _buscaCategoriaPorID = function (idCategoria) {
        return $http.get(url+"/category/"+idCategoria);
    }

    var _cadastrarCategoria= function (categoria) {
            token = localStorage.getItem("token");
        var req = {
            method: "POST",
            url: url + "/category",
            headers: {
                "Authorization": "Bearer " + JSON.parse(token),
                "Content-Type": "application/json"
            }
            , data: categoria
        };
        return $http(req);
    };




    return {
        listarTodasAsCategorias : _listarTodasAsCategorias,
        buscaCategoriaPorID : _buscaCategoriaPorID,
        cadastrarCategoria: _cadastrarCategoria

    }
});