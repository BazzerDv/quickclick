const main = {
    oldNbrOwned: Clicks.nbrOwned,
    onload(){
      Clicks.onload()
	    Autoclickers.onload()
	    Runtime.onload()
	    window.setInterval(this.onetenthsecInterval.bind(this), 100);
      //window.setInterval(this.secInterval.bind(this), 1000);
      window.setInterval(this.tensecInterval.bind(this), 10000);
    },
    
    //For clarity in code
    update(){
	    this.oldNbrOwned = Clicks.nbrOwned
	    Clicks.setNbrOwned(Clicks.nbrOwned)
    },
    
    onetenthsecInterval(){
	    //Buttonconfig.show()
	    Buttonconfig.disable()
	    Buttonconfig.enable()
	    Autoclickers.updateButtons()
	    Clicks.setNbrOwned(Clicks.nbrOwned + (Autoclickers.Cpots))
	    Clicks.setNbrOwned(Clicks.nbrOwned + ((Clicks.nbrOwned/100)*Runtime.bonus)) 
	    Runtime.updateRun(Runtime.currentrun.time + 0.1, 'currentrun')
    },
    
    tensecInterval(){
      Save.getSaveData()
    }
}

window.onload = main.onload.bind(main);
