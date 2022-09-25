let Save = {
  getSaveData() {
    var save_data = {};
    save_data.clicksdata = {};
    save_data.clicksdata.nbrOwned = Clicks.nbrOwned;
    save_data.clicksdata.mouseUpgrades = Clicks.mouseUpgrades;
    save_data.autoclickersdata = {};
    for (const [key,value] of Object.entries(Autoclickers.nbrOwned)){
      save_data.autoclickersdata[String(key)] = {}
    };
    
    for (const [key,value] of Object.entries(Autoclickers.nbrOwned)){
      save_data.autoclickersdata[String(key)].number = Autoclickers.nbrOwned[String(key)].number;
    };
    
    for (const [key,value] of Object.entries(Autoclickers.nbrOwned)){
      save_data.autoclickersdata[String(key)].showing = Autoclickers.nbrOwned[String(key)].showing;
    };
    save_data.runtimedata = {}
    save_data.runtimedata.currentrun = Runtime.currentrun.time
    save_data.runtimedata.fastestrun = Runtime.fastestrun.time
    save_data.runtimedata.bonus = Runtime.bonus
    this.save(save_data)
  },
  
  save(data) {
    localStorage.setItem('QuickClickData', JSON.stringify(data))
  }
}
