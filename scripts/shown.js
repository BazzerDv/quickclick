var Buttonconfig = {
  buttonsAll: {mouseR: 10, clicker:50, trainedclicker: 200, mouseE: 300, spammer: 1000, vibrationengineer: 150000, collegedropout: 2000000},
  buttonsAuto: {clicker:50, trainedclicker: 200, spammer:1000, vibrationengineer:150000, collegedropout:2000000},
  buttonsManual: {mouseR:10, mouseE:300},
  
  show(){
    for (const [key, value] of Object.entries(this.buttonsAuto)){
      if (Clicks.nbrOwned >= value){
        document.getElementById(String(key)).style = 'visibility:visible'
      }
    }
  },
  
  hide(){
    for (const [key, value] of Object.entries(this.buttonsAuto)){
      if (Clicks.nbrOwned >= value){
        document.getElementById(String(key)).style = 'visibility:hidden'
      }
    }
  },
  
  disable(){
    for (const [key, value] of Object.entries(this.buttonsAll)){
      if (Clicks.nbrOwned < value){
        document.getElementById(String(key)).disabled = 'disabled'
      }
    }
  },
  
  enable(){
    for (const [key, value] of Object.entries(this.buttonsAll)){
      if (Clicks.nbrOwned >= value){
        document.getElementById(String(key)).disabled = ''
      } else {
        break
      }
    }
  }
}
