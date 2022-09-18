let Autoclickers = {
    Cps: 0,
    Cpots: 0,
    Mspc: 0,  //Milliseconds per click
    nbrOwned: {'clickers': {cost:50, number: 0, cps: 1, buttonString: `<p style='margin:1px 0'>
              <button id='clicker'; onclick='Autoclickers.addAutoClicker("clickers")'; style='visibility:hidden; font-family:monospace'; disabled>Buy Clicker (50C)</button>
              </p>`},
              'trainedclickers': {cost:200, number:0, cps:5, buttonString: ` <p style='margin:1px 0'>
              <button id='trainedclicker'; onclick='Autoclickers.addAutoClicker("trainedclickers")'; style='visibility:hidden; font-family:monospace'; disabled>Buy Trained Clicker (200C)</button>
              </p>`},
              'spammers': {cost:1000, number:0, cps:30, buttonString: ` <p style='margin:1px 0'>
              <button id='spammer'; onclick='Autoclickers.addAutoClicker("spammers")'; style='visibility:hidden; font-family:monospace'; disabled>Buy Spammer (1000C)</button>
              </p>`},
              'vibrationengineers': {cost: 150000, number:0, cps:500, buttonString: `<p style='margin:1px 0'>
              <button id='vibrationengineer'; onclick='Autoclickers.addAutoClicker("vibrationengineers")'; style='visibility:hidden; font-family:monospace'; disabled>Buy Vibration Engineer (150000C)</button>
              </p>`},
              'collegedropouts': {cost:2000000, number:0, cps:15000, buttonString: `  <p style='margin:1px 0'>
              <button id='collegedropout'; onclick='Autoclickers.addAutoClicker("collegedropouts")'; style='visibility:hidden; font-family:monospace'; disabled>Buy College Dropout (2000000C)</button>
              </p>`}},
    

  
    
    
    
  
    onload(){
      if (Load.found == true){
        for (const [key, value] of Object.entries(this.nbrOwned)){
	  this.nbrOwned[String(key)].number = Load.data.autoclickersdata[String(key)]
        }
        //this.nbrOwned.clickers.number = Load.data.autoclickersdata.clickers
        //this.nbrOwned.trainedclickers.number = Load.data.autoclickersdata.trainedclickers
        //this.nbrOwned.spammers.number = Load.data.autoclickersdata.spammers
        //this.nbrOwned.vibrationengineers.number = Load.data.autoclickersdata.vibrationengineers
        //this.nbrOwned.collegedropouts.number = Load.data.autoclickersdata.collegedropouts
      
	} else {
	  for (const [key, value] of Object.entries(this.nbrOwned)){
	    this.nbrOwned[String(key)].number = 0
        }
        //this.nbrOwned.clickers.number = 0
        //this.nbrOwned.trainedclickers.number = 0
        //this.nbrOwned.spammers.number = 0
        //this.nbrOwned.vibrationengineers.number = 0
        //this.nbrOwned.collegedropouts.number = 0
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
    },
	  
    updateButtons(){
	buttonString = ``
	  for (const [key,value] of Object.entries(this.nbrOwned)){
	    if (Clicks.nbrOwned > value.cost){
		buttonString = buttonString + value.buttonString
		}
          }
        document.getElementById('test').innerHTML = buttonString
    }
}
