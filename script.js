let Hr = document.getElementById("hrs")
let Min = document.getElementById("min")
let Sec = document.getElementById("sec")

function displayTime() {
    let date = new Date;
    let hh=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    let hRotation=30*hh + min/2;
    let mRotation=6*min;
    let sRotation=6*sec;
    Hr.style.transform=`rotate(${hRotation}deg)`
    Min.style.transform=`rotate(${mRotation}deg)`
    Sec.style.transform=`rotate(${sRotation}deg)`
}

setInterval(displayTime, 1000)
