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
    document.getElementById('animation').innerHTML=Animations[Animations.currentAnimation][this.clickLoop]
		document.getElementById('clickbutton').title = 'Click Me! (+' + (1*this.mouseUpgrades) + ')'
	},
    
  setNbrOwned(value){
   	this.nbrOwned = Number(value*1000000000000)
		document.getElementById('clicks').innerHTML = 'Clicks: '+Math.floor(value)
  },
    
  addClick(){
   	this.setNbrOwned(this.nbrOwned + ((1*this.mouseUpgrades)+(((1*this.mouseUpgrades)/100)*Prestige.bonus)))
    this.clickLoop += 1
    if (this.clickLoop > (Animations[Animations.currentAnimation].length - 1)) {
			this.clickLoop = 0
  	}
  	document.getElementById('animation').innerHTML=Animations[Animations.currentAnimation][this.clickLoop]
    main.update()
  },
    
	addMouseUpgrade(value, upgrade){
 	  if (this.nbrOwned >= value){
      this.mouseUpgrades += upgrade
  	  document.getElementById('mouseupgrades').innerHTML = 'Mouse Rating: '+ (this.mouseUpgrades)
			document.getElementById('clickbutton').title = 'Click Me! (+' + (1*this.mouseUpgrades) + ')'
 	    this.setNbrOwned(this.nbrOwned - value)
      main.update()
  	}
  }
    
}
