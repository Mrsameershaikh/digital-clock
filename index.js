const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12) {
        h = h - 12;
        if(h<10){
            h="0"+h;
        }
        ampm = "PM"
    }

    hourEl.innerHTML = h;
    minuteEl.innerHTML = m;
    secondEl.innerHTML = s;
    ampmEl.innerHTML = ampm;
    
    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();