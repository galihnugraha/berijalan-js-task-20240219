const timeConversion = time => {
    const info = time.substring(time.length-2)
    let hour = parseInt(time.substring(0, 2))

    if (hour === 12 && info === 'AM') {
        return '00' + time.substring(2, 8)
    } else if (hour === 12 && info === 'PM') {
        return time.substring(0, 8)
    } else if (hour < 12 && info === 'AM') {
        return time.substring(0, 8)
    } else if (hour < 12 && info === 'PM') {
        return (hour+12).toString() + time.substring(2, 8)
    } else {
        return 'Input error'
    }
}

console.log(timeConversion('12:01:00AM'))
console.log(timeConversion('12:01:00PM'))
console.log(timeConversion('10:01:00AM'))
console.log(timeConversion('10:01:00PM'))
console.log(timeConversion('13:01:00PM'))
console.log(timeConversion('10:01:00TM'))
