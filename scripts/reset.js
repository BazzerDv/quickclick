let reset = function(){
  localStorage.clear()
  Load.found = false
  Clicks.onload()
  Autoclickers.onload()
  Runtime.onload()
  document.getElementById('fastestrun').innerHTML = ''
  document.getELementById('bonus').innerHTML = ''
  main.oldNbrOwned = 0
  Save.getSaveData()
}
