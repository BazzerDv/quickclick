let Reset = {
  reset(){
    this.changeResetModalStatus('none')
    localStorage.removeItem('QuickClickData')
    Load.found = false
    Clicks.onload()
    Autoclickers.onload()
    Runtime.onload()
    Prestige.onload()
    Reset.resetElements()
    Save.getSaveData()
  },

  changeResetModalStatus(status){
    document.getElementById("resetModal").style.display = status;
  },

  checkReset(){
    this.changeResetModalStatus('block')
  },

  noReset(){
    this.changeResetModalStatus('none')
  },

  resetElements(){
    document.getElementById('fastestrun').innerHTML = ''
    document.getElementById('bonus').innerHTML = ''
    document.getElementById('prestigeshop').innerHTML = ''
    document.getElementById('prestigepoints').innerHTML = ''
  }
}