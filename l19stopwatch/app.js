// const getdisplay = document.querySelector('.display');
const getdisplay = document.querySelectorAll('.display');

const getstartbtn = document.querySelector('.start');
const getpausebtn = document.querySelector('.pause');
const getresestbtn = document.querySelector('.reset');

const getdlpsec = document.getElementById('dlpsecond');
const getdlpmlsec = document.getElementById('dlpmillisec');
const getmodebtn = document.querySelector('.mode-btn');

;// var hours = 0,
//     minutes = 0,
//     seconds = 0,
//     milliseconds = 0;

var [hours,minutes,seconds,miliiseconds] = [0,0,0,0];

var setinvdisplay;
//
// getstartbtn.addEventListener('click',starttime);
// getpausebtn.addEventListener('click',pausetime);
// getresestbtn.addEventListener('click',resettime);
//
// function starttime(){
//     // console.log('hay i am start time');
//
//     clearInterval(setinvdisplay)
//     setinvdisplay = setInterval(showdisplay,10);
//
// }
//
// function pausetime(){
//     console.log('hay i am pause time');
//     clearInterval(setinvdisplay)
//
//
//
// }
//
// function resettime(){
//     // console.log('hay i am reset');
//
//     clearInterval(setinvdisplay);
//     [hours,minutes,seconds,miliiseconds] = [0,0,0,0];
//     getdisplay.innerHTML = "00 : 00 : 00 : 000";
//
//
// }
//
// function showdisplay(){
//     // console.log('hay hay hay he he');
//
//     miliiseconds += 10;
//
//     if(miliiseconds === 1000){
//         miliiseconds = 0;
//         seconds++;
//
//         if(seconds === 60){
//             seconds = 0;
//
//             minutes++;
//
//             if(minutes === 60){
//                 minutes = 0;
//                 hours++;
//
//                 if(hours === 24){
//                     hours = 0;
//                 }
//
//             }
//
//         }
//
//     }
//
//     // console.log(miliiseconds);
//     // console.log('seconds',seconds);
//     // console.log('minutes',minutes);
//     // console.log('hours',hours);
//
//     let h = hours < 10 ? '0'+hours :hours;
//     let m = minutes < 10 ? '0'+minutes : minutes;
//     let s = seconds < 10 ? '0'+seconds : seconds;
//     let ms = miliiseconds < 10 ? "00"+miliiseconds : miliiseconds < 100 ? "0"+miliiseconds : miliiseconds ;
//
//     getdisplay.innerHTML = `${h} : ${m} : ${s} : ${ms} `;
//
// }

var idx = 0;
getdisplay[idx].style.display = 'block';

getmodebtn.onclick = function (){
    // console.log('hi');

    // clearInterval(setinvdisplay);
    reloadagain();
    [hours,minutes,seconds,miliiseconds] = [0,0,0,0];




    getdisplay[idx].style.display = "none";

    idx++;
    if(idx > 1){
        idx = 0;
    }

    getdisplay[idx].style.display = 'block';

    console.log(idx);

    getmodebtn.textContent = `Mode${idx}`;



}


getstartbtn.onclick = function(){
    clearInterval(setinvdisplay);
    setinvdisplay = setInterval(showdisplay,10);

}

getpausebtn.onclick = function(){
    clearInterval(setinvdisplay);
}


getresestbtn.onclick = function(){

    // if(idx === 0){
    //     clearInterval(setinvdisplay);
    //     [hours,minutes,seconds,miliiseconds] = [0,0,0,0];
    //     getdisplay[idx].innerHTML = "00 : 00 : 00 : 000";
    //
    // }else {
    //     clearInterval(setinvdisplay);
    //     miliiseconds = "00";
    //     seconds = "00";
    //     getdlpmlsec.innerHTML = miliiseconds;
    //     getdlpsec.innerHTML = seconds;
    //
    // }

    reloadagain();


}

function reloadagain(){
    if(idx === 0){
        clearInterval(setinvdisplay);
        [hours,minutes,seconds,miliiseconds] = [0,0,0,0];
        getdisplay[idx].innerHTML = "00 : 00 : 00 : 000";

    }else {
        clearInterval(setinvdisplay);
        miliiseconds = "00";
        seconds = "00";
        getdlpmlsec.innerHTML = miliiseconds;
        getdlpsec.innerHTML = seconds;

    }
}

function showdisplay(){

    if(idx === 0){

        miliiseconds += 10;

        if(miliiseconds === 1000){
            miliiseconds = 0;
            seconds++;

            if(seconds === 60){
                seconds = 0;

                minutes++;

                if(minutes === 60){
                    minutes = 0;
                    hours++;

                    if(hours === 24){
                        hours = 0;
                    }

                }

            }

        }

        // console.log(miliiseconds);
        // console.log('seconds',seconds);
        // console.log('minutes',minutes);
        // console.log('hours',hours);

        let h = hours < 10 ? '0'+hours :hours;
        let m = minutes < 10 ? '0'+minutes : minutes;
        let s = seconds < 10 ? '0'+seconds : seconds;
        let ms = miliiseconds < 10 ? "00"+miliiseconds : miliiseconds < 100 ? "0"+miliiseconds : miliiseconds ;

        getdisplay[idx].innerHTML = `${h} : ${m} : ${s} : ${ms} `;


    }else {
        miliiseconds++;


        if(miliiseconds <= 9 ){
            getdlpmlsec.innerHTML = "+"+miliiseconds;
        }

        if(miliiseconds > 9){
            getdlpmlsec.innerHTML = miliiseconds;
        }

        if(miliiseconds > 99){
            miliiseconds = 0;
            seconds++;
            getdlpmlsec.innerHTML = "0" + 0;
            getdlpsec.innerHTML = "0"+seconds;
        }
    }

}

// 17SW