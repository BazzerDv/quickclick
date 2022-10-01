let Prestige = {
  prestiged: true,
  bonus: 0,

  onload(){
    if ((Load.found == true) && ('prestigedata' in Load.data)){
      this.prestiged = Load.data.prestigedata.prestiged
      this.bonus = Load.data.prestigedata.bonus
      this.updateBonus()
    } else {
      console.log('Data for prestige.js not found, switching to default values. Ignore this message if you have just prestiged.')
      this.prestiged = 0
      this.bonus = 0
    }
  },

  updateBonus(){
    if (this.bonus > 0){
      document.getElementById('bonus').innerHTML = 'Prestige Bonus: +' + this.bonus + '%'
    }
  },

  prestige(){
    bonusholder = this.bonus
    fastestrunholder = Runtime.fastestrun.time
    currentrunholder = Runtime.currentrun.time
    reset()
    this.bonus += bonusholder + 25
    if ((currentrunholder < fastestrunholder) || (fastestrunholder == 0)){
      Runtime.updateRun(currentrunholder, 'fastestrun')
    } else {
      Runtime.updateRun(fastestrunholder, 'fastestrun')
    }
    this.updateBonus()
    this.prestiged = true
    Save.getSaveData()
  }
}