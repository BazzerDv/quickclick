const main = {
    onload(){
      Clicks.onload()
	    Autoclickers.onload()
      Prestige.onload()
      Animations.onload()
	    Runtime.onload()
	    Redirect.onload()
	    window.setInterval(this.onetenthsecInterval.bind(this), 100);
      window.setInterval(this.tensecInterval.bind(this), 10000);
      document.addEventListener( 'visibilitychange' , function() {
        if (document.hidden) {
          Runtime.saveTime()
        } else {
          Runtime.getTimeDiff()
        }
      })
      //To Check for other tabs opened
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
window.onclick = function(event) {
  if (event.target == document.getElementById('resetModal')) {
    document.getElementById('resetModal').style.display = "none";
  }
}