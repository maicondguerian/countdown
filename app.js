const countDown = () =>{
    const countDate = new Date ("April 02 , 2030 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const gape = countDate - nowDate;
    // como funciona?
    const second = 1000;
    const minute = second * 60;
    const hour = minute *60;
    const day = hour * 24;
}

countDown();