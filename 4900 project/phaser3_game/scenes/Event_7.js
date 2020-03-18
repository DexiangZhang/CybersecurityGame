var event7 = "This month, there is a huge meeting for each boss\n"+
			 "who opened a business in this city. Your boss wants\n"+
			 "to bring his data such as image, audio, and important\n"+
			 "document with him this time. He says it is not large \n"+
			 "data overall but he needs to show in another person’s\n"+
			 "computer.";
	

var bonus = 200;
var defaultIncome = 500;
var deduction = 100;

class Event_7 extends Phaser.Scene
{

	constructor()
	{
		super("scene_7");
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

    	this.load.image("thinking", "assets/images/thinking_about.jpg");


	}

	create()
	{
		
		var backgroundImage = this.add.image(0,0,"background_2");
		backgroundImage.setOrigin(0,0);

		var borderImage = this.add.image(450,100,"textField");
		borderImage.setOrigin(0,0);
		borderImage.setScale(0.5);

		// create animation of current event's image
		var thinkingImage = this.add.image(230,250,"thinking");
		thinkingImage.setScale(0.2);


		this.value = this.add.text(50,20, "$" + this.money, {
			font: "bold 40px Arial", 
			fill: "white",

		});


		this.add.text(650,20, "Event", {
			font: "bold 40px Arial", 
			fill: "white",

		});

		this.add.text(900,20, "July", {
			font: "bold 30px Arial", 
			fill: "Red",

		});

		this.add.text(460,180, event7, {
			font: "bold 20px Arial", 
			fill: "white",

		});


		this.choice_1 = this.add.text(100, 450, 'I got you ', { 
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

				if(this.hasUSBStorage == true)
				{
					this.add.text(240,200, 'Nice! Boss very happy about that. The USB storage\n'+
										   'is the most convenient portal device for transferring\n'+
										   'the small data and the smallest device to bring out\n'+
										   'when people go outside since it doesn’t occupy huge\n'+
										   'physical space for that. ', {
						
						font: "bold 20px Arial", 
						fill: "black",

						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_8", {
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
					this.add.text(240,200, 'Oh-no… It is not very convenient for the boss to\n'+
										   'use your plan in this situation. I mean this is not\n'+
										   'a very big file why you bother to tell your boss to\n'+ 
										   'use such a method, there may be a better way right.', {

							font: "bold 20px Arial", 
							fill: "black", 
						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_8", {
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







		this.choice_2 = this.add.text(600, 450, 'No such option ', { 
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
					this.add.text(240,200, 'You’re lucky, boss forgives you this time because\n'+
										   'other companies allow online transfer data to their\n'+
										   'computer for this time.', {
						
							font: "bold 20px Arial", 
							fill: "black",

						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_8", {
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
					this.add.text(240,200, 'Boss’s meeting gets deny because of your unsuccessful\n'+
										   'play. He cannot go to a meeting without the information\n'+
										   'shared to other company', {

							font: "bold 20px Arial", 
							fill: "black", 
						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_8", {
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
