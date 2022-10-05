let Prestige = {
  prestiged: false,
  prestigePoints: 0,
  bonus: 0,

  onload(){
    if ((Load.found == true) && ('prestigedata' in Load.data)){
      this.prestiged = Load.data.prestigedata.prestiged
      this.prestigePoints = Load.data.prestigedata.prestigePoints
      this.bonus = Load.data.prestigedata.bonus
      this.updateBonus()
      this.updatePrestigePoints()
    } else {
      console.log('Data for prestige.js not found, switching to default values. Ignore this message if you have just prestiged.')
      this.prestiged = false
      this.prestigePoints = 0
      this.bonus = 0
    }
    this.prestigeShop()
  },

  updateBonus(){
    if (this.prestiged == true){
      document.getElementById('bonus').innerHTML = 'Prestige Bonus: +' + this.bonus + '%'
    }
  },

  updatePrestigePoints(){
    if (this.prestiged == true){
      document.getElementById('prestigepoints').innerHTML = 'Prestige Points: '+this.prestigePoints
    }
  },

  prestige(){
    bonusholder = this.bonus
    prestigepointsholder = this.prestigePoints
    fastestrunholder = Runtime.fastestrun.time
    currentrunholder = Runtime.currentrun.time
    reset()
    this.prestiged = true
    this.bonus += bonusholder + 25
    if ((currentrunholder < fastestrunholder) || (fastestrunholder == 0)){
      Runtime.updateRun(currentrunholder, 'fastestrun')
    } else {
      Runtime.updateRun(fastestrunholder, 'fastestrun')
    }
    this.prestigePoints = prestigepointsholder + 1
    this.updatePrestigePoints()
    this.updateBonus()
    this.prestigeShop()
    Save.getSaveData()
  },

  prestigeShop(){
    if (this.prestiged == true){
      prestigeShopText = `Prestige Shop:\n\
<button id='changeanimation' onclick='Animations.changeAnimation()' title='Current Animation: ` + Animations[Animations.currentAnimation].name + `'>Change Animation (1P)</button>\n\
\n\
Give suggestions for\n\
the prestige shop by\n\
following the ideas\n\
link.`
      document.getElementById('prestigeshop').innerHTML = prestigeShopText
    }
  }
}
