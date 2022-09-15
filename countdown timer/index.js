//


function fun() {
    var t = document.getElementById('countDownTime').value;
    //console.log(t);

    t = t.toString();

    var countdowndate = new Date(t).getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countdowndate - now;
        //console.log(distance);
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        console.log(minutes);
        var seconds = Math.floor((distance % (1000 * 60)) / (1000));

        document.getElementById('root').innerText = "Days :  " + days + "\nHours :  " + hours + "\nMinutes :  " + minutes + "\nSeconds :  " + seconds;
        //console.log(distance);
        if (seconds <= 0 && hours <= 0 && days <= 0 && minutes <= 0) {

            clearInterval(x);
            document.getElementById('root').innerHTML = "time expired";

        }
        //  july 21, 2021 12:40:00

    }, 1000)
}