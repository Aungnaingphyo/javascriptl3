var gettextarea = document.getElementById('textarea');



function boldfun(){
    gettextarea.style.fontWeight = 'bold';
}

function italicfun(){
    gettextarea.style.fontStyle = 'italic';
}

function underlinefun(){
    gettextarea.style.textDecoration = 'underline';
}

function lalgfun(){
    gettextarea.style.textAlign = 'left';
}

function calgfun(){
    gettextarea.style.textAlign = 'center';
}
function ralgfun(){
    gettextarea.style.textAlign = 'center';
}
function upcasefun(){
    gettextarea.style.textTransform = 'uppercase';
}
function lowercasefun(){
    gettextarea.style.textTransform = 'lowercase';
}
function capcasefun(){
    gettextarea.style.textTransform = 'capitalize';
}
function clearfun(){
    gettextarea.style.fontWeight = 'normal';
    gettextarea.style.fontStyle = 'normal';
    gettextarea.style.textDecoration= "normal";
    gettextarea.style.textAlign = "left";
    gettextarea.value = '';

}
