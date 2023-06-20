// Could you tell me the date today?
export function thisDate(){
    const theMonth = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth()
    let yy = date.getFullYear()
    let year = (yy < 1000) ? yy + 1900 : yy
    return (day + ' ' + theMonth[month] + ' ' + year)
}