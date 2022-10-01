let reset = function(){
  localStorage.clear()
  Load.found = false
  Clicks.onload()
  Autoclickers.onload()
  Runtime.onload()
  Prestige.onload()
  document.getElementById('fastestrun').innerHTML = ''
  document.getElementById('bonus').innerHTML = ''
  Save.getSaveData()
}
