let Save = {
  getSaveData() {
    var save_data = {};
    save_data.clicksdata = {};
    save_data.clicksdata.nbrOwned = Clicks.nbrOwned;
    save_data.clicksdata.mouseUpgrades = Clicks.mouseUpgrades;
    save_data.autoclickersdata = {};
    save_data.autoclickersdata.clickers = Autoclickers.nbrOwned.clickers.number;
    save_data.autoclickersdata.trainedclickers = Autoclickers.nbrOwned.trainedclickers.number;
    save_data.autoclickersdata.spammers = Autoclickers.nbrOwned.spammers.number;
    save_data.autoclickersdata.vibrationengineers = Autoclickers.nbrOwned.vibrationengineers.number;
    save_data.autoclickersdata.collegedropouts = Autoclickers.nbrOwned.collegedropouts.number;
    this.save(save_data)
  },
  
  save(data) {
    localStorage.setItem('QuickClickData', JSON.stringify(data))
  }
}
