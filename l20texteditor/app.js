var gettextarea = document.getElementById('textarea');
var getdivvarea = document.getElementById('divarea');

getdivvarea.contentEditable = true;
getdivvarea.spellcheck = false;

var getbtns = document.querySelectorAll('.btn');

getbtns.forEach(function (getbtn){
    getbtn.addEventListener('click',function (){
        var getcommand = getbtn.dataset['command'];
        // console.log(getcommand);

        if(getcommand === "cleartext"){
            getdivvarea.innerHTML = '';
        }else if(getcommand === 'createLink' || getcommand === 'insertImage'){
            let geturl = prompt("Enter Your website link","https://");
            document.execCommand(getcommand,false,geturl);
        }else if(getcommand === 'foreColor'){
            document.execCommand(getcommand,false,getbtn.value);
        }else if(getcommand === "backColor"){
            document.execCommand(getcommand,false,getbtn.value);
        }else if(getcommand === 'fontName'){
            document.execCommand(getcommand,false,getbtn.value)
        }else if(getcommand === "paste"){
            navigator.clipboard.readText().then(function (cliptext){
                // console.log(cliptext);
                getdivvarea.innerHTML += cliptext;
            });
        }else{
            document.execCommand(getcommand,false,null);
        }

    });
});

// function boldfun(){
//     gettextarea.style.fontWeight = 'bold';
// }
//
// function italicfun(){
//     gettextarea.style.fontStyle = 'italic';
// }
//
// function underlinefun(){
//     gettextarea.style.textDecoration = 'underline';
// }
//
// function lalgfun(){
//     gettextarea.style.textAlign = 'left';
// }
//
// function calgfun(){
//     gettextarea.style.textAlign = 'center';
// }
// function ralgfun(){
//     gettextarea.style.textAlign = 'center';
// }
// function upcasefun(){
//     gettextarea.style.textTransform = 'uppercase';
// }
// function lowercasefun(){
//     gettextarea.style.textTransform = 'lowercase';
// }
// function capcasefun(){
//     gettextarea.style.textTransform = 'capitalize';
// }
// function clearfun(){
//     gettextarea.style.fontWeight = 'normal';
//     gettextarea.style.fontStyle = 'normal';
//     gettextarea.style.textDecoration= "normal";
//     gettextarea.style.textAlign = "left";
//     gettextarea.value = '';
//
// }




//                          Boolean
// execCommand(aCommandName,aShowDefaultUI,aValueArgument)