var textSentence_1 = [

			"Hi, welcome to Tech Inc.  I’ve been waiting for \n" +
			"you for a long time! I don't like to talk too much.\n"+
			"Let’s go straight to the topic. You are responsible\n"+
			"for our data backup team and get at least $3000 at \n"+
			"the end of the year. I give you $1000 for the\n"+
			"beginning, don't make me disappoint. Otherwise,\n"+
			"you know what is going to happen to you. HAHAHA...";
		];

var index =0;

var speech;

class StoryScene extends Phaser.Scene
{

	constructor()
	{
		super("generalization");
	}

	preload()
	{

		this.load.image("background_2", "assets/images/game_Scene.jpg");

		this.load.image("boss", "assets/UI/Boss.png");

		this.load.image("text_box", "assets/UI/speech_bubble.png");

		this.load.image("bottom", "assets/images/bottom_Space.jpg");



	}

	create()
	{

		var backgroundImage = this.add.image(0,0,"background_2");
		backgroundImage.setOrigin(0,0);

		var bottom = this.add.image(0,500,"bottom");
		bottom.setOrigin(0,0);

		var character_Boss = this.add.image(550,250,"boss");
		character_Boss.setOrigin(0,0);
		character_Boss.setScale(0.4);

		var text_Field =  this.add.image(350,50,"text_box");
		text_Field.setOrigin(0,0);
		text_Field.setScale(0.6);


		var hint = this.add.text(370,220, "'Press SPACE to Continue' ", {
			font: "20px Arial",
			fill: "red"
		});
	
		speech = this.add.text(370,110, textSentence_1[index], {
			font: "23px Arial", 
			fill: "black"
		});


		this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		

		
	}

	update()
	{

		var currentBudget = 1000;

		if (Phaser.Input.Keyboard.JustDown(this.spaceBar))
		{
			index +=1;

			if(index > 4)
			{
				this.scene.start("scene_1", {
					money: currentBudget,
					hasInternalStorage: false,
					hasCloudStorage: false,
					hasUSBStorage: false,
					hasPrinterStorage: false
				});
			}

     		speech.setText(textSentence_1[index]);
    	}


	}
}