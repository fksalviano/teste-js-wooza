app.controller('plataformController', function PostController($scope, plataformService) {
    $scope.plataformas = [];

    $scope.plataforma = null;
    $scope.plano = null;

    //get selected Plataform with Plains by lazy load
    $scope.get = function () {
        $scope.plataforma = this.plataforma;
        if (!$scope.plataforma.planos) {
            plataformService.getPlataformPlains($scope.plataforma).success(function (data) {
                $scope.plataforma.planos = data.planos;
            }).error(function (data) {
                $scope.error = "Erro ao carregar planos da plataforma! " + data.ExceptionMessage;
            });
        };
        $('#viewModal').modal('show');
    };

    //get selected Plain
    $scope.getPlain = function () {
        $scope.plano = this.plano;
        $('#addModel').modal('show');
        $('#viewModal').modal('hide');
    };

    //get all Plataforms
    $scope.getAll = function () {
        plataformService.getPlataformsList().success(function (data) {
            $scope.plataformas = data.plataformas;
        }).error(function (data) {
            $scope.error = "Erro ao carregar plataformas! " + data.ExceptionMessage;
        });
    };

    // add Plain/Plataform
    $scope.add = function () {

        $scope.plataforma.planos = null; //clear all plains to log only selected
        console.log('INFORMAÇÕES:')
        //log the client informations and selected plain
        console.log('Dados = ' + JSON.stringify($scope.cliente));
        console.log('Plataforma Selecionada = ' + JSON.stringify($scope.plataforma));
        console.log('Plano Selecionado = ' + JSON.stringify($scope.plano));

        //reset form
        $scope.cliente = null;
        $('#addModel').modal('hide');

    };

    //Model popup events
    $scope.showadd = function () {
        $scope.user = null;
        $scope.editMode = false;
        $('#addModel').modal('show');
    };

    $scope.cancel = function () {
        $scope.user = null;
        $('#addModel').modal('hide');
    }

    // initialize Plataforms list
    $scope.getAll();
});