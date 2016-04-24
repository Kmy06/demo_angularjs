var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
	$scope.chiffre_temp = " ";
	$scope.chiffre1 = "";
	$scope.chiffre2 = "";
	$scope.operation ="";

	$scope.zero = function(){$scope.chiffre_temp = $scope.chiffre_temp + '0';}
	$scope.un = function(){$scope.chiffre_temp = $scope.chiffre_temp + '1';}
	$scope.deux = function(){$scope.chiffre_temp = $scope.chiffre_temp + '2';}
	$scope.trois = function(){$scope.chiffre_temp = $scope.chiffre_temp + '3';}
	$scope.quatre = function(){$scope.chiffre_temp = $scope.chiffre_temp + '4';}
	$scope.cinq = function(){$scope.chiffre_temp = $scope.chiffre_temp + '5';}
	$scope.six = function(){$scope.chiffre_temp = $scope.chiffre_temp + '6';}
	$scope.sept = function(){$scope.chiffre_temp = $scope.chiffre_temp + '7';}
	$scope.huit = function(){$scope.chiffre_temp = $scope.chiffre_temp + '8';}
	$scope.neuf = function(){$scope.chiffre_temp = $scope.chiffre_temp + '9';}

	
	$scope.addition = function(){$scope.operation = "+";$scope.chiffre1 = $scope.chiffre_temp;$scope.chiffre_temp = "";}
	$scope.soustraction = function(){$scope.operation = "-";$scope.chiffre1 = $scope.chiffre_temp;$scope.chiffre_temp = "";}
	$scope.multiplication = function(){$scope.operation = "*";$scope.chiffre1 = $scope.chiffre_temp;$scope.chiffre_temp = "";}
	$scope.division = function(){$scope.operation = "/";$scope.chiffre1 = $scope.chiffre_temp;$scope.chiffre_temp = "";}
	$scope.effacer = function(){$scope.chiffre_temp = "";}
	$scope.effacer_tout = function(){$scope.chiffre_temp = "";$scope.chiffre1 = "";$scope.operation = "";}
	$scope.retour = function(){$scope.chiffre_temp = $scope.chiffre_temp.substring(0,$scope.chiffre_temp.length-1);}
	$scope.virgule = function(){$scope.chiffre_temp = $scope.chiffre_temp + ".";}
	$scope.moins = function(){
		if (parseFloat($scope.chiffre_temp) > 0 ) {
			$scope.chiffre_temp = "-" + $scope.chiffre_temp;
		}
		else if (parseFloat($scope.chiffre_temp) < 0 ){
			$scope.chiffre_temp = $scope.chiffre_temp.substring(1);
		}
	}

	$scope.egale = function(){
		$scope.chiffre2 = $scope.chiffre_temp;
		if ($scope.operation == "+") {$scope.chiffre_temp = parseFloat($scope.chiffre1) + parseFloat($scope.chiffre2);}
		if ($scope.operation == "-") {$scope.chiffre_temp = parseFloat($scope.chiffre1) - parseFloat($scope.chiffre2);}
		if ($scope.operation == "*") {$scope.chiffre_temp = parseFloat($scope.chiffre1) * parseFloat($scope.chiffre2);}
		if ($scope.operation == "/") {$scope.chiffre_temp = parseFloat($scope.chiffre1) / parseFloat($scope.chiffre2);}
		$scope.chiffre1 = "";$scope.operation = "";

	}
});