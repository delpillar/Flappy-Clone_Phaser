var FlappyBird = {};

FlappyBird.Boot = function(game) {};

FlappyBird.Boot.prototype = {

	preload: function() {

	},
	
	create: function() {
		this.state.start('Preloader');
	}
}