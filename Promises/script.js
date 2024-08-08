setTimeout(function () {
    document.getElementById("title1").style.visibility = "visible";

    setTimeout(function () {
        document.getElementById("title2").style.visibility = "visible";

        setTimeout(function () {
            document.getElementById("title3").style.visibility = "visible";
            setTimeout(function () {
                document.getElementById("title4").style.visibility = "visible";
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

let p = new Promise(function (resolve, reject) {
    console.log("starting the async code")
    setTimeout(function () {
        document.getElementById("title1").style.visibility = "visible";
    }, 2000)
    isSuccess = true // Change this value to simulate success or failure
    if (isSuccess) {
        console.log("calling resolve")
        resolve()
    } else {
        console.log("calling reject")
        reject()
    }
})

console.log("after the promise creation then and catch")

p.then(function () {
    console.log("calling then")
}).catch(function () {
    console.log("Failed")
})

console.log("after the then and catch")


