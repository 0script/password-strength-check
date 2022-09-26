const background=document.querySelector('div#background');
const input=document.querySelector('input#password');

let strength=0;


input.addEventListener('input',()=>{

    let password=input.value;

    strength=[
        password.length>8?true:false,
        password.match(/[a-z]+/)?true:false,
        password.match(/[A-Z]+/)?true:false,
        password.match(/[0-9]+/)?true:false,
        password.match(/[$@#&!]+/)?true:false
    ];

    let truecount=strength.filter(x => x === true).length;

    background.style.filter=`blur(${20-4*truecount}px)`;


});

