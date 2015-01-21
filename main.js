$(document).on('ready', function() {
	var letterCapitalize = function(str){
		return str.replace(/(?:^| )(\w)/g, function (match) {
			return match.toUpperCase();
		});
	};
	console.log(letterCapitalize('hi whats up'));
});
