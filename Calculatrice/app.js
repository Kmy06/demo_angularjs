var app = angular.module('myApp', []);
app.controller('ButtonCtrl', function(){
	this.chiffre_temp = " ";
	this.chiffre1 = "";
	this.chiffre2 = "";
	this.operation ="";

	this.zero = function(){this.chiffre_temp = this.chiffre_temp + '0';}
	this.un = function(){this.chiffre_temp = this.chiffre_temp + '1';}
	this.deux = function(){this.chiffre_temp = this.chiffre_temp + '2';}
	this.trois = function(){this.chiffre_temp = this.chiffre_temp + '3';}
	this.quatre = function(){this.chiffre_temp = this.chiffre_temp + '4';}
	this.cinq = function(){this.chiffre_temp = this.chiffre_temp + '5';}
	this.six = function(){this.chiffre_temp = this.chiffre_temp + '6';}
	this.sept = function(){this.chiffre_temp = this.chiffre_temp + '7';}
	this.huit = function(){this.chiffre_temp = this.chiffre_temp + '8';}
	this.neuf = function(){this.chiffre_temp = this.chiffre_temp + '9';}

	
	this.addition = function(){this.operation = "+";this.chiffre1 = this.chiffre_temp;this.chiffre_temp = "";}
	this.soustraction = function(){this.operation = "-";this.chiffre1 = this.chiffre_temp;this.chiffre_temp = "";}
	this.multiplication = function(){this.operation = "*";this.chiffre1 = this.chiffre_temp;this.chiffre_temp = "";}
	this.division = function(){this.operation = "/";this.chiffre1 = this.chiffre_temp;this.chiffre_temp = "";}
	this.effacer = function(){this.chiffre_temp = "";}
	this.effacer_tout = function(){this.chiffre_temp = "";this.chiffre1 = "";this.operation = "";}
	this.retour = function(){this.chiffre_temp = this.chiffre_temp.substring(0,this.chiffre_temp.length-1);}
	this.virgule = function(){this.chiffre_temp = this.chiffre_temp + ".";}
	this.moins = function(){
		if (parseFloat(this.chiffre_temp) > 0 ) {
			this.chiffre_temp = "-" + this.chiffre_temp;
		}
		else if (parseFloat(this.chiffre_temp) < 0 ){
			this.chiffre_temp = this.chiffre_temp.substring(1);
		}
	}

	this.egale = function(){
		this.chiffre2 = this.chiffre_temp;
		if (this.operation == "+") {this.chiffre_temp = parseFloat(this.chiffre1) + parseFloat(this.chiffre2);}
		if (this.operation == "-") {this.chiffre_temp = parseFloat(this.chiffre1) - parseFloat(this.chiffre2);}
		if (this.operation == "*") {this.chiffre_temp = parseFloat(this.chiffre1) * parseFloat(this.chiffre2);}
		if (this.operation == "/") {this.chiffre_temp = parseFloat(this.chiffre1) / parseFloat(this.chiffre2);}
		this.chiffre1 = "";this.operation = "";

	}
});