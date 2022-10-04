let reset = function(){
  localStorage.removeItem('QuickClickData')
  Load.found = false
  Clicks.onload()
  Autoclickers.onload()
  Runtime.onload()
  Prestige.onload()
  resetElements()
  Save.getSaveData()
}

let resetElements = function(){
  document.getElementById('fastestrun').innerHTML = ''
  document.getElementById('bonus').innerHTML = ''
  document.getElementById('prestigeshop').innerHTML = ''
  document.getElementById('prestigepoints').innerHTML = ''
}