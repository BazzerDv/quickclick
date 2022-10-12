const main = {
    onload(){
      Clicks.onload()
	    Autoclickers.onload()
      Prestige.onload()
      Animations.onload()
	    Runtime.onload()
	    Redirected.onload()
	    window.setInterval(this.onetenthsecInterval.bind(this), 100);
      //window.setInterval(this.secInterval.bind(this), 1000);
      window.setInterval(this.tensecInterval.bind(this), 10000);
      document.addEventListener( 'visibilitychange' , function() {
        if (document.hidden) {
          Runtime.saveTime()
        } else {
          Runtime.getTimeDiff()
        }
      })
      const bc = new BroadcastChannel("Quick-Click");

      bc.onmessage = (event) => {
        if (event.data === `First tab?`) {
          bc.postMessage(`Tab already open`);
          alert(`Another tab of this site just got opened, please close to avoid saving errors.`);
        }
        if (event.data === `Tab already open`) {
          alert(`An instance of this site is already running. This may cause saving errors.`);
        }
      };

    bc.postMessage(`First tab?`);
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
