//initiate the Phaser framework
//KidRat.game = new Phaser.Game(640, 360, Phaser.CANVAS, 'kidrat', {init: init, preload: preload, create: create, update: update, render: render });

/*
var cfg = {
    width: 640,
    height: 360,
    multiTexture: true,
    parent: 'game',
    enableDebug: false
};*/

//KidRat.game = new Phaser.Game(cfg);

//game = new Phaser.Game(640, 360, Phaser.AUTO);
KidRat.game = new Phaser.Game(640, 360, Phaser.CANVAS);

KidRat.game.state.add('GameState', KidRat.GameState);
KidRat.game.state.add('HomeState', KidRat.HomeState);
//aun noKidrat.game.state.add('BootState', Kidrat.BootState);
KidRat.game.state.add('Boot', KidRat.Boot);
KidRat.game.state.add('PreloadState', KidRat.PreloadState);
//Kidrat.game.state.start('BootState');
KidRat.game.state.start('Boot');
