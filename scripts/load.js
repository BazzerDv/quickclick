let Load = {
  found: false,
  data: {},
  loadData(){
    if (localStorage.getItem('QuickClickData') != null){
      loaded_data = localStorage.getItem('QuickClickData')
      this.data = JSON.parse(loaded_data)
      this.found = true
    } else {
      console.log('No save data found')
    }
  }
}

Load.loadData()
