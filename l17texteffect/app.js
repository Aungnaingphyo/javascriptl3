const languages =["Nodejs","Reactjs","Vuejs","Laraval"];
const colors = ["red","skyblue","violet","yellow"];
const gettxtani = document.querySelector('.txtani');

// console.log(languages);
// console.log(languages[0]);  //give index take value
// console.log(languages[1]);
// console.log(languages[2]);
// console.log(languages[3]);

// console.log(languages.indexOf('Reactjs'));
// console.log(languages.indexOf('Laravel'));

// console.log(colors[languages.indexOf("Reactjs")]);
// console.log(colors[languages.indexOf("Vuejs")]);


function* generator(){
    var idx = 0;

    while(true){

        yield idx++;

        if(idx > 3 ){
            idx = 0;
        }

    }

}

// const textnumber =generator();
// console.log(textnumber.next());
// console.log(textnumber.next().value);    //{value: 1, done: false}
// console.log(textnumber.next().value);
// console.log(textnumber.next().value);
// console.log(textnumber.next().value);
// console.log(textnumber.next().value);
// console.log(textnumber.next().value);


function showwords(word){
    // console.log(word);

    let x =0;

    gettxtani.innerHTML = ''
    gettxtani.classList.add(colors[languages.indexOf(word)]);


    let showintval = setInterval(function(){

        // gettxtani.innerHTML = word[0]
        // gettxtani.innerHTML = word[1]

        if(x >= word.length){
            clearInterval(showintval);
            deletewords();
        }else{
            gettxtani.innerHTML += word[x]
            x++;
        }


    },500)

}

function deletewords(){

    let getword = gettxtani.innerHTML;
    // console.log(getword);

    let getlastidx = getword.length - 1;
    // console.log(getlastidx);

    let delintval =setInterval(function(){

        if(getlastidx >= 0){
            gettxtani.innerHTML = gettxtani.innerHTML.substring(0,gettxtani.innerHTML.length - 1);
            getlastidx--;
        }else{

            gettxtani.classList.remove(colors[languages.indexOf(getword)])
            showwords(languages[gen.next().value]);
            clearInterval(delintval);
        }

    },400);


}

let gen = generator();
showwords(languages[gen.next().value]);

// showwords(languages[0]);


































// Generator Function

// function* genfun(){
//     yield 1;
//     yield 2;
//     yield 3;

// }

// const getgen = genfun();

// console.log(getgen.next().value);   //1
// console.log(getgen.next().value);   //2
// console.log(getgen.next().value);   //3
// console.log(getgen.next().value);   //underfined
// console.log(getgen.next().value);   //underfined


// console.log(getgen.next());         //{value: 1, done: false}
// console.log(getgen.next().value);   //2
// console.log(getgen.next().value);   //3
// console.log(getgen.next().value);   //underfined

// function abc(){
//     return 1;
//     return 2;
//     return 3;

// }

// const ab = abc();
// console.log(ab);
// console.log(ab);
// console.log(ab);
// yield
// next()