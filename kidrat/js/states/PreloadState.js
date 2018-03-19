var KidRat = KidRat || {};

KidRat.PreloadState = {
  init: function(idioma){
	this.idioma=idioma;
  },
  
  preload: function() {
	  
	//botones
		
		//spritesheet for animations
	//    game.load.spritesheet('mario', 'assets/misc/mariospritesheet-small.png',50,50); // key, sourcefile, framesize x, framesize y
	
	/*game.load.spritesheet('button_saltar', 'assets/buttons/btn_saltar.png', 193, 71);
	game.load.spritesheet('button_derecha', 'assets/buttons/btn_derecha.png', 112, 95);
	game.load.spritesheet('button_izquierda', 'assets/buttons/btn_izquiera.png', 112, 95);*/
	this.load.spritesheet('botonderecha', 'assets/sprites/right.png',100,100);
	this.load.spritesheet('botonizquierda', 'assets/sprites/left.png',100,100);
	this.load.spritesheet('botonsalta', 'assets/sprites/salta.png',100,100);
	
    this.load.tilemap('map', 'assets/tilemaps/maps/features_test.json', null, Phaser.Tilemap.TILED_JSON);
	this.load.tilemap('map2', 'assets/tilemaps/maps/features_test2.json', null, Phaser.Tilemap.TILED_JSON);
	this.load.tilemap('map3', 'assets/tilemaps/maps/features_test3.json', null, Phaser.Tilemap.TILED_JSON);
	this.load.tilemap('map4', 'assets/tilemaps/maps/features_test4.json', null, Phaser.Tilemap.TILED_JSON);
	this.load.tilemap('map5', 'assets/tilemaps/maps/features_test5.json', null, Phaser.Tilemap.TILED_JSON);
	this.load.tilemap('map6', 'assets/tilemaps/maps/features_test6.json', null, Phaser.Tilemap.TILED_JSON);
	this.load.tilemap('map7', 'assets/tilemaps/maps/features_test7.json', null, Phaser.Tilemap.TILED_JSON);
	this.load.tilemap('map10', 'assets/tilemaps/maps/features_test10.json', null, Phaser.Tilemap.TILED_JSON);
	this.load.tilemap('map11', 'assets/tilemaps/maps/features_test11.json', null, Phaser.Tilemap.TILED_JSON);
	
    this.load.image('ground_1x1', 'assets/tilemaps/tiles/ground_1x1.png');
    this.load.image('walls_1x2', 'assets/tilemaps/tiles/walls_1x2.png');
    this.load.image('tiles2', 'assets/tilemaps/tiles/tiles2.png');
	this.load.image('gridtiles', 'assets/tilemaps/tiles/gridtiles.png');
	this.load.image('tile_nuevo', 'assets/tilemaps/tiles/tile_nuevo.png');

	this.load.spritesheet('pacman', 'assets/sprites/sprites.png', 32, 30);
	this.load.spritesheet('maloso', 'assets/sprites/malo.png', 32, 32);
	this.load.spritesheet('malomalo', 'assets/sprites/malomalo.png', 95, 63);
	this.load.spritesheet('malofinal', 'assets/games/invaders/invader32x32x4.png', 32, 32);	
	this.load.spritesheet('platform', 'assets/sprites/espina.png', 38, 32);
	//game.load.spritesheet('platform', 'assets/tilemaps/tiles/gridtiles.png',32,32);
	this.load.spritesheet('big', 'assets/sprites/big_masked.png', 32, 30);
	this.load.spritesheet('palancacentro', 'assets/sprites/palancacentro.png', 128, 128);
	this.load.spritesheet('palancaizquierda', 'assets/sprites/palancaizquierda.png', 128, 128);
	this.load.spritesheet('palancaderecha', 'assets/sprites/palancaderecha.png', 128, 128);
	
	this.load.bitmapFont('desyrel', 'assets/fonts/bitmapFonts/desyrel.png', 'assets/fonts/bitmapFonts/desyrel.xml');
	this.load.spritesheet('bullet', 'assets/sprites/rgblaser.png', 4, 4);
	
	},
    
	create: function() {
        KidRat.game.state.start('GameState',false,false,1,this.idioma); 	
	}
};