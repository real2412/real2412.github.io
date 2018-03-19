var KidRat = KidRat || {};

KidRat.HomeState = {
    
    create: function() {
        
        var style = {font: '35px Arial', fill: '#fff'};
		var style2 = {font: '26px Arial', fill: '#000'};
        this.game.add.text(250, 100, 'KID RAT', style);
        
		this.game.stage.setBackgroundColor(0x2d2d2d);
	
        /*this.malePlayer = this.add.button(20, 200, 'playerMaleStand');
        this.malePlayer.scale.setTo(1);*/
        this.botonInicio = this.add.button(240, 160, 'start');
		this.botonInicio.scale.setTo(0.4, 0.4);
		
		this.botonInicio_en = this.add.button(240, 260, 'start');
		this.botonInicio_en.scale.setTo(0.4, 0.4);
		
		this.game.add.text(240+30, 170, 'Empezar', style2);
		
		this.game.add.text(240+50, 270, 'Start', style2);
		
		/*this.femalePlayer.onInputOver.add(function(){
			console.log('button over');
		}, this);
		this.femalePlayer.onInputOut.add(function(){
			console.log('button over');
		}, this);*/
		
        /*this.malePlayer.events.onInputDown.add(function(){
            KidRat.game.state.start('GameState', true, false, 'playerMale', 'level1');
        });*/
        this.botonInicio.events.onInputDown.add(function(){
			
			KidRat.game.state.start("PreloadState",true,false,"ES");
            //KidRat.game.state.start('GameState', true, false, 'playerFemale', 'level1');
        });
		
		this.botonInicio_en.events.onInputDown.add(function(){
			
			KidRat.game.state.start("PreloadState",true,false,"EN");
            //KidRat.game.state.start('GameState', true, false, 'playerFemale', 'level1');
        });
        
    }
};