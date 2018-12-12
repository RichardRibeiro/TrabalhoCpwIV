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
                "Authorization": "Basic " +  btoa(usuario.email + ":" + usuario.password)
            }
        };
        return $http(req);
    };

    var _logado = function () {
        if ((!!localStorage.getItem("token")) &&((!!localStorage.getItem("user"))) == true) {
                var obj = localStorage.getItem("user");
                var cargo = JSON.parse(obj);
                return cargo.personRole;


        }else {
            return false;
        }
    };

    var _logout = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };


    return {
        signup: _signup,
        login: _login,
        logado: _logado,
        logout: _logout,
    }
});