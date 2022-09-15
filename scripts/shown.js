var Buttonconfig = {
  buttonsreq: {mouseR: 10, clicker:50, trainedclicker: 200, mouseE: 300, spammer: 1000, vibrationengineer: 150000},

  show(id){
    for (const [key, value] of Object.entries(this.buttonsreq)){
      if (Clicks.nbrOwned >= value){
        document.getElementById(String(key)).style = 'visibility:visible'
      }
    }
  },
  
  disable(){
    for (const [key, value] of Object.entries(this.buttonsreq)){
      if (Clicks.nbrOwned < value){
        document.getElementById(String(key)).disabled = 'disabled'
      }
    }
  },
  
  enable(){
    for (const [key, value] of Object.entries(this.buttonsreq)){
      if (Clicks.nbrOwned >= value){
        document.getElementById(String(key)).disabled = ''
      } else {
        break
      }
    }
  }
}