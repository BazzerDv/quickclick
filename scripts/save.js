let Save = {
  getSaveData() {
    var save_data = {};
    save_data.clicksdata = {};
    save_data.clicksdata.nbrOwned = Clicks.nbrOwned;
    save_data.clicksdata.mouseUpgrades = Clicks.mouseUpgrades;
    save_data.autoclickersdata = {};

    for (const [key,value] of Object.entries(Autoclickers.nbrOwned)){
      save_data.autoclickersdata[String(key)] = {}
      save_data.autoclickersdata[String(key)].number = Autoclickers.nbrOwned[String(key)].number;
      save_data.autoclickersdata[String(key)].showing = Autoclickers.nbrOwned[String(key)].showing;
    };

    save_data.runtimedata = {}
    save_data.runtimedata.currentrun = Runtime.currentrun.time
    save_data.runtimedata.fastestrun = Runtime.fastestrun.time

    save_data.prestigedata = {}
    save_data.prestigedata.bonus = Prestige.bonus
    save_data.prestigedata.prestiged = Prestige.prestiged
    save_data.prestigedata.prestigePoints = Prestige.prestigePoints

    save_data.animationsdata = {}
    save_data.animationsdata.currentAnimation = Animations.currentAnimation
    
    save_data.redirectdata = {}
    save_data.redirectdata.redirected = Redirect.redirected
    
    this.save(save_data)
  },
  
  save(data) {
    localStorage.setItem('QuickClickData', JSON.stringify(data))
  }
}
