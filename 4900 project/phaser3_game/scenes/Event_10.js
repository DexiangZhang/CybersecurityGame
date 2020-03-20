var event10 = "One day, You get an email from your service\n"+
			  "providers of backup data about the recent \n"+
			  "news that dropbox, one drive, and google\n"+
			  "drive get hacked by some unknown users.They\n"+
			  "recover immediately, everyone data is recovered.\n"+
			  "However, your boss is concern it will happen again\n"+
			  "because It is huge files. Boss wonders if you can do\n"+
			  "backup again but this time he wants to keep them\n"+
			  "in the company for a long period. ";
	

var bonus = 200;
var defaultIncome = 500;
var deduction = 100;

class Event_10 extends Phaser.Scene
{

	constructor()
	{
		super("scene_10");
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

		this.load.image("textField", "assets/images/wallpaperflare.com_wallpaper.jpg");

		this.load.image("eventBox", "assets/UI/event_result.png");
		this.load.image("next", "assets/UI/continue.png");

    	this.load.spritesheet("hack_server", "assets/animation/security_breach.png",
    	{
    		frameWidth: 300,
    		frameHeight: 150
    	});

    	this.load.audio('clickButton', 'assets/music/click.mp3');

    	this.load.audio('correct_sound', 'assets/music/correct.mp3');

    	this.load.audio('wrong_sound', 'assets/music/wrong.mp3');


	}

	create()
	{
		
		var backgroundImage = this.add.image(0,0,"background_2");
		backgroundImage.setOrigin(0,0);

		var borderImage = this.add.image(450,100,"textField");
		borderImage.setOrigin(0,0);
		borderImage.setScale(0.5);

		// create animation of current event's image
		var serverHackedAnimation = this.add.sprite(200,250,"hack_server");
		
		this.anims.create({
			key: "hack_server_anim",
			frames: this.anims.generateFrameNumbers("hack_server"),
			
			frameRate: 5,
			repeat: -1
		})

		serverHackedAnimation.play("hack_server_anim");


		this.value = this.add.text(50,20, "$" + this.money, {
			font: "bold 40px Arial", 
			fill: "white",

		});


		this.add.text(650,20, "Event", {
			font: "bold 40px Arial", 
			fill: "white",

		});

		this.add.text(900,20, "October", {
			font: "bold 30px Arial", 
			fill: "Red",

		});

		this.add.text(460,150, event10, {
			font: "bold 20px Arial", 
			fill: "white",

		});

		this.click = this.sound.add("clickButton");

		this.correct = this.sound.add("correct_sound");

		this.wrong = this.sound.add("wrong_sound");



		this.choice_1 = this.add.text(100, 450, 'show your idea to boss ', { 
			font: "bold 30px Arial", 
			fill: "white" 
		});

    	this.choice_1.setStroke("#239DDA", 50);
   	    this.choice_1.setShadow(2, 2, "#333333", 2, true, true);
		

		this.choice_1.setInteractive();
		this.choice_1.on("pointerdown", () =>
			{
				//this.cameras.main.setBackgroundColor('#000000');
				this.box = this.add.image(512,300,"eventBox");
				this.box.setScale(0.6);

				this.click.play();

				if(this.hasInternalStorage == true)
				{
					this.correct.play();

					this.add.text(240,200, 'Good job! Boss likes your plan. Internal/external\n'+
										   'device is the one he looking for. It has a very \n'+
										   'good price that can store a huge file for a very\n'+
										   'long period. Boss can backup multiple time in case\n'+
										   'one get damaged.', {
						
						font: "bold 20px Arial", 
						fill: "black",

						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_11", {
							money: this.money + defaultIncome + bonus,
							hasInternalStorage: this.hasInternalStorage,
							hasCloudStorage: this.hasCloudStorage,
							hasUSBStorage: this.hasUSBStorage,
							hasPrinterStorage: this.hasPrinterStorage
						});

					}, this);

				}
				else 
				{
					this.wrong.play();

					this.add.text(240,200, 'No! You’re wrong. This is not what he looking for.\n'+
					 					   'There must have a better one than the one you owned.\n'+
					 					   'It is either a large space or not last very long but\n'+
					 					   'not both', {

							font: "bold 20px Arial", 
							fill: "black", 
						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_11", {
							money: this.money - deduction,
							hasInternalStorage: this.hasInternalStorage,
							hasCloudStorage: this.hasCloudStorage,
							hasUSBStorage: this.hasUSBStorage,
							hasPrinterStorage: this.hasPrinterStorage
						});

					}, this);

				}

				// so the choice only can be interact only once 
				this.choice_1.removeInteractive();
				this.choice_2.removeInteractive();

			}, this);







		this.choice_2 = this.add.text(550, 450, 'pay more money for security', { 
			font: "bold 30px Arial", 
			fill: "white" 
		});

		this.choice_2.setStroke("#EEA71A", 50);
   	    this.choice_2.setShadow(2, 2, "#333333", 2, true, true);
		

		this.choice_2.setInteractive();
		this.choice_2.on("pointerdown", () =>
			{
					//this.cameras.main.setBackgroundColor('#000000');
				this.box = this.add.image(512,300,"eventBox");
				this.box.setScale(0.6);

				this.click.play();

				// gives number 0 or 1 randomly
				var randomNum = Phaser.Math.Between(0, 1);

				if(randomNum == 0)
				{

					this.correct.play();

					this.add.text(240,200, 'Nice! Although it is not boss want from you, you\n'+
					 						'successfully convince your boss to pay more money\n'+
					 						'from the budget to a better security system. Your\n'+
					 						'boss feels safer about his company’s information ', {
						
							font: "bold 20px Arial", 
							fill: "black",

						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_11", {
							money: this.money + defaultIncome,
							hasInternalStorage: this.hasInternalStorage,
							hasCloudStorage: this.hasCloudStorage,
							hasUSBStorage: this.hasUSBStorage,
							hasPrinterStorage: this.hasPrinterStorage
						});

					}, this);

				}
				else 
				{
					this.wrong.play();
					
					this.add.text(240,200, 'OMG! You pay more money for data security but the\n'+
					 						'service provider still gets hacked and this time\n'+
					 						'part of your data is not recoverable.', {

							font: "bold 20px Arial", 
							fill: "black", 
						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_11", {
							money: this.money - deduction,
							hasInternalStorage: this.hasInternalStorage,
							hasCloudStorage: this.hasCloudStorage,
							hasUSBStorage: this.hasUSBStorage,
							hasPrinterStorage: this.hasPrinterStorage
						});

					}, this);

				}

				// so the choice only can be interact only once 
				this.choice_1.removeInteractive();
				this.choice_2.removeInteractive();

			}, this);
	

	}

	update()
	{
		
	}
}

