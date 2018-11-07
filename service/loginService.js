angular.module("ecommerce").factory("loginService", function ($http) {
    url = "https://ecommerce-cpw.herokuapp.com/rest";

    var _signup = function (usuario) {
        return $http.post(url + "/user/signup", usuario);
    };

    var _login = function (usuario) {

        var req = {
            method: "GET",
            url: url + "/user/login",
            headers: {
                "Authorization": "Basic " +  btoa(usuario.email + ":" + usuario.senha)
            }
        };
        return $http(req);
    };


    return {
        signup: _signup,
        login: _login
    }
});