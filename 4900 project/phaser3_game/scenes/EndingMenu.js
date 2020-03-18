var textSentence = [

			"Thank you for your hard\n working this year",
			"Let's how you doing this \n year. Don't be nervous. \n Take it easy ",

		];

var index =0;

var speech;

class EndingMenu extends Phaser.Scene
{

	constructor()
	{
		super("ending");
	}

	init(data)
	{
		this.money = data.money;
		this.hasInternalStorage = data.hasInternalStorage;
		this.hasCloudStorage = data.hasCloudStorage;
		this.hasUSBStorage = data.hasUSBStorage;
		this.hasPrinterStorage = data.hasPrinterStorage;
	}

	preload()
	{

		this.load.image("background_2", "assets/images/game_Scene.jpg");

		this.load.image("boss", "assets/UI/Boss.png");

		this.load.image("text_box", "assets/UI/speech_bubble.png");

		this.load.image("bottom", "assets/images/bottom_Space.jpg");

		this.load.image("eventBox", "assets/UI/event_result.png");

		this.load.image("Restart", "assets/UI/Restart.png");

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
	
		speech = this.add.text(370,110, textSentence[index], {
			font: "23px Arial", 
			fill: "black"
		});


		this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		

		
	}

	update()
	{

		

		if (Phaser.Input.Keyboard.JustDown(this.spaceBar))
		{
			index +=1;

			if(index >= 2)
			{
				if(this.money >= 3000)
				{
					this.box = this.add.image(512,300,"eventBox");
					this.box.setScale(0.6);

					this.add.text(330,200, 'Your Balance: ' + this.money  + '\n\n' 
											+ 'Goal Balance: $3000' + '\n\n' + 'OMG! You are fired!',	
						{
						
						font: "bold 35px Arial", 
						fill: "black",

						});

					let replayImage = this.add.image(650,300,"Restart").setOrigin(0,0);
					replayImage.setInteractive();
					replayImage.setScale(0.3);
					replayImage.on("pointerdown", () =>
					{
						this.scene.start("introGame");

					}, this);



				}
				else
				{
					this.box = this.add.image(512,300,"eventBox");
					this.box.setScale(0.6);

					this.add.text(330,200, 'Your Balance: ' + this.money  + '\n\n' 
											+ 'Goal Balance: $3000' + '\n\n' + 'OMG! You are fired!',	
						{
						
						font: "bold 35px Arial", 
						fill: "black",

						});


					let replayImage = this.add.image(650,300,"Restart").setOrigin(0,0);
					replayImage.setInteractive();
					replayImage.setScale(0.3);
					replayImage.on("pointerdown", () =>
					{
						this.scene.start("introGame");

					}, this);
				}
			}

     		speech.setText(textSentence[index]);
    	}


	}
}