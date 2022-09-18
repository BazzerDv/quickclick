const main = {
    oldNbrOwned: Clicks.nbrOwned,
    onload(){
    	Clicks.onload()
	Autoclickers.onload()
	window.setInterval(this.onetenthsecInterval.bind(this), 100);
        window.setInterval(this.secInterval.bind(this), 1000);
        window.setInterval(this.tensecInterval.bind(this), 10000);
    },
    
    secInterval(){
	this.oldNbrOwned = Clicks.nbrOwned
    	Clicks.setNbrOwned(this.oldNbrOwned + (Autoclickers.Cps))
    },
    
    //For clarity in code
    update(){
	this.oldNbrOwned = Clicks.nbrOwned
	Clicks.setNbrOwned(Clicks.nbrOwned)
    },
    
    onetenthsecInterval(){
	Buttonconfig.show()
	Buttonconfig.disable()
	Buttonconfig.enable()
	Clicks.setNbrOwned(Clicks.nbrOwned + (Autoclickers.Cpots))
	Autoclickers.updateButtons()
    },
    
    tensecInterval(){
      Save.getSaveData()
    }
}

window.onload = main.onload.bind(main);
