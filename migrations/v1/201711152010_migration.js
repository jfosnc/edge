exports.migrate = function(input) {
	input.properties['.properties.bootstrap_version'].value = "4.17.09";
	return input;
};