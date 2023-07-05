// Could you tell me the date today?
export function printThisDate(date){
    const theMonth = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    let newDate = new Date(date)
    let day = newDate.getDate()
    let month = newDate.getMonth()
    let yy = newDate.getFullYear()
    let year = (yy < 1000) ? yy + 1900 : yy
    return (day + ' ' + theMonth[month] + ' ' + year)
}

export function thisDate(newdate){
    let date = new Date(newdate)
    let day = date.getDate()
    let month = date.getMonth()+1
    let year = date.getFullYear()
    return (year+'-'+month+'-'+day)
    // return {day: day, month:month, year: year}
}

// Give me the day name of n date
export function findDay(date){
    const days= ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    let newDate = new Date(date)
    let indeks = newDate.getDay()
    let dayName = days[indeks]
    return dayName
}