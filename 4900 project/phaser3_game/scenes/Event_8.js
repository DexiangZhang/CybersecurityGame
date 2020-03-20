var event8 = "There is a new worker hired by the company and\n"+
			 "become the second worker in your department.\n"+
			 "However, one day he left for no reason,\n"+
			 "and you find out your data got destroyed.\n"+
			 "Boss finds out he is an enemy’s spy now and\n"+
			 "gets angry. Boss asks you is there any way\n"+
			 "to retrieve back data otherwise, the company\n"+
			 "would be in a potential risk in the future.";
			
	

var bonus = 200;
var defaultIncome = 500;
var deduction = 100;

class Event_8 extends Phaser.Scene
{

	constructor()
	{
		super("scene_8");
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

    	this.load.image("spy", "assets/images/steal_and_destroy_info.jpg");

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
		var spyImage = this.add.image(230,250,"spy");
		spyImage.setScale(0.4);


		this.value = this.add.text(50,20, "$" + this.money, {
			font: "bold 40px Arial", 
			fill: "white",

		});


		this.add.text(650,20, "Event", {
			font: "bold 40px Arial", 
			fill: "white",

		});

		this.add.text(900,20, "Auguest", {
			font: "bold 30px Arial", 
			fill: "Red",

		});

		this.add.text(460,130, event8, {
			font: "bold 20px Arial", 
			fill: "white",

		});

		this.click = this.sound.add("clickButton");

		this.correct = this.sound.add("correct_sound");

		this.wrong = this.sound.add("wrong_sound");


		this.choice_1 = this.add.text(100, 450, 'You can do that ', { 
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

				if(this.hasCloudStorage == true)
				{
					this.correct.play();

					this.add.text(240,200, 'Lucky you, you bought the cloud plan before. You can\n'+
										   'get your old data back because you just need the\n'+
										   'internet to redownload your previous backup plan. The\n'+
										   'data is store in the “cloud” or fully online, physical\n'+
										   'damage to your computer won’t affect your data. You\n'+
										   'can retrieve it in any device at any time. ', {
						
						font: "bold 20px Arial", 
						fill: "black",

						});

					let nextImage = this.add.image(230,120,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_9", {
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

					this.add.text(240,200, 'Mhmmm, are you sure you can backup data again?\n'+
										   'Don’t you see all the devices are damaged? If\n'+
										   'you didn’t back up data online or in someplace\n'+
										   'else,  you have no way to get data back again.', {

							font: "bold 20px Arial", 
							fill: "black", 
						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_9", {
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







		this.choice_2 = this.add.text(600, 450, 'You make an apology', { 
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

					this.add.text(240,200, 'You find out the spy with evidence that shows he is\n'+
										   'the enemy’s company worker. Your company and that\n'+
										   'company go to court for this case. Court decides they\n'+
										   'are guilty and you discover they backup your company’s\n'+
										   'data personally. ', {
						
							font: "bold 20px Arial", 
							fill: "black",

						});

					let nextImage = this.add.image(250,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_9", {
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
					
					this.add.text(240,200, 'Your company is in the depression for backup data\n'+
										   'loss for one month. some money that is lost in this\n'+
										   'time is deducted from your department’s budget', {

							font: "bold 20px Arial", 
							fill: "black", 
						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_9", {
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
