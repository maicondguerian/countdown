const countDown = () =>{
    const countDate = new Date ("April 02 , 2030 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const gape = countDate - nowDate;
    // como funciona?
    const second = 1000;
    const minute = second * 60;
    const hour = minute *60;
    const day = hour * 24;

    // calculando

    const remainDay = Math.floor(gape / day)
    const remainHour = Math.floor((gape % day)/ hour)
    const remainMinute = Math.floor((gape % hour)/ minute)
    const remainSecond = Math.floor((gape % minute)/ second)

    document.querySelector('.day').innerHTML= remainDay
    document.querySelector('.hour').innerHTML= remainHour
    document.querySelector('.minute').innerHTML= remainMinute
    document.querySelector('.second').innerHTML= remainSecond
    
}

setInterval(countDown,1000)