var event6 = "Boss brings his kid to the company this month, \n" +
			 "while you are working, his kid brings a water bottle\n"+
			 "walk pass you and accidentally fall off beside your \n"+
			 "computer. The water spills out into the company's \n" +
			 "computer and then it shuts down afterward. You need \n" +
			 "to retrieve back the data!";
	

var bonus = 200;
var defaultIncome = 500;
var deduction = 100;

class Event_6 extends Phaser.Scene
{

	constructor()
	{
		super("scene_6");
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

    	this.load.spritesheet("waterInComputer", "assets/animation/drink_in_computer.png",
    	{
    		frameWidth: 300,
    		frameHeight: 300
    	});


	}

	create()
	{
		
		var backgroundImage = this.add.image(0,0,"background_2");
		backgroundImage.setOrigin(0,0);

		var borderImage = this.add.image(450,100,"textField");
		borderImage.setOrigin(0,0);
		borderImage.setScale(0.5);

		// create animation of current event's image
		var computerDamagedAnimation = this.add.sprite(200,250,"waterInComputer");
		
		this.anims.create({
			key: "waterInComputer_anim",
			frames: this.anims.generateFrameNumbers("waterInComputer"),
			
			frameRate: 20,
			repeat: -1
		})

		computerDamagedAnimation.play("waterInComputer_anim");


		this.value = this.add.text(50,20, "$" + this.money, {
			font: "bold 40px Arial", 
			fill: "white",

		});


		this.add.text(650,20, "Event", {
			font: "bold 40px Arial", 
			fill: "white",

		});

		this.add.text(900,20, "June", {
			font: "bold 30px Arial", 
			fill: "Red",

		});

		this.add.text(460,180, event6, {
			font: "bold 20px Arial", 
			fill: "white",

		});


		this.choice_1 = this.add.text(100, 450, 'You look at your plan', { 
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

				if(this.hasCloudStorage == true)
				{
					this.add.text(240,200, 'Yaaa! You find out your data can be retrieved because\n'+
										   'you used cloud technique to backup last time. The data\n'+
										   'is store in another place’s server; you can retrieve\n'+
										   'anytime virtually no matter how broken your device is\n'+
										   'while the internet is available.  ', {
						
						font: "bold 20px Arial", 
						fill: "black",

						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_7", {
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
					this.add.text(240,200, 'Uh-oh. You plan not going work this time, caused the\n'+
										   'device you store in before is either broken or\n'+
										   'corrupted because of water.', {

							font: "bold 20px Arial", 
							fill: "black", 
						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_7", {
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







		this.choice_2 = this.add.text(600, 450, 'Report to boss', { 
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

				// gives number 0 or 1 randomly
				var randomNum = Phaser.Math.Between(0, 1);

				if(randomNum == 0)
				{
					this.add.text(240,200, 'Boss forgives you and just tell you to do the thing\n'+
										   'again since the instruction is still there. However,\n'+
										   'time is wasted.', {
						
							font: "bold 20px Arial", 
							fill: "black",

						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_7", {
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
					this.add.text(240,200, 'Boss yells at you for the carelessness and deducts\n'+
										   'money from the current balance in your department. ', {

							font: "bold 20px Arial", 
							fill: "black", 
						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_7", {
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
