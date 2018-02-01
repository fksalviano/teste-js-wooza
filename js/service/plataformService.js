app.factory('plataformService', function ($http) {
    plataformUrl = 'http://private-59658d-celulardireto2017.apiary-mock.com/';
    return {
        getPlataformsList: function () {
            var url = plataformUrl + "plataformas";
            return $http.get(url);
        },
        getPlataformPlains: function (plataforma) {
            var url = plataformUrl + "planos/" + plataforma.sku;
            return $http.get(url);
        }
    }
});