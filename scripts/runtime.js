let Runtime = {
  currentrun: {time: 0, runString:'Current Run: '},
  fastestrun: {time: 0, runString:'Fastest Run: '},
  bonus:0,
  runDays: 0,
  runHours: 0,
  runMinutes: 0,
  runSeconds: 0,
  runMilliseconds: 0,
  
  onload(){
    if ((Load.found == true) && ('runtimedata' in Load.data)){
      this.currentrun.time = Load.data.runtimedata.currentrun
      this.bonus = Load.data.runtimedata.bonus
      this.fastestrun.time = Load.data.runtimedata.fastestrun
      this.updateRun(this.fastestrun.time, 'fastestrun')
    } else {
      console.log('Data for runtime.js not found, changing to default values')
      this.currentrun.time = 0
      this.bonus = 0
      this.fastestrun.time = 0
    }
  },
  
  updateRun(newvalue, run){
    value = newvalue
    this[String(run)].time = value
    
    if (this[String(run)].time > 86400){
      this.runDays = Math.floor(value / 86400)
      value %= 86400
    }
    
    if (this[String(run)].time > 3600){
      this.runHours = Math.floor(value / 3600)
      value %= 3600
    }
    
    if (this[String(run)].time > 60){
      this.runMinutes = Math.floor(value / 60)
      value %= 60
    }
    
    if (this[String(run)].time > 1){
      this.runSeconds = Math.floor(value / 1)
      value %= 1
    }
    
    this.runMilliseconds = (Math.floor(value*10))
    if (((this.fastestrun.time !==0) && (run == 'fastestrun')) || (run == 'currentrun')){
      document.getElementById(String(run)).innerHTML = this[String(run)].runString + this.runDays + ':' + this.runHours + ':' + this.runMinutes + ':' + this.runSeconds + '.' + this.runMilliseconds
    }
    this.runDays = 0
    this.runHours = 0
    this.runMinutes = 0
    this.runSeconds = 0
    this.runMilliseconds = 0
  },
  
  prestige(){
    let bonusholder = this.bonus
    fastestrunholder = Runtime.fastestrun.time
    console.log(fastestrunholder)
    let currentrunholder = this.currentrun.time
    console.log(currentrunholder)
    reset()
    this.bonus = bonusholder + 25
    if ((currentrunholder < fastestrunholder) || (fastestrunholder == 0)){
      this.updateRun(currentrunholder, 'fastestrun')
    } else {
      this.updateRun(fastestrunholder, 'fastestrun')
    }
  }
}
