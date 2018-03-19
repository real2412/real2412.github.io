var KidRat = KidRat || {};

KidRat.WalkingEnemy = function(tipo, game, x, y, tilemap, x1, x2){
    
	if(tipo=='malo'){
		Phaser.Sprite.call(this, game, x, y, 'maloso');
		this.game = game;
		this.enableBody = true;	
		this.game.physics.arcade.enable(this);	
		this.body.setSize(32, 32, 0, 0);
		this.scale.setTo(1.2, 1);
		this.body.bounce.y = 0;
		this.body.gravity.y = 600;
		this.body.collideWorldBounds = true;
		this.animations.add('left', [2,3], 10, true);
		this.animations.add('right', [1,0], 10, true);
		
		this.body.velocity.x = 100;
	
	//xuno=x1;
	//xdos=x2;
	}else if (tipo=='bueno'){
		
		Phaser.Sprite.call(this, game, x, y, 'pacman');	
		this.game = game;
		this.game.physics.arcade.enable(this);
		this.body.setSize(32, 32, 0, 0);		
		this.body.bounce.y = 0;
		this.body.gravity.y = 600;
		this.body.collideWorldBounds = true;
		this.animations.add('habla', [2,3], 5, true);
	
	}else if(tipo=='malomalo'){
	
		Phaser.Sprite.call(this, game, x, y, 'malomalo');	
	
		this.enableBody = true;	
		this.game.physics.arcade.enable(this);	
		this.body.setSize(96, 35, 0, 27	);
		this.scale.setTo(0.5, 0.5);
		this.body.bounce.y = 0;
		this.body.gravity.y = 600;
		this.body.collideWorldBounds = true;
		this.animations.add('left', [3,2], 8, true);
		this.animations.add('right', [1,0], 8, true);
		
		//this.animations.play('right');
		//this.body.velocity.x = 150;
	
	}else if(tipo=='malofinal'){
		
		Phaser.Sprite.call(this, game, x, y, 'big');	
		
		this.enableBody = true;
		this.game.physics.arcade.enable(this);
		this.body.setSize(32, 32, 0, -3);
		this.scale.setTo(1.5, 1.5);
		this.body.bounce.y = 0;
		this.body.gravity.y = 600;
		this.body.collideWorldBounds = true;
		//malo33.animations.add('right', [2,1],6, true);
		//malo33.animations.add('left',  [3,4],6, true);
		this.animations.add('left',  [3,4],6, true);
		this.animations.add('right', [2,1],6, true);
		this.animations.add('habla', [0],6, true);
		
	}else if(tipo=='pua'){
		/*
		Phaser.Sprite.call(this, game, x, y, 'big');	
		
		this.enableBody = true;
		this.game.physics.arcade.enable(this);
		this.body.setSize(32, 32, 0, -3);
		this.scale.setTo(1.5, 1.5);
		this.body.bounce.y = 0;
		this.body.gravity.y = 600;
		this.body.collideWorldBounds = true;
		//malo33.animations.add('right', [2,1],6, true);
		//malo33.animations.add('left',  [3,4],6, true);
		this.animations.add('left',  [3,4],6, true);
		this.animations.add('right', [2,1],6, true);
		this.animations.add('habla', [0],6, true);
		*/
		Phaser.Sprite.call(this, game, x, y, 'platform');
		this.enableBody = true;
		this.game.physics.arcade.enable(this);
		//malo22.body.setSize(96, 35, 0, 15);
		//malo22.scale.setTo(0.5, 0.5);
		this.body.immovable = true;
		this.body.bounce.y = 0;
		this.body.gravity.y = 0;
		this.body.collideWorldBounds = true;
		
	}else if(tipo=='palancacentro'){
		
		Phaser.Sprite.call(this, game, x, y, 'palancacentro');
		this.enableBody = true;
		this.game.physics.arcade.enable(this);
		//malo22.body.setSize(96, 35, 0, 15);
		this.scale.setTo(0.5, 0.5);
		this.body.immovable = true;
		this.body.bounce.y = 0;
		this.body.gravity.y = 0;
		this.body.collideWorldBounds = true;
		
	}else if(tipo=='palancaderecha'){
		
		Phaser.Sprite.call(this, game, x, y, 'palancaderecha');
		this.enableBody = true;
		this.game.physics.arcade.enable(this);
		//malo22.body.setSize(96, 35, 0, 15);
		this.scale.setTo(0.5, 0.5);
		this.body.immovable = true;
		this.body.bounce.y = 0;
		this.body.gravity.y = 0;
		this.body.collideWorldBounds = true;
		this.kill();
		
	}else if(tipo=='palancaizquierda'){
		
		Phaser.Sprite.call(this, game, x, y, 'palancaizquierda');
		this.enableBody = true;
		this.game.physics.arcade.enable(this);
		//malo22.body.setSize(96, 35, 0, 15);
		this.scale.setTo(0.5, 0.5);
		this.body.immovable = true;
		this.body.bounce.y = 0;
		this.body.gravity.y = 0;
		this.body.collideWorldBounds = true;
		this.kill();
	}
	
}

KidRat.WalkingEnemy.prototype = Object.create(Phaser.Sprite.prototype);
KidRat.WalkingEnemy.prototype.constructor = KidRat.WalkingEnemy;

KidRat.WalkingEnemy.prototype.update = function(){			
			
		/*if(this.x>xuno){
			this.body.velocity.x = -100;		
			this.animations.play('left');	
			//pasa1=false;
		}else if(this.x<xdos){
			this.body.velocity.x = 100;
			this.animations.play('right');	
			//pas=false;
		}
		else{
			//pas=true;
		}*/
		
		//return pas;
	
    /*var direction;
    if(this.body.velocity.x > 0){
        //this.scale.setTo(1, 1);
        direction = 1;
    }
    else{
        //this.scale.setTo(-1, 1);
        direction = -1;
    }
		
    var nextX = this.x + direction * (Math.abs(this.width)/2 + 1);
    var nextY = this.bottom + 1;
    
    var nextTile = this.tilemap.getTileWorldXY(nextX, nextY, this.tilemap.tileWidth, this.tilemap.tileHeight, 'collisionLayer');
    
    if(!nextTile && this.body.blocked.down){
        this.body.velocity.x *= -1;
    }*/
}