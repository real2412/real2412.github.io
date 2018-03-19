var KidRat = KidRat || {};

KidRat.GameState = {

	init: function(level,idioma){
		
		this.level = level;
		this.idioma=idioma;
		//init: function(){
		//this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		//this.game.scale.pageAlignHorizontally = true;
		//this.game.scale.pageAlignVertically = true;
		//this.game.scale.setScreenSize(true);
		//this.game.scale.refresh();
	},

	create: function() { 
	
		this.loadLevel();
		
	},

	update: function(){
	
		this.game.physics.arcade.collide(this.layer,this.player);
		this.game.physics.arcade.collide(this.layer,this.enemies);
		this.game.physics.arcade.collide(this.layer,this.aliados);
		this.game.physics.arcade.collide(this.layer,this.enemiesenemies);
		
		if(this.level!==6 && this.level!==11){
			//this.game.physics.arcade.collide(this.player,this.enemiesenemies);
			this.enemies.forEach(this.caminarPuntosX, this, true);
			
			this.game.physics.arcade.overlap(this.player, this.enemiesenemies, function(){
				this.pasa21=false;
				this.levelChange(0);
			}, null, this);
			this.game.physics.arcade.overlap(this.player, this.aliados, this.habla, null, this);
			this.game.physics.arcade.overlap(this.player, this.enemies, function(){
				this.levelChange(0);
			}, null, this);
		}
		
		if(this.player.body==null){
			this.game.physics.arcade.enable(this.player);
		}

		this.player.body.velocity.x = 0;
		
		//movimientos

		if (this.cursors.left.isDown)
		{
			this.player.body.velocity.x = -150;
			this.player.animations.play('left');		
			this.miraderecha=false;
		}
		else if (this.cursors.right.isDown)
		{
			this.player.animations.play('right');		
			this.player.body.velocity.x = 150;
			this.miraderecha=true;
			
		}

		if (this.cursors.up.isDown && (this.player.body.onFloor() || this.player.body.touching.down))
		{
			this.player.body.velocity.y = -350;
		}
		
		//Targets
		switch(this.level){
			case 1:
			if(this.player.x>=this.game.world.width-50){          
				this.levelChange(this.level);
			}
			;break;
			case 2:
			if(this.player.x>=684 && this.player.x<=780 && this.player.y>=610){          
				this.levelChange(this.level);
			}
			;break;
			case 3:
			if(this.player.x>=this.game.world.width-20){          
				this.pasa21=false;
				this.levelChange(this.level);
			}
			;break;
			case 4:
			if(this.player.y>=this.game.world.height-20){          
				this.levelChange(this.level);
			}
			;break;
			case 5:
			if(this.player.x>=this.game.world.width-20){          
				this.pasa21=false;
				this.levelChange(this.level);
			};break;
			case 6:;break;
			
		};
		
		//BOTONES
		if (this.left) {
			
			this.player.body.velocity.x = -150;
			this.player.animations.play('left');
			this.miraderecha=false;
			
		}
		else if (this.right) {
			
			this.player.animations.play('right');
			this.player.body.velocity.x = 150;
			this.miraderecha=true;
			
		}
		
		if (this.jump && (this.player.body.onFloor() || this.player.body.touching.down)){ 		
				this.player.body.velocity.y = -350;
		}  
		
		//if (this.game.input.totalActivePointers == 0 && !this.game.input.activePointer.isMouse){ 
		//		this.right=false; this.left=false; this.jump=false;
		//}
		if( this.player.body.velocity.x == 0 ){
			
			if(!this.miraderecha){
				this.player.animations.play('tranqui_izq');	
			}else{
				this.player.animations.play('tranqui_der');	
				
			}
		
		}
		
        //CASUISTICAS
		if(this.level==1 && this.player.y>=548){
			
			this.levelChange(0);
				
		}else if(this.level==2 && this.player.y>=548 && this.player.x>=830){
			
			this.levelChange(0);
			
		}else if(this.level==3){
			
			if(this.player.y>=1800 && this.pasa21){
				var arr=[[170, 2000],[410, 2064],[577, 2192], [308, 2192]];
				this.pasa1=this.caminarPorTodosLados(this.enemiesenemies.getChildAt(0), this.pasa1, arr);
			}
				
			
			if(this.player.x<=704 && this.player.x>=162 && this.player.y>=1282 && this.player.y<=1500 ){
				this.levelChange(0);
			}
			
		}else if(this.level==4){
			this.enemiesenemies.forEach(this.caminarPuntosXEnemy, this, true);
		}else if(this.level==5){
			
			if(this.player.y>=348 && this.pasa21){
				var arr=[];
				this.pasa1=this.caminarPorTodosLados(this.enemiesenemies.getChildAt(0), this.pasa1, arr);	
			}
			
			if(this.player.y>=464 && this.pasa21){
				var arr=[];
				this.pasa2=this.caminarPorTodosLados(this.enemiesenemies.getChildAt(1), this.pasa2, arr);	
			}
			
			if(this.player.y>=560 && this.pasa21){
				var arr=[];
				this.pasa3=this.caminarPorTodosLados(this.enemiesenemies.getChildAt(2), this.pasa3, arr);	
				
				this.pasa4=this.caminarPorTodosLados(this.enemiesenemies.getChildAt(3), this.pasa4, arr);	
				this.pasa5=this.caminarPorTodosLados(this.enemiesenemies.getChildAt(4), this.pasa5, arr);	
				this.pasa6=this.caminarPorTodosLados(this.enemiesenemies.getChildAt(5), this.pasa6, arr);	
				this.pasa7=this.caminarPorTodosLados(this.enemiesenemies.getChildAt(6), this.pasa7, arr);	
				this.pasa8=this.caminarPorTodosLados(this.enemiesenemies.getChildAt(7), this.pasa8, arr);	
				this.pasa9=this.caminarPorTodosLados(this.enemiesenemies.getChildAt(8), this.pasa9, arr);
				this.pasa10=this.caminarPorTodosLados(this.enemiesenemies.getChildAt(9), this.pasa10, arr);					
				
			}
			
			if(this.player.y>=1926 && this.pasa21){
				var arr=[[380,2064],[292,2000],[191,2192]];
				this.pasa11=this.caminarPorTodosLados(this.enemiesenemies.getChildAt(10), this.pasa11, arr);
			}
			
		}else if(this.level==6){
			
			this.game.physics.arcade.overlap(this.player, this.enemies, function(){
			
				this.pasa12=false;
				
			}, null, this);
			
			if(!this.pasa12){
				this.game.time.events.add(Phaser.Timer.SECOND * 11, function(){
					this.enemies.forEach(this.caminarPuntosX, this, true);
					this.game.physics.arcade.overlap(this.player, this.enemies, function(){
						this.levelChange(0);
					}, null, this);
				}, this);
				
				if(this.pasa13){
					this.habla(this.player,this.enemies.getChildAt(0));
				}else{
					if(this.enemies.getChildAt(0).x-this.player.x<=200 && this.enemies.getChildAt(0).x-this.player.x>=-200 && this.enemies.getChildAt(0).y-this.player.y>=50){
						this.enemies.getChildAt(0).body.velocity.y = -300;
					}
					
					//this.text.text=this.vidasMalo;
				}
				
			}
			
			this.game.physics.arcade.overlap(this.enemies.getChildAt(0), this.aliados.getChildAt(0), function(){
				//this.text.text=this.vidasMalo;
			
				
				if(this.pasa14){
					this.vidasMalo=this.vidasMalo-1;
					this.pasa14=false;
					this.game.time.events.add(Phaser.Timer.SECOND * 4, function(){
						this.pasa14=true;
					}, this);
				}
				
				if(this.vidasMalo<=0){
					this.enemies.getChildAt(0).kill();
					this.vidasMalo=3;
					this.levelChange(this.level);
				}
			}, null, this);
			
		}else if(this.level==7){
			
			if(this.pasa15){
				this.player.kill();
				this.aliados. getChildAt(0).kill()
				this.habla(this.player,this.enemies.getChildAt(0));
				this.pasa15=false;
				this.level=8;
			}
		}else if(this.level==8){
			
			if(this.pasa16){
				this.game.time.events.add(Phaser.Timer.SECOND * 10, function(){
					if(this.pasa16){
						this.habla(this.player,this.enemies.getChildAt(0));
						this.pasa16=false;
						this.level=9;
					}
				}, this);
			}
		}else if(this.level==9){
			
			if(this.pasa17){
				this.game.time.events.add(Phaser.Timer.SECOND * 10, function(){
					if(this.pasa17){
						this.habla(this.player,this.enemies.getChildAt(0));
						this.pasa17=false;
						this.level=10;
					}
				}, this);
			}
			
		}else if(this.level==10){
			if(this.pasa18){
				this.game.time.events.add(Phaser.Timer.SECOND * 10, function(){
					if(this.pasa18){
						this.levelChange(this.level);
						this.pasa18=false;
						
					}
				}, this);
			}
			
		}else if(this.level==11){
			
			if(this.pasa19){
				
				this.game.physics.arcade.overlap(this.player, this.enemiesenemies, function(){
					
					this.habla(this.player,this.enemiesenemies.getChildAt(0));
					this.game.time.events.add(Phaser.Timer.SECOND * 4, function(){
						this.pasa19=false;
					}, this);
				}, null, this);
	
			}else{
				
				if(this.player.x>=435 && this.pasa20){
					this.enemiesenemies.getChildAt(0).kill();
					this.enemiesenemies.getChildAt(1).reset(370, 96);
					this.pasa20=false;
				}else if(this.player.x<=375 && this.pasa20){
					this.enemiesenemies.getChildAt(0).kill();
					this.enemiesenemies.getChildAt(2).reset(370, 96);
					this.pasa20=false;
				}
				
				if(!this.pasa20){
					this.game.time.events.add(Phaser.Timer.SECOND * 1, function(){
						this.text.kill();
						this.levelChange(this.level);
						this.pasa20=true;
					}, this);
				}
			}
			
			if(this.player.y>=296){
				this.levelChange(0);
			}
			
			
		}else if(this.level==12){
			if(this.pasa20){
				
				this.pasa20.false;
				this.game.camera.follow(this.text);
				this.habla(this.player,this.enemies.getChildAt(0));
				
				this.game.time.events.add(Phaser.Timer.SECOND * 10, function(){
					this.level=1;
					this.pasa=false;
					//this.player.body = null;
					this.player.destroy();
					//this.layer.destroy();
					//KidRat.game = new Phaser.Game(640, 360, Phaser.AUTO);
					KidRat.game.state.start('Boot');
				}, this);
			}
		}
		
		
		

	},
	
	loadLevel: function(){
		
		this.game.stage.setBackgroundColor("000000");
		
		var strMap;
		//this.level=2;
		if(this.level==1){
			strMap = 'map';
		}
		else if(this.level==2){
			strMap = 'map2';
		}
		else if(this.level==3){
			strMap = 'map3'
		}
		else if(this.level==4){
			strMap = 'map4'
		}
		else if(this.level==5){
			strMap = 'map5'
		}
		else if(this.level==6){
			strMap = 'map6'
		}else if(this.level==7){
			strMap = 'map7'
		}else if(this.level==11){
			strMap = 'map10'
		}else if(this.level==12){
			strMap = 'map11'
		}

		this.map = this.game.add.tilemap(strMap);		
		//this.map = this.game.add.tilemap('map');		
		//this.map.addTilesetImage('ground_1x1');
		//this.map.addTilesetImage('walls_1x2');
		//this.map.addTilesetImage('tiles2');
		this.map.addTilesetImage('tile_nuevo');
		//this.map.addTilesetImage('tile_viejo');
		//if(menu==3){
		//	map.addTilesetImage('gridtiles');
		//}			
		this.layer = this.map.createLayer('Tile Layer 1');
		this.map.setCollisionBetween(2, 19, true, 'Tile Layer 1');	
		
		this.layer.resizeWorld();
		//this.game.world.setBounds(0, 0, 1200, 800);
		
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		
		var colorTexto="#FF8100";	
		
		this.crearEnemigos();
		
		var playerArr = this.findObjectsByType('player', this.map, 'objectLayer');
		if(typeof this.player == "undefined" || this.level==1){
	
			this.player = this.game.add.sprite(playerArr[0].x, playerArr[0].y, 'pacman');
			//this.player = this.game.add.sprite(100, 100, 'pacman');
			this.player.anchor.setTo(0.6, 0.6);
			this.game.physics.arcade.enable(this.player);        
			this.player.body.setSize(24, 24, 3, 7);
			this.player.body.bounce.y = 0;
			this.player.body.gravity.y = 600;
			this.player.body.collideWorldBounds = true;
			this.player.animations.add('right', [2, 3], 5, true);
			this.player.animations.add('left', [0, 1], 5, true);	
			this.player.animations.add('tranqui_izq', [0], 5, true);	
			this.player.animations.add('tranqui_der', [2], 5, true);	
		}else{
			
			if(!this.level==11){
				this.player.x=playerArr[0].x;
				this.player.y=playerArr[0].y;
			}else{
				this.player.reset(playerArr[0].x, playerArr[0].y);
			}
			
		}
		
		this.game.camera.follow(this.player);
		
		this.miraderecha=true;
		
		if(this.level!==2){
			this.text = this.game.add.text(this.arrPuntosXY[0].x, this.arrPuntosXY[0].y, '', { font: "16px Arial", fill: colorTexto ,stroke: "#765B5B",strokeThickness:3});
		}
		
		this.buttonright = this.game.add.button(160, 272, 'botonderecha', null, this, 0, 1, 0, 1);
		this.buttonright.scale.setTo(0.7, 0.7);
		this.buttonright.fixedToCamera = true;
		this.buttonright.onInputUp.add(function(){this.right=false	;}, this);
		this.buttonright.onInputDown.add(function(){this.right=true;}, this);
		
		
		this.buttonleft = this.game.add.button(0, 272, 'botonizquierda', null, this, 0, 1, 0, 1);
		this.buttonleft.scale.setTo(0.7, 0.7);
		this.buttonleft.fixedToCamera = true;
		this.buttonleft.onInputOver.add(function(){this.left=false;}, this);
		this.buttonleft.onInputOut.add(function(){this.left=false;}, this);
		this.buttonleft.onInputDown.add(function(){this.left=true;}, this);
		this.buttonleft.onInputUp.add(function(){this.left=false;}, this);
		
		this.buttonjump = this.game.add.button(500, 250, 'botonsalta', null, this, 0, 1, 0, 1);  //game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
		this.buttonjump.scale.setTo(1, 1);
		this.buttonjump.fixedToCamera = true;  //our buttons should stay on the same place  
		this.buttonjump.onInputOver.add(function(){this.jump=false;}, this);
		this.buttonjump.onInputOut.add(function(){this.jump=false;}, this);
		this.buttonjump.onInputDown.add(function(){this.jump=true;}, this);
		this.buttonjump.onInputUp.add(function(){this.jump=false;}, this);
		
		this.cursors = this.game.input.keyboard.createCursorKeys();
		//text2 = game.add.text(400, 250, '', { font: "16px Arial", fill: colorTexto ,stroke: "#765B5B",strokeThickness:3});
		
		

    },
	
  
	caminarPuntosX: function(malito){			
	
			var indice=this.enemies.getIndex(malito);
			
			var velocidad=100;
			if(this.level==6){
				var velocidad=200;
			}
			
			if(malito.x>this.arrPuntosX[indice].x2){
				malito.body.velocity.x = -velocidad;
				malito.animations.play('left');
				//pasa1=false;
			}else if(malito.x<=this.arrPuntosX[indice].x1){
				malito.body.velocity.x = velocidad;
				malito.animations.play('right');
				//this.arrPuntosX[indice].pasa=false;
			}else{
			//	malito.body.velocity.x = -100;
			//	malito.animations.play('left');
			
			}
			
			if(malito.body.velocity.x==0){
				malito.body.velocity.x = velocidad;
				malito.animations.play('right');
			}
        
    },
	
	caminarPuntosXEnemy: function(malito){			
	
			var indice=this.enemiesenemies.getIndex(malito);
			
			if(malito.x>this.arrPuntosXEnemy[indice].x2){
				malito.body.velocity.x = -150;
				malito.animations.play('left');
				//pasa1=false;
			}else if(malito.x<=this.arrPuntosXEnemy[indice].x1){
				malito.body.velocity.x = 150;
				malito.animations.play('right');
				//this.arrPuntosXEnemy[indice].pasa=false;
			}else{
				//malito.body.velocity.x = 150;
				//malito.animations.play('right');
			//	malito.body.velocity.x = -100;
			//	malito.animations.play('left');
			}
			
			if(malito.body.velocity.x==0){
				malito.body.velocity.x = 150;
				malito.animations.play('right');
			}
        
    },
	
	caminarPorTodosLados: function(mal, pas, arruga){
		
		if(mal.body.onWall()){
			if(pas){
				pas=false;
			}
			else{
				pas=true;
			}
		}
		
		/*else{
			if(mal.body.velocity.x>=0){
				mal.body.velocity.x = 150;
				mal.animations.play('left');
			}
			else{
				mal.body.velocity.x = -150;
				mal.animations.play('right');	
			}
		}*/
		
		for(var i=0; i<arruga.length; i++){
			if(mal.x>=arruga[i][0]-5 && mal.x<=arruga[i][0]+10 && mal.y>=arruga[i][1]-20 && mal.y<=arruga[i][1]+20){
				mal.body.velocity.y = -600;
				//break;
			}
		}
		
		if(!pas){
			mal.body.velocity.x = -150;			
			mal.animations.play('left');	
		}else{
			mal.body.velocity.x = 150;
			mal.animations.play('right');	
		}
		
		return pas;
		
	},
	
	habla: function(player, bueno) {
		
		if(bueno){
			bueno.animations.play('habla');				
		}
		
		//timer = game.time.create(true);
		
		//if(siHabla && bueno){
		//	siHabla=false;							
			this.nextLine();
			this.game.time.events.add(Phaser.Timer.SECOND * 10, function(){
				this.text.text="";
				this.line = [];
				this.wordIndex = 0;
				this.lineIndex = 0;
				this.wordDelay = 120;
				this.lineDelay = 1019;
				
				if(bueno && this.level<6){
					bueno.kill();
				}
				this.pasa13=false;
			//	siHabla=true;
			}, this);
			//timer.start();
		//}
		
	},
      
	nextLine: function () {

		if (this.lineIndex === 1)
		{
			//  We're finished		
			return;
			
		}

		//  Split the current line on spaces, so one word per array element
		this.line = this.content[this.level-1].split(' ');

		//  Reset the word index to zero (the first word in the line)
		this.wordIndex = 0;

		//  Call the 'nextWord' function once for each word in the line (line.length)
		//game.time.events.repeat(wordDelay, line.length, nextWord, this);
		this.game.time.events.repeat(this.wordDelay, this.line.length, this.nextWord, this);
		
		//  Advance to the next line
		this.lineIndex++;
		if (this.lineIndex !== this.content.length)
		{
			this.game.time.events.add(this.lineDelay, this.nextLine, this);
		}
	
	},

	nextWord: function() {

		// Add the next word onto the text string, followed by a space	
		this.text.text = this.text.text.concat(this.line[this.wordIndex] + " ");

		//  Advance the word index to the next word in the line
		this.wordIndex++;

		//  Last word?5
		if (this.wordIndex === this.line.length)
		{
			//  Add a carriage return
			this.text.text = this.text.text.concat("\n");		
			//  Get the next line after the lineDelay amount of ms has elapsed        
		}

	},
	
    playerLand: function(){		
		
        if(this.player.body.blocked.down){
            if(this.playerStatus != "isLanded" && this.playerStatus != "prepJump"){
                this.player.loadTexture(this.playerChar + 'Stand');
                this.playerStatus = "isLanded";
                this.player.body.velocity.x = 0;
                this.jumpBar.scale.setTo(0, 1);
            }
        }
        
    },
    
	findObjectsByType: function(targetType, tilemap, layer){
        var result = [];
        tilemap.objects[layer].forEach(function(element){
            if(element.properties.type == targetType){
                result.push(element);
            }
        }, this);
        return result;
    },    
	
    limpieza: function(){
        trump.kill();
		layer.destroy();
		text.text="";
		create();		
    },
	
	crearEnemigos: function(){
		
        this.enemies = this.add.group();
		this.aliados = this.add.group();
		this.enemiesenemies = this.add.group();
		
		this.arrPuntosX =[];
		this.arrPuntosXEnemy =[];//gato dragon				
		this.arrPuntosXY =[];//Aliado habla
        this.puntosX = new Object();
		this.puntosXEnemy = new Object();
		this.puntosXY = new Object();
		
		if(this.idioma=="ES"){
			this.content=[
			'  Ugh... Ugh... \n \
			Hey tu estas queriendo entrar al castillo gato? \n \
			Debes estar loco yo estoy escondido desde que  ugh... ugh... \n \
			Nos empezaron a cazar...Ugh.. Ugh...Suerte.',
			'',
			'  Heyy!... Que estas haciendo aca?\n \
			Yo te conozco, jugabas con mis hijos, tus padres estan mas abajo, \n \
			Con suerte pude huir del gato dragon que esta abajo \n \
			Si estas pensando bajar mas vale que seas rápido...',
			'  Pense que jamas veria otra rata negra\n \
			Viniste a salvarlos cierto? \n \
			Cuanto lo siento, este lugar esta infestado de gatos dragon \n \
			Sabias que los humanos tampoco la estan pasando bien?\n \
			Cada vez veo menos de ellos...',
			'  Oye Chico Rata estas seguro de querer seguir adelante? \n \
			Nosotros cometimos un error \n \
			Ya no los molestes... Ugh... ',
			'  Tu debes ser el ultimo que queda  \n \
			No te imaginas el daño que han echo aqui \n \
			Esto no será personal chico rata',
			'  IMBECIL!!!...SABES LO QUE ACABAS DE OCASIONAR??...\n \
			MILLONES DE HUMANOS ESTAN MURIENDO POR LA PESTE...\n \
			NOSOTROS LOS ESTAMOS AYUDANDO',
			'  ...YO MORIRE, pero esta peste seguira matando a los seres humanos...\n \
			...ahora, tu familia esta siguiendo el camino... EN UNAS HORAS!...\n \
			todo esto estará lleno de agua y lava...pero sabes...',
			'  ...te haz ganado mi respeto como rival, dejo la desicion en tus manos... \n \
			o la humanidad o tu familia....\n \
			Ugh...Ugh',
			'',
			'  Recuerda: A la izquierda esta la humanidad,\n \
			a la derecha tu familia',
			'  FIN',
			
			];
		}else{
			this.content=[
			'  Ugh... Ugh... \n \
			Hey you are wanting to enter the castle cat? \n \
			You must be crazy, I´ve been hiding since ugh ... ugh ... \n \
			They started hunting us ... Ugh .. Ugh ... Good luck.',
			'',
			'  Heyy!... What are you doing here?\n \
			I know you, you played with my children, your parents are below, \n \
			With luck I was able to escape from the dragon cat that is down \n \
			If you´re thinking about getting off, you better be quick...',
			'  I thought that I would never see another black rat\n \
			You came to save them, right? \n \
			I´m sorry, this place is infested with dragon cats \n \
			Did you know that humans are not having a good time either?\n \
			Every time I see less of them...',
			'  Hey Rat Boy are you sure you want to keep going? \n \
			We made a mistake \n \
			Do not bother them anymore ... Ugh ... ',
			'  You must be the last one left  \n \
			You can not imagine the damage they have done here \n \
			This will not be personal rat kid',
			'  FOOL !!! ... DO YOU KNOW WHAT YOU JUST CAUSED??...\n \
			MILLIONS OF HUMANS ARE DYING FOR THE BLACK DEATH...\n \
			WE ARE HELPING YOU.',
			'  ...I WILL DIE, but this plague will continue to kill human beings ...\n \
			...now, your family is following the path ... IN A FEW HOURS! ..\n \
			all this will be full of water and lava ... but you know ...',
			'  ...You have earned my respect as a rival, I leave the decision in your hands ... \n \
			or humanity or your family ....\n \
			Ugh...Ugh',
			'',
			'  Remember: humanity is on the left,\n \
			to the right your family',
			'  END',
			
			];
		}
		

		this.line = [];
		this.wordIndex = 0;
		this.lineIndex = 0;
		this.wordDelay = 120;
		this.lineDelay = 1019;
		this.siHabla=true;
		
		this.pasa1=true;
		this.pasa2=true;
		this.pasa3=true;
		this.pasa4=true;
		this.pasa5=true;
		this.pasa6=true;
		this.pasa7=true;
		this.pasa8=true;
		this.pasa9=true;
		this.pasa10=true;
		this.pasa11=true;
		this.pasa12=true;
		this.pasa13=true;
		this.pasa14=true;
		this.pasa15=true;
		this.pasa16=true;
		this.pasa17=true;
		this.pasa18=true;
		this.pasa19=true;
		this.pasa20=true;
		this.pasa21=true;
		
		this.vidasMalo=3;
		
		this.left=false;
		this.right=false;
		this.jump=false;

		var enemy;
		var aliado;
		var enemyenemy;
        
        var walkEnemyArr = this.findObjectsByType('walkingEnemy', this.map, 'objectLayer');
		var walkAliadoArr = this.findObjectsByType('walkingAliado', this.map, 'objectLayer');
		var walkEnemyEnemyArr = this.findObjectsByType('walkingEnemyEnemy', this.map, 'objectLayer');
		var walkEnemyFinalArr = this.findObjectsByType('walkingEnemyFinal', this.map, 'objectLayer');
		var walkPuaArr = this.findObjectsByType('walkingPua', this.map, 'objectLayer');
		var walkPalancaArr = this.findObjectsByType('walkingPalanca', this.map, 'objectLayer');
		
        walkEnemyArr.forEach(function(element, index){
            enemy = new KidRat.WalkingEnemy('malo', this.game, element.x, element.y, this.map);
			
            this.game.add.existing(enemy);
            this.enemies.add(enemy);
			
			this.puntosX = new Object();
			this.puntosX.x1=element.properties.x1;
			this.puntosX.x2=element.properties.x2;	
			this.arrPuntosX.push(this.puntosX);
			
        }, this);
		
		walkAliadoArr.forEach(function(element, index){
            aliado = new KidRat.WalkingEnemy('bueno', this.game, element.x, element.y, this.map);			
            this.game.add.existing(aliado);
            this.aliados.add(aliado);			
			
			this.puntosXY = new Object();
			this.puntosXY.x=element.properties.x1;
			this.puntosXY.y=element.properties.x2;
			this.arrPuntosXY.push(this.puntosXY);
			//this.content.push(element.properties.palabra);
        }, this);
		
		walkEnemyEnemyArr.forEach(function(element, index){
			
            enemyenemy = new KidRat.WalkingEnemy('malomalo', this.game, element.x, element.y, this.map);
            this.game.add.existing(enemyenemy);
            this.enemiesenemies.add(enemyenemy);
			//this.content.push(element.properties.palabra);
			
			this.puntosXEnemy = new Object();
			this.puntosXEnemy.x1=element.properties.x1;
			this.puntosXEnemy.x2=element.properties.x2;
			this.arrPuntosXEnemy.push(this.puntosXEnemy);
			
        }, this);
		
		walkEnemyFinalArr.forEach(function(element, index){
			
            enemy = new KidRat.WalkingEnemy('malofinal', this.game, element.x, element.y, this.map);
            this.game.add.existing(enemy);
            this.enemies.add(enemy);
			//this.content.push(element.properties.palabra);
			
			this.puntosX = new Object();
			this.puntosX.x1=element.properties.x1;
			this.puntosX.x2=element.properties.x2;
			this.arrPuntosX.push(this.puntosX);
			
        }, this);
		
		walkPuaArr.forEach(function(element, index){
			
            aliado = new KidRat.WalkingEnemy('pua', this.game, element.x, element.y, this.map);
            this.game.add.existing(aliado);
            this.aliados.add(aliado);
			
			this.puntosXY = new Object();
			this.puntosXY.x=element.properties.x1;
			this.puntosXY.y=element.properties.x2;
			this.arrPuntosXY.push(this.puntosXY);
			
        }, this);
		
		walkPalancaArr.forEach(function(element, index){
			
            enemy = new KidRat.WalkingEnemy('palancacentro', this.game, element.x, element.y, this.map);
			
            this.game.add.existing(enemy);
            this.enemiesenemies.add(enemy);
			
			enemy = new KidRat.WalkingEnemy('palancaderecha', this.game, element.x, element.y, this.map);
			
            this.game.add.existing(enemy);
            this.enemiesenemies.add(enemy);
			
			enemy = new KidRat.WalkingEnemy('palancaizquierda', this.game, element.x, element.y, this.map);
			
            this.game.add.existing(enemy);
            this.enemiesenemies.add(enemy);
			
			this.puntosXY = new Object();
			this.puntosXY.x=element.properties.x1;
			this.puntosXY.y=element.properties.x2;
			this.arrPuntosXY.splice();
			this.arrPuntosXY.unshift(this.puntosXY);
			
        }, this);
		
		
		
    } ,
	
	render: function() {
		//this.game.debug.body(this.player);
		//this.game.debug.body(this.enemiesenemies);
		//this.game.debug.bodyInfo(this.player, 32, 32);
	},
	
	levelChange: function(level){
		this.layer.destroy();
		this.player.kill();
		this.enemies.removeAll();
		this.text.kill();
		this.aliados.removeAll();
		this.enemiesenemies.removeAll();
		
        KidRat.game.state.start('GameState', false, false, level+1,this.idioma);
    }
	
  
};