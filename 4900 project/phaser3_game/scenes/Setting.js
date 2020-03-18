class Setting extends Phaser.Scene
{
	constructor()
	{
		super("setting");
	}

	create()
	{
		//this.add.text(0,0, "TO SETUP MUSIC, VOLUM ETC");
		this.add.text(20,20, "TO SETUP MUSIC, VOLUM ETC", {font: "25px Arial", fill: "yellow"});
	}

}