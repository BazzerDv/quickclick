let Save = {
  getSaveData() {
    var save_data = {};
    save_data.clicksdata = {};
    save_data.clicksdata.nbrOwned = Clicks.nbrOwned;
    save_data.clicksdata.mouseUpgrades = Clicks.mouseUpgrades;
    save_data.autoclickersdata = {};
    for (const [key,value] of Object.entries(Autoclickers.nbrOwned)){
      save_data.autoclickersdata[String(key)] = {}
    }
    //for (const [key,value] of Object.entries(Autoclickers.nbrOwned)){
    //  save_data.autoclickersdata.String(key) = Autoclickers.nbrOwned[String(key)].number;
    //}
    save_data.autoclickersdata.clickers.number = Autoclickers.nbrOwned.clickers.number;
    save_data.autoclickersdata.trainedclickers.number = Autoclickers.nbrOwned.trainedclickers.number;
    save_data.autoclickersdata.spammers.number = Autoclickers.nbrOwned.spammers.number;
    save_data.autoclickersdata.tappers.number = Autoclickers.nbrOwned.tappers.number;
    save_data.autoclickersdata.vibrationengineers.number = Autoclickers.nbrOwned.vibrationengineers.number;
    save_data.autoclickersdata.collegedropouts.number = Autoclickers.nbrOwned.collegedropouts.number;
    save_data.autoclickersdata.babies.number = Autoclickers.nbrOwned.babies.number;
    
    save_data.autoclickersdata.clickers.showing = Autoclickers.nbrOwned.clickers.showing;
    save_data.autoclickersdata.trainedclickers.showing = Autoclickers.nbrOwned.trainedclickers.showing;
    save_data.autoclickersdata.spammers.showing = Autoclickers.nbrOwned.spammers.showing;
    save_data.autoclickersdata.tappers.showing = Autoclickers.nbrOwned.tappers.showing;
    save_data.autoclickersdata.vibrationengineers.showing = Autoclickers.nbrOwned.vibrationengineers.showing;
    save_data.autoclickersdata.collegedropouts.showing = Autoclickers.nbrOwned.collegedropouts.showing;
    save_data.autoclickersdata.babies.showing = Autoclickers.nbrOwned.babies.showing;
    this.save(save_data)
  },
  
  save(data) {
    localStorage.setItem('QuickClickData', JSON.stringify(data))
  }
}
