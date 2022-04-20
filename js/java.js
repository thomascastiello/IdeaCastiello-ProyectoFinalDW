//botton-up-scroll

document.getElementById('button-up').addEventListener('click', scrollUp);

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (currentScroll > 0){ //condicional
        window.scrollTo (0,0);
    }
}


buttonUp = document.getElementById("button-up"); //variable

window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;

    if (scroll > 400){ // condicional
        buttonUp.style.transform = 'scale(1)'; //para que aparezca el boton
    }else if (scroll < 400){
        buttonUp.style.transform = "scale(0)"; //para que desaparezca
    }
        
}