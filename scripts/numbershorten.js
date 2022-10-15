function bignumber(n) {
    if (n < 1000) {
        return n;
    }
    digits = Math.log10(n)
    numberEnd = ['k', 'm', 'b', 't', 'qa', 'qi', 'sx', 'sp', 'o', 'n', 'd']
    if (Math.floor((digits / 3) - 1) < 11) {
        return Math.floor((n / (10 ** (digits - digits % 3))) * 1000) / 1000 + numberEnd[Math.floor((digits / 3) - 1)]
    } else {
        return Math.floor(n / (10 ** digits) ** 1000) / 1000 + 'e' + digits
    }
}