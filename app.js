//angularjs source file
var app = angular.module('app', []);
app.controller('mycontroller', function($http) {
    
	var vm = this;
	
	vm.submit = function( ){
		var params = {
    method: 'flickr.photos.search',
    api_key: '932e0cc959dd923ba91dafb4a7a720ef',
    tags: vm.searchtext,
    format: 'json',
    nojsoncallback: 1
	};
	
	vm.searchtext = "";
	vm.searching=true;
			$http.get("https://api.flickr.com/services/rest" ,{params: params})
		.then(function(res){
			vm.data = res.data.photos.photo;
		})
		.catch(function(e){
			throw e;
		})
		.finally(function () {
			vm.searching=false;
		})
	}
});