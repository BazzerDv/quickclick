const main = {
    onload(){
      Clicks.onload()
	    Autoclickers.onload()
	    Runtime.onload()
      Prestige.onload()
	    window.setInterval(this.onetenthsecInterval.bind(this), 100);
      //window.setInterval(this.secInterval.bind(this), 1000);
      window.setInterval(this.tensecInterval.bind(this), 10000);
    },
    
    //For clarity in code
    update(){
	    Clicks.setNbrOwned(Clicks.nbrOwned)
    },
    
    onetenthsecInterval(){
	    //Buttonconfig.show()
	    Buttonconfig.disable()
	    Buttonconfig.enable()
	    Autoclickers.updateButtons()
	    Clicks.setNbrOwned(Clicks.nbrOwned + (Autoclickers.Cpots))
	    Runtime.updateRun(Runtime.currentrun.time + 0.1, 'currentrun')
    },
    
    tensecInterval(){
      Save.getSaveData()
    }
}

window.onload = main.onload.bind(main);
