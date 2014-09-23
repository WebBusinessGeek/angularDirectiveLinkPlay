var app = angular.module('app', []);


app.controller('someController',function($scope){
	
	
	$scope.stuff = 'Stuff';


});

app.directive('scopeUse', function(){
	return{
		restrict: 'E',
		template: '<p>The $scope.stuff was manipulated to {{stuff}} using scope in the link function',
		link: function(scope){
		scope.stuff = 'MoreStuff';
		}
	}
	
	
})

app.directive('elementUse',function(){
	return{
		restrict: 'E',
		template: '<p>To see link function\'s element argument use, click on any word in this sentence.</p>',
		link: function(scope, element){
			element.bind('click',function(){
				element.text('You clicked me!');
			})
		}

	}
})

app.directive('attrsUse', function(){
	return {
		restrict: 'E',
		template: '<button class="btn btn-primary">Click me to see what you typed.</button>',
		link: function(scope, element, attrs){
			element.bind('click', function(){
				alert(attrs.attribute);
			})
		}
	}

	
})