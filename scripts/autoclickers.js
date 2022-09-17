let Autoclickers = {
    Cps: 0,
    Cpots: 0,
    Mspc: 0,  //Milliseconds per click
    nbrOwned: {'clickers': {cost:50, number: 0, cps: 1},
               'trainedclickers': {cost:200, number:0, cps:5},
               'spammers': {cost:1000, number:0, cps:30},
               'vibrationengineers': {cost: 150000, number:0, cps:500},
               'collegedropouts': {cost:2000000, number:0, cps:15000}},
    
    onload(){
      if (Load.found == true){
        this.nbrOwned.clickers.number = Load.data.autoclickersdata.clickers
        this.nbrOwned.trainedclickers.number = Load.data.autoclickersdata.trainedclickers
        this.nbrOwned.spammers.number = Load.data.autoclickersdata.spammers
        this.nbrOwned.vibrationengineers.number = Load.data.autoclickersdata.vibrationengineers
        this.nbrOwned.collegedropouts.number = Load.data.autoclickersdata.collegedropouts
      } else {
        this.nbrOwned.clickers.number = 0
        this.nbrOwned.trainedclickers.number = 0
        this.nbrOwned.spammers.number = 0
        this.nbrOwned.vibrationengineers.number = 0
        this.nbrOwned.collegedropouts.number = 0
      }
      this.updateClicksPerSec()
      this.updateClicksPerOneTenthSec()
    },
    
    addAutoClicker(id){
        if (Clicks.nbrOwned >= this.nbrOwned[id].cost){
            this.nbrOwned[id].number += 1
            Clicks.nbrOwned -= this.nbrOwned[id].cost
            this.updateClicksPerSec()
            this.updateClicksPerOneTenthSec()
            main.update()
        }
    },
    
    
    updateClicksPerSec(){
    	this.Cps = 0
    	for (const [key, value] of Object.entries(this.nbrOwned)){
    	  this.Cps += (value.cps*value.number)
    	}
    	document.getElementById('cps').innerHTML = String(this.Cps) + ' cps'
    },
    
    updateClicksPerOneTenthSec(){
        this.Cpots = 0
        if (this.Cps > 9){
          for (const [key, value] of Object.entries(this.nbrOwned)){
    	    this.Cpots += (Math.floor((value.cps*value.number)/10))
    	  }
    	}
    }
}
