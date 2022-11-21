const getbox = document.querySelector('.box');
const getbtns = document.querySelector('.btns');
var getboxtitle = document.getElementById('boxtitle');


getbox.addEventListener('click',function (e){
    getbtns.classList.toggle('show');

    // console.log(e.target);
    smallmenu(e.target);


});

dragme(getbox);

    var getcx,getcy,setcx,setcy;

function dragme(getele){
    // console.log(getele);

    //design 1
    // getele.onmousedown = getmousedown;

    if(getele){
        getboxtitle.onmousedown = getmousedown;
    }

    function getmousedown(e){
        // console.log("i am working");

        getcx = e.clientX;
        getcy = e.clientY;
        // console.log(getcx,getcy);

        document.onmousemove = dragme;

        document.onmouseup = stopdragme;

        // console.log('step 1 ' , getcx,getcy);
    }

    function dragme(e){
        // console.log(e.target);
        
        setcx = getcx - e.clientX;    //step 3
        setcy = getcy - e.clientY;
        // console.log(getcx,setcx);
        // console.log(getcy,setcy);

        //result for new pin position
        getcx = e.clientX;  //step 4 overwrite
        getcy = e.clientY;

        // console.log('step 2',getcx,getcy);

        var btnleft = getele.offsetLeft;  //step 3
        var btntop = getele.offsetTop;

        console.log(btnleft,btntop);

        getele.style.left = (btnleft-setcx) + "px";
        getele.style.top = (btntop-setcy) + "px";

        // console.log(btnleft-setcx,btntop-setcy);

        // getbtns.classList.remove('show');
    }

    function stopdragme(){   //step 2
        document.onmousemove = null;
        document.onmouseup = null;
    }

}

function smallmenu(icobox){

    if(icobox.classList.contains('btn-icon')){
        console.log('yes');
    }else{
        console.log('no');
    }

}