const showMostCandles = (candles) => {
    if (candles.length == 0) {
        return 'Array Kosong'
    }
    
    if (candles.length == 1) {
        return 1
    }

    candles.sort((a, b) => b - a)
    console.log(candles)

    const result = []
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] == candles [0]) {
            result.push(candles[i])
        }
    }
    console.log(result)
    return result.length
}

const candles = [1, 4, 4, 1, 3]
console.log(candles)
console.log(showMostCandles(candles))