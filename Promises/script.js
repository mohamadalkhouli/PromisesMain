
async function showTitles() {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById("title1").style.visibility = "visible";
            resolve()
        }, 1000)
    })
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById("title2").style.visibility = "visible";
            resolve()
        }, 1000)
    })
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById("title3").style.visibility = "visible";
            resolve()
        }, 1000)
    })
    setTimeout(() => {
        document.getElementById("title4").style.visibility = "visible";
        resolve()
    }, 1000)
}
showTitles()