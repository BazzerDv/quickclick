var Clicks = {
    nbrOwned : 0,
    mouseUpgrades: 0,
    clickLoop: 0,
    onload(){
      if (Load.found == true){
    	this.setNbrOwned(Load.data.clicksdata.nbrOwned)
    	this.mouseUpgrades = Load.data.clicksdata.mouseUpgrades
      } else {
        this.setNbrOwned(0)
    	this.mouseUpgrades = 1
      }
      document.getElementById('mouseupgrades').innerHTML = 'Mouse Rating: '+ (this.mouseUpgrades)
      document.getElementById('animation').innerHTML=Animation[this.clickLoop]
    },
    
    setNbrOwned(value){
    	this.nbrOwned = Number(value)
    	document.getElementById('clicks').innerHTML = 'Clicks: '+Math.floor(value)
    },
    
    addClick(){
    	this.setNbrOwned(this.nbrOwned + (1*this.mouseUpgrades))
    	this.clickLoop += 1
    	if (this.clickLoop > (Animation.length - 1)) {
    	    this.clickLoop = 0
    	}
    	document.getElementById('animation').innerHTML=Animation[this.clickLoop]
        main.update()
    },
    
    addMouseUpgrade(value, upgrade){
   	if (this.nbrOwned >= value){
            this.mouseUpgrades += upgrade
    	    document.getElementById('mouseupgrades').innerHTML = 'Mouse Rating: '+ (this.mouseUpgrades)
    	    this.setNbrOwned(this.nbrOwned - value)
    	    main.update()
    	}
    }
    
}
