let menuImg = document.querySelector('.menu-img-wrapper');
let modal = document.querySelector('.modal');
let fade = document.querySelector('.fade');

menuImg.addEventListener('click',() => openModal());
modal.addEventListener('click',() => openModal());

function openModal(){
    if(modal.classList.contains('open')){
        modal.classList.remove('open');
        fade.classList.remove('open');
        menuImg.classList.remove('open');
    }else{
        modal.classList.add('open');
        fade.classList.add('open');
        menuImg.classList.add('open');
    }
}
