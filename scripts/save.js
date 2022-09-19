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
    save_data.autoclickersdata.clickers.number = Autoclickers.nbrOwned.clickers.number;
    save_data.autoclickersdata.trainedclickers.number = Autoclickers.nbrOwned.trainedclickers.number;
    save_data.autoclickersdata.spammers.number = Autoclickers.nbrOwned.spammers.number;
    save_data.autoclickersdata.tappers.number = Autoclickers.nbrOwned.tappers.number;
    save_data.autoclickersdata.vibrationengineers.number = Autoclickers.nbrOwned.vibrationengineers.number;
    save_data.autoclickersdata.collegedropouts.number = Autoclickers.nbrOwned.collegedropouts.number;
    save_data.autoclickersdata.babies.number = Autoclickers.nbrOwned.babies.number;
    
    save_data.autoclickersdata.clickers.visibility = Autoclickers.nbrOwned.clickers.visibility;
    save_data.autoclickersdata.trainedclickers.visibility = Autoclickers.nbrOwned.trainedclickers.visibility;
    save_data.autoclickersdata.spammers.visibility = Autoclickers.nbrOwned.spammers.visibility;
    save_data.autoclickersdata.tappers.visibility = Autoclickers.nbrOwned.tappers.visibility;
    save_data.autoclickersdata.vibrationengineers.visibility = Autoclickers.nbrOwned.vibrationengineers.visibility;
    save_data.autoclickersdata.collegedropouts.visibility = Autoclickers.nbrOwned.collegedropouts.visibility;
    save_data.autoclickersdata.babies.visibility = Autoclickers.nbrOwned.babies.visibility;
    this.save(save_data)
  },
  
  save(data) {
    localStorage.setItem('QuickClickData', JSON.stringify(data))
  }
}
