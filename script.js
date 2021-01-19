const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");



function runTheClock() {
    //use set interval method
    //SET THE DATE OBJECT
    let date = new Date();
    console.log(Date);
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    console.log("Hour:" + hr + "Minute:" + min + "Second" + sec);
    //to make sure the clock gets the right degrees for the arms
    //divide the clock to ensure it gets the correct number of sections
    //the second arm splits the clock every 60 sec and so we divide 360/60 + the exact sec to get segments same goes for minutes
    //hours divide by 12

    //write code to manipulate the clockarms
    let hrPosition = (hr * 360 / 12) + (min * 360 / 60) / 12;
    let minPosition = (min * 360 / 60) + (sec * 360 / 60) / 60;
    let secPosition = sec * 360 / 60;
}
let interval = setInterval(runTheClock, 1000);
/*start with sec what we know right now is the number of sec in a minute 
1.so we type: let secPosition = sec;
2. then get 60sec which could be on the clock and divide by 360 to get how 
many degrees are covered by one second then multiply by sec; = sec*360/60;
3. we do the same for minutes min=min*360/60
use incremental values

HOURHAND.getElementsByClassName.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.getElementsByClassName.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.getElementsByClassName.transform = "rotate(" + secPosition + "deg)";*/