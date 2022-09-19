let Save = {
  getSaveData() {
    var save_data = {};
    save_data.clicksdata = {};
    save_data.clicksdata.nbrOwned = Clicks.nbrOwned;
    save_data.clicksdata.mouseUpgrades = Clicks.mouseUpgrades;
    save_data.autoclickersdata = {};
    //for (const [key,value] of Object.entries(Autoclickers.nbrOwned)){
    //  save_data.autoclickersdata.String(key) = Autoclickers.nbrOwned[String(key)].number;
    //}
    save_data.autoclickersdata.clickers = Autoclickers.nbrOwned.clickers.number;
    save_data.autoclickersdata.trainedclickers = Autoclickers.nbrOwned.trainedclickers.number;
    save_data.autoclickersdata.spammers = Autoclickers.nbrOwned.spammers.number;
    save_data.autoclickersdata.tappers = Autoclickers.nbrOwned.tappers.number;
    save_data.autoclickersdata.vibrationengineers = Autoclickers.nbrOwned.vibrationengineers.number;
    save_data.autoclickersdata.collegedropouts = Autoclickers.nbrOwned.collegedropouts.number;
    save_data.autoclickersdata.babies = Autoclickers.nbrOwned.babies.number;
    this.save(save_data)
  },
  
  save(data) {
    localStorage.setItem('QuickClickData', JSON.stringify(data))
  }
}
