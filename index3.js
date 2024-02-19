const getKembalian = (hargaBarang, uang) => {
    const pecahan  = [50000, 20000, 10000, 5000, 2000, 1000]
    const kembalian = uang - hargaBarang
    const hasilPecahan = []
    let sisa = kembalian

    for (let i = 0; i < pecahan.length; i++) {
        const jumlahPecahan = parseInt(sisa / pecahan[i])
        hasilPecahan.push(jumlahPecahan)
        sisa %= pecahan[i]
    }

    console.log(hasilPecahan)
}

const hargaEsKrim = 13000
const uangLia = 100000
console.log(getKembalian(hargaEsKrim, uangLia))