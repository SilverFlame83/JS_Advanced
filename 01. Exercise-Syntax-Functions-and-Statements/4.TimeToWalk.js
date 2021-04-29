function timeToWalk(steps, footlength, speed) {
    const dist = steps * footlength;
    let time = Math.round(dist / speed * 3.6);
    time += Math.floor(dist / 500) * 60;

    const seconds = time % 60;
    time -= seconds;
    const minutes = (time / 60) % 60;
    time -= minutes * 60;
    const hours =time / 3600;

    console.log(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`)

    function pad(num) {
        return ('0' + num).slice(-2);
    }
}
    //Second Solution of pad function
    // function pad(num) {
    //     if (num < 10) {
    //         return '0' + num;
    //     } else {
    //         return '' + num;
    //     }
    // }
 


timeToWalk(4000, 0.60, 5)