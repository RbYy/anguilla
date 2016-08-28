var app = angular.module("app", []);

app.controller('kontrola', ['$scope', function($scope){

}])

app.factory('servisPobarvaj', function(){
    ser = function(scope, element, attr){
        scope.$watch('besedilo',function(){
            scope.parsano = scope.besedilo.split(" ")
        })
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
        replace: true,
        scope: {
            barva: '@',
            besedilo: '@'
        },
        link: servisPobarvaj // namesto, da bi definiral anonimno funkcijo,
							// sem registriral service in ga injektiral v direktivo
    }
}])
