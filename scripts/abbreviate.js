let shorten = function(calculatedNum){
  calculatedNum = String(calculatedNum)
  formatNum = calculatedNum
  ending = calculatedNum.charAt(calculatedNum.length-1)
  formatNum = calculatedNum.substring(0, calculatedNum.length - 1)
  dp = formatNum.indexOf('.')
  formatNum = formatNum.replace('.', '')
  numLen = formatNum.length
  if (formatNum.length >= 3){
    formatNum = formatNum.substring(0, 3)
    return formatNum.slice(0, dp) + '.' + formatNum.slice(dp) + ending
  } else {
    return formatNum + ending
  }
}
let abbreviate = function(n) {
  if (n < 1000) {
    return n;
  }
  digits = Math.log10(n)
  numberEnd = ['K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'O', 'N', 'D']
  if (Math.floor((digits / 3) - 1) < 11) {
    return shorten(Math.floor((n / (10 ** (digits - digits % 3))) * 1000) / 1000 + numberEnd[Math.floor((digits / 3) - 1)])
  } else {
    return shorten(Math.floor(n / (10 ** digits) ** 1000) / 1000 + 'e' + digits)
  }
}
