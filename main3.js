var app = angular.module("app", []);

app.controller('kontrola', ['$scope', function($scope){
    $scope.start = function(){
        $scope.besede = $scope.besedilo.split(" ")
    }
}])

app.factory('servisPobarvaj', function(){
    ser = function(scope, element, attr){
        scope.barva = "black"
        scope.pobarvaj = function(stBesede){ //zaporedna stevilka besede
            scope.stBesede =stBesede
            scope.nova=attr.barva
        }
    }
    return ser
})

app.directive('besede',['servisPobarvaj', function(servisPobarvaj){
    return{
        restrict: "E",
        templateUrl: 'templ2.html',
        replace:true,
        link: servisPobarvaj // namesto, da bi definiral anonimno funkcijo,
							// sem registriral service in ga injektiral v direktivo
    }
}])
