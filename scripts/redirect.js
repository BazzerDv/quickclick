let Redirected = {
  variablesObject: {
    //zero:{variable:'redirected', obj:'this'}, //To prevent cheating by changing url paramaters
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
    eleven:{variable:'currentrun', obj:'runtime'}
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
    if (true == true){
      let urlParams = new URLSearchParams(location.search)
      let param
      for (const [key, value] of urlParams){
        if (key in this.variablesObject){
          alert(value)
          param = this.variablesObject[key]
        
          if (param.obj == 'clicks'){
            Clicks[param.variable] = Number(value)
          
          } else if (param.obj == 'prestige'){
            if (param.variable !== 'prestiged'){
              Prestige[param.variable] = Number(value)
            } else {
              if (value == 'true'){
                Prestige[param.variable] = true
              }
            }
          
          } else if (param.obj == 'runtime'){
            Runtime[param.variable].time = Number(value)
        
          } else if (param.obj == 'animations'){
            Animations[param.variable] = value
        
          } else {
            Autoclickers.nbrOwned[param.variable].number = Number(value)
            if (Number(value) > 0){
              Autoclickers.nbrOwned[param.variable].showing = true
            } else {
              Autoclickers.nbrOwned[param.variable].showing = false
            }
          }
        }
      }
      this.updateScreen()
    }
  },
  
  updateScreen(){
    main.update()
    document.getElementById('mouseupgrades').innerHTML = 'Mouse Rating: '+ (Clicks.mouseUpgrades)
    document.getElementById('clickbutton').title = 'Click Me! (+' + (1*Clicks.mouseUpgrades) + ')'
    document.getElementById('changeanimation').title = 'Current Animation: ' + Animations[Animations.currentAnimation].name
    Autoclickers.updateClicksPerOneTenthSec()
    Autoclickers.updateClicksPerSec()
    Prestige.updatePrestigePoints()
    Prestige.updateBonus()
    Prestige.prestigeShop()
    Runtime.updateRun(Runtime.currentrun.time, 'currentrun')
    Runtime.updateRun(Runtime.fastestrun.time, 'fastestrun')
  }
}