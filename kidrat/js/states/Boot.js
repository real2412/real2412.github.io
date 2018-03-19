var KidRat = KidRat || {};

KidRat.Boot = {	
	preload: function(){
		  this.load.spritesheet('start', 'assets/sprites/start.png',406,160);
	},
  	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		//this.scale.setScreenSize();
		KidRat.game.state.start("HomeState");
	}
}