var event1 = "Since it is a new company, there is only yourself \n in this department. " +
			"Before starting, please choose \n one of the following to backup compnay data." +
			" \nYour decision might impact the rest of the month, \n so please choose wisely";


class Event_1 extends Phaser.Scene
{



	constructor()
	{
		super("scene_1");
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
			
		this.load.image("background_3", "assets/images/backupChoice_Scene.jpg");

		this.load.image("textField", "assets/images/wallpaperflare.com_wallpaper.jpg");

		this.load.image("cloud_storage", "assets/images/cloud_storage.png");
		this.load.image("internal_storage", "assets/images/internal_storage.png");
		this.load.image("printer_storage", "assets/images/printer_storage.png");
		this.load.image("USB_storage", "assets/images/USB_storage.png");

    	this.load.spritesheet("backup_pic", "assets/animation/backup.png",
    	{
    		frameWidth: 300,
    		frameHeight: 148
    	});


	}

	create()
	{
		
		var backgroundImage = this.add.image(0,0,"background_3");
		backgroundImage.setOrigin(0,0);

		var borderImage = this.add.image(450,100,"textField");
		borderImage.setOrigin(0,0);
		borderImage.setScale(0.5);

		// create animation of current event's image
		var backupAnimation = this.add.sprite(200,250,"backup_pic");
		
		this.anims.create({
			key: "backup_anim",
			frames: this.anims.generateFrameNumbers("backup_pic"),
			
			frameRate: 3,
			repeat: -1
		})

		backupAnimation.play("backup_anim");


		this.value = this.add.text(50,20, "$" + this.money, {
			font: "bold 40px Arial", 
			fill: "white",

		});


		this.add.text(650,20, "Event", {
			font: "bold 40px Arial", 
			fill: "white",

		});

		this.add.text(900,20, "January", {
			font: "bold 30px Arial", 
			fill: "Red",

		});

		this.add.text(460,180, event1, {
			font: "bold 20px Arial", 
			fill: "white",

		});



		this.cloud = this.add.image(100,450,"cloud_storage").setOrigin(0,0);
		this.cloud.setScale(0.2);

		this.cloud.setInteractive();
		this.cloud.on("pointerover", () =>
			{
				this.value.setText("$" + this.money + " - $250 ");
				

			}, this);

		this.cloud.on("pointerout", () =>
			{
				this.value.setText("$" + this.money);
				

			}, this);

		this.cloud.on("pointerdown", () =>
			{
				this.scene.start("scene_2", {
					money: this.money - 250,
					hasInternalStorage: false,
					hasCloudStorage: true,
					hasUSBStorage: false,
					hasPrinterStorage: false
				});

			}, this);



		this.internal = this.add.image(350,450,"internal_storage").setOrigin(0,0);
		this.internal.setScale(0.2);

		this.internal.setInteractive();
		this.internal.on("pointerover", () =>
			{
				
				this.value.setText("$" + this.money + " - $200 ");
				

			}, this);

		this.internal.on("pointerout", () =>
			{
				this.value.setText("$" + this.money);
				

			}, this);

		this.internal.on("pointerdown", () =>
			{
				this.scene.start("scene_2", {
					money: this.money - 200,
					hasInternalStorage: true,
					hasCloudStorage: false,
					hasUSBStorage: false,
					hasPrinterStorage: false
				});

			}, this);

		this.printer = this.add.image(600,450,"printer_storage").setOrigin(0,0);
		this.printer.setScale(0.2);

		this.printer.setInteractive();
		this.printer.on("pointerover", () =>
			{
				this.value.setText("$" + this.money + " - $150 ");
				

			}, this);

		this.printer.on("pointerout", () =>
			{
				this.value.setText("$" + this.money);
				

			}, this);

		this.printer.on("pointerdown", () =>
			{
				this.scene.start("scene_2", {
					money: this.money - 150,
					hasInternalStorage: false,
					hasCloudStorage: false,
					hasUSBStorage: false,
					hasPrinterStorage: true
				});

			}, this);

		this.USB = this.add.image(850,450,"USB_storage").setOrigin(0,0);
		this.USB.setScale(0.2);

		this.USB.setInteractive();
		this.USB.on("pointerover", () =>
			{
				this.value.setText("$" + this.money + " - $100 ");
				

			}, this);

		this.USB.on("pointerout", () =>
			{
				this.value.setText("$" + this.money);
				

			}, this);

		this.USB.on("pointerdown", () =>
			{
				this.scene.start("scene_2", {
					money: this.money - 100,
					hasInternalStorage: false,
					hasCloudStorage: false,
					hasUSBStorage: true,
					hasPrinterStorage: false
				});

			}, this);
		
	}


	update()
	{
		
	}
}