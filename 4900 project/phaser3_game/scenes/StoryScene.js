var textSentence_1 = [

		"Hi, welcome to Tech Inc. \nYou are responsible for \n" +
		"our data backup team. \nEvery month, you will \n  ",
		"face a situation that \nwill demand your attention.\n" +
		"Please choose your course \nof action wisely to solve \n ",
		"the problem. If you are \nsuccessful, you will be \n " +
		"paid but if you are not, \nyou might lose money. If \n ",
		"you are good at your job, \nyou can earn at least\n " +
		"$3,000 by the end of the \n year! I am giving you  \n ",
		"$1,000 in start-up funds \nto buy a data backup plan."
		
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