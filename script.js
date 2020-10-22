// Let make things move
var datee = document.getElementById("datee");

function setTime() {
    setInterval(() => {
        let date = new Date;
        let hour = date.getHours();
        let minute = date.getMinutes();
        let seconds = date.getSeconds();
        let dayy = date.getDate();

        document.getElementById('long').style.transform = `rotate(${seconds * 6}deg)`;
        document.getElementById('short').style.transform = `rotate(${minute * 6}deg)`;
        document.getElementById('shorter').style.transform = `rotate(${hour * 6}deg)`;
        datee.innerText = dayy;

    }, 1000);

}

setTime();

//  Thanks for Watching this Video....