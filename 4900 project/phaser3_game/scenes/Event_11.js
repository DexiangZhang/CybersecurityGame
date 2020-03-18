var event11 = "While you are working on your department, you get\n"+
			  "a call from the boss saying that there is some\n"+
			  "secure information in his computer, he wants you\n"+
			  "to bring the data to his location as fast as\n"+
			  "possible. He doesn’t want anyone in his company\n"+
			  "to know and order you to bring out without catch\n"+
			  "any attention. He only trusts you now.";
	

var bonus = 200;
var defaultIncome = 500;
var deduction = 100;

class Event_11 extends Phaser.Scene
{

	constructor()
	{
		super("scene_11");
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

    	this.load.spritesheet("boss_hide", "assets/animation/hiding.png",
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
		var bossHidingAnimation = this.add.sprite(200,250,"boss_hide");
		
		this.anims.create({
			key: "boss_hide_anim",
			frames: this.anims.generateFrameNumbers("boss_hide"),
			
			frameRate: 15,
			repeat: -1
		})

		bossHidingAnimation.play("boss_hide_anim");


		this.value = this.add.text(50,20, "$" + this.money, {
			font: "bold 40px Arial", 
			fill: "white",

		});


		this.add.text(650,20, "Event", {
			font: "bold 40px Arial", 
			fill: "white",

		});

		this.add.text(850,20, "November", {
			font: "bold 30px Arial", 
			fill: "Red",

		});

		this.add.text(460,150, event11, {
			font: "bold 20px Arial", 
			fill: "white",

		});


		this.choice_1 = this.add.text(100, 450, 'Let’s do it  ', { 
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
					this.add.text(240,200, 'Well done! USB is the only option in this case.\n'+
											'It doesn’t occupy much physical space and backup\n'+
											'speed is good when you only store few data, you \n'+
											'can easily bring it out to other places epically\n'+
											'when you need to use it in other portal devices\n'+
											'such as a computer. It is universal accept by \n'+
											'people in such a case. ', {
						
						font: "bold 20px Arial", 
						fill: "black",

						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_12", {
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
					this.add.text(240,200, 'Sorry! The current plan you have right now is not\n'+
					 						'working very well in this case. You should think\n'+
					 						'about something small and easy to carry on. Since\n'+
					 						'the boss doesn’t want anyone to know ', {

							font: "bold 20px Arial", 
							fill: "black", 
						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_12", {
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







		this.choice_2 = this.add.text(550, 450, 'It is not possible to bring out', { 
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
					this.add.text(240,200, 'Boss feels a little disappointing to you but he \n'+
											'understands it might be difficult for a new worker.\n'+
											'He sends you a picture of what he looking for and \n'+
											'tells you to use this item to transfer data to him. ', {
						
							font: "bold 20px Arial", 
							fill: "black",

						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_12", {
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
					this.add.text(240,200, 'Boss is upset about your response and comes to the\n'+
					 						'company to pick up data by himself. He thinks you\n'+
					 						'are not doing a good job and deducted some money\n'+
					 						'from your department.', {

							font: "bold 20px Arial", 
							fill: "black", 
						});

					let nextImage = this.add.image(230,100,"next").setOrigin(0,0);
					nextImage.setInteractive();
					nextImage.on("pointerdown", () =>
					{
						this.scene.start("scene_12", {
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