let Runtime = {
  currentrun: {time: 0, runString:'Current Run: '},
  fastestrun: {time: 0, runString:'Fastest Run: '},
  runDays: 0,
  runHours: 0,
  runMinutes: 0,
  runSeconds: 0,
  runMilliseconds: 0,
  timeDivisions: {runDays:86400, runHours:3600, runMinutes:60, runSeconds:1},
  
  onload(){
    if ((Load.found == true) && ('runtimedata' in Load.data)){
      this.currentrun.time = Load.data.runtimedata.currentrun
      this.fastestrun.time = Load.data.runtimedata.fastestrun
      this.updateRun(this.fastestrun.time, 'fastestrun')
    } else {
      console.log('Data for runtime.js not found, changing to default values. If you have just prestiged, ignore this message.')
      this.currentrun.time = 0
      this.fastestrun.time = 0
    }
  },
  
  updateRun(newvalue, run){
    let value = newvalue
    this[String(run)].time = value
    
    /*for (const [key,number] in Object.entries(this.timeDivisions)){
      if this[String(run)].time > number{
        this[String(key)] = Math.floor(value / number)
        value %= value
      }
    }*/
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
  }
}
