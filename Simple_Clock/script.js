function updateClock(hour, minute, second){

    var hourDegrees = hour * 30;
    var minuteDegrees = minute * 6;
    var secondDegrees = second * 6;

    //one
    $('.hour').css({
        'transform': `rotate(${hourDegrees}deg)`
    });

    $('.minute').css({
        'transform': `rotate(${minuteDegrees}deg)`
    });

    $('.second').css({
        'transform': `rotate(${secondDegrees}deg)`
    });
}



window.onload = runclock()


function runclock(){
    
    var date = new Date()


    var hour = (date.getHours() + 11) % 12 + 1
    var minute = date.getMinutes()
    var second = date.getSeconds()

    updateClock(hour, minute, second)

}

setInterval(runclock, 1000);


