$(document).on('ready', function() {
	var letterCapitalize = function(str){
		return str.replace(/(?:^| )(\w)/g, function (match) {
			return match.toUpperCase();
		});
	};
	console.log(letterCapitalize('hi whats up?'));

	var wordCount = function(str){
		return str.match(/\w+/g).length;
	};

	console.log(wordCount('hi whats up?'));

	var primeTime = function(n){
		if (n<=2 || isNaN(n) || !isFinite || !(n % 1 == 0) || n % 2 == 0) return false;
		for (var i = 3; i < Math.sqrt(n); i+=2) {
			if (n % i == 0) return false;
		}
		return true;
	};
	console.log(primeTime(11));
});

