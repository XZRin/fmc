window.onscroll = function(){

    scroll = document.documentElement.scrollTop;

    header = document.getElementsById("header");

    if (scroll > 20){
        header.classList.add('nav_mod');
    }else if(scroll < 20){
        header.classList.remove('nav_mod'); 
    }

}