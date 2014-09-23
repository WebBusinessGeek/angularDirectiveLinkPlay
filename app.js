var app = angular.module('app', []);


app.controller('dogController',function($scope){
	
	$scope.dogs = [
		{breed:'pitbull', name:'rocky'},
		{breed:'golden retriever', name: 'chance'},
		{breed:'bulldog', name: 'Professor G'}
	]

	$scope.owners = [
		{name:'Kevin', age:'26'},
		{name:'Carl', age:'34'},
		{name:'Mitchell', age:'22'}
	]


});


app.directive('dogDirective',function(){
	return function(scope, element, attrs){
		element.bind('mouseenter',function(){
			alert('I am in you');
		})
	}
})