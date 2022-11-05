let Redirect = {
  redirected: false,
  variablesObject: {
    one:{variable:'nbrOwned', obj:'clicks'},
    two:{variable:'clickers', obj:'autoclickers'},
    three:{variable:'prestiged', obj:'prestige'},
    four:{variable:'trainedclickers', obj:'autoclickers'},
    five:{variable:'mouseUpgrades', obj:'clicks'},
    six:{variable:'spammers', obj:'autoclickers'},
    seven:{variable:'currentAnimation', obj:'animations'},
    eight:{variable:'tappers', obj:'autoclickers'},
    nine:{variable:'bonus', obj:'prestige'},
    ten:{variable:'vibrationengineers', obj:'autoclickers'},
    eleven:{variable:'currentrun', obj:'runtime'},
    twelve:{variable:'collegedropouts', obj:'autoclickers'},
    thirteen:{variable:'prestigePoints', obj:'prestige'},
    fourteen:{variable:'babies', obj:'autoclickers'},
    fifteen:{variable:'bossbabies', obj:'autoclickers'},
    sixteen:{variable:'unemployedengineers', obj:'autoclickers'},
    seventeen:{variable:'fastestrun', obj:'runtime'},
    eighteen:{variable:'testers', obj:'autoclickers'},
    nineteen:{variable:'hackers', obj:'autoclickers'},
    twenty:{variable:'developers', obj:'autoclickers'},
  },
  
  onload(){
    if ((Load.found == true) && ('redirectdata' in Load.data)){
      this.redirected = Load.data.redirectdata.redirected
    }
    this.redirected = false //Removing soon
    if ((this.redirected == false) && (document.referrer == 'https://quickclickgame.github.io/')){
      let urlParams = new URLSearchParams(location.search)
      let param
      for (const [key, value] of urlParams){
        if (key in this.variablesObject){
          param = this.variablesObject[key]
        
          if (param.obj == 'clicks'){
            this.updateClicks(param,value)
          } else if (param.obj == 'prestige'){
            this.updatePrestige(param,value)
          } else if (param.obj == 'runtime'){
            this.updateRuntime(param,value)
          } else if (param.obj == 'animations'){
            this.updateAnimations(param,value)
          } else if (param.obj == 'autoclickers'){
            this.updateAutoclickers(param,value)
          }
        }
      }
      this.redirected = true
      this.updateScreen()
      Save.getSaveData()
    }
  },
  
  updateClicks(param, value){
    if (Clicks[param.variable] < value){
      Clicks[param.variable] = Number(value)
    }
  },

  updatePrestige(param, value){
    if (param.variable !== 'prestiged'){
      if (Prestige[param.variable] < Number(value)){
        Prestige[param.variable] = Number(value)
      }
    } else {
      if (Prestige[param.variable]=='false'){
        if (value == 'true'){
          Prestige[param.variable] = true
        }
      }
    }
  },

  updateRuntime(param,value){
    if (Runtime[param.variable] < Number(value)){
      Runtime[param.variable].time = Number(value)
    }
  },

  updateAnimations(param,value){
    Animations[param.variable] = value
  },

  updateAutoclickers(param,value){
    if (Autoclickers.nbrOwned[param.variable].number < Number(value)){
      Autoclickers.nbrOwned[param.variable].number = Number(value)
      if (Number(value) > 0){
        Autoclickers.nbrOwned[param.variable].showing = true
      } else {
        Autoclickers.nbrOwned[param.variable].showing = false
      }
    }
  },

  updateScreen(){
    main.update()
    document.getElementById('mouseupgrades').innerHTML = 'Mouse Rating: '+ (Clicks.mouseUpgrades)
    document.getElementById('clickbutton').title = 'Click Me! (+' + (1*Clicks.mouseUpgrades) + ')'
    if (Prestige.prestiged == true){
      document.getElementById('changeanimation').title = 'Current Animation: ' + Animations[Animations.currentAnimation].name
    }
    Autoclickers.updateClicksPerOneTenthSec()
    Autoclickers.updateClicksPerSec()
    Prestige.updatePrestigePoints()
    Prestige.updateBonus()
    Prestige.prestigeShop()
    Runtime.updateRun(Runtime.currentrun.time, 'currentrun')
    Runtime.updateRun(Runtime.fastestrun.time, 'fastestrun')
  }
}
