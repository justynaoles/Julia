    var menu = document.querySelector('.menu');
    var icon = document.getElementById('icon')
    var nav = document.getElementById('nav');
   
    var topline = document.querySelector('.topline');
    var midline = document.querySelector('.midline');
    var bottline = document.querySelector('.bottline');
    var ul = document.querySelector('ul');
    var medialang = document.querySelector('.medialangbar');
    var body = document.querySelector('body');


   
   
/*po kliknięciu w ikonę hamburgera otwiera się nav ze swoją zawartością na 100% height, towarzyszą temu animacje*/

  function menuMobile() {
      
  topline.classList.toggle('rotateplus');
  midline.classList.toggle('hide');
  bottline.classList.toggle('rotateminus');
  
  nav.classList.toggle('show');
  ul.classList.toggle('opacity');
  medialang.classList.toggle('opacity')

  menu.classList.toggle('navlayer');
  body.classList.toggle('noscroll');
 
   
}

  function CloseMenuMobile() {
      
  topline.classList.remove('rotateplus');
  midline.classList.remove('hide');
  bottline.classList.remove('rotateminus');
        
  nav.classList.remove('show');
  ul.classList.remove('opacity');
  medialang.classList.toggle('opacity');

  menu.classList.remove('navlayer');
  body.classList.remove('noscroll');
      
 
   
}



icon.onclick = menuMobile;
nav.onclick = CloseMenuMobile;

/*poniższa funkcja sprawi, że gdy rozszerzam okno moje mobile menu zawsze się zamknie*/

var img = document.querySelector('.bigmedia');  /*to służy do tego aby nie wyświetlały się wszystkie zdjęcia w galerii dla małych rozdzielczości. CSS nie wystarczy sam i jego "display none", bo skrypt lightbox leci po atrybutach i co ma atrybut data-lightbox to wyświetla, dlatego atrybut trzeba dodawać/usuwać w zależności od szerokości -> do poprawy i nauki bo to awaryjne rozwiązanie dla małej ilości elementów*/
var img1 = document.querySelector('.bigmedia1');

$(function(){
   $(window).bind("resize",function(){
    if($(this).width() >=1200){
      $('body').removeClass('noscroll');
        topline.classList.remove('rotateplus');
        midline.classList.remove('hide');
        bottline.classList.remove('rotateminus');    
        nav.classList.remove('show');
        ul.classList.remove('opacity');
        menu.classList.remove('navlayer');
        img.setAttribute('data-lightbox', 'mygallery');
        img1.setAttribute('data-lightbox', 'mygallery');
    

    } else {
    
        img.removeAttribute('data-lightbox');
        img1.removeAttribute('data-lightbox');
    
    }
   
   }).resize();
});








/*po wybraniu linku, nav się zamyka (height:0%), scrollowanie jest ponownie dostępne, użytkownik jest międzyczasie prowadzony do wybranego linku

function removeNoScroll(){
    
  topline.classList.toggle('rotateplus');
  midline.classList.toggle('hide');
  bottline.classList.toggle('rotateminus'); 
  nav.classList.toggle('show');
  ul.classList.toggle('opacity');
  blue.classList.toggle('slide');
  menu.classList.toggle('navlayer'); 
  body.classList.remove('noscroll');
    

}

*/




/*


$(function(){
   $(window).bind("resize",function(){
    if($(this).width() >=900){
      $('body').removeClass('noscroll')
    }
   
   }).resize();
});




$(function(){
   $(window).bind("resize",function(){
    if($(this).width() >=900){
      $('nav').removeClass('test')
    }
       
       else
           {
      $('nav').addClass('test')
    }
   
   }).resize();
});

*/

/*

nav.onclick=navMenuColapse;


for (i = 0; i < li.length; ++i) {
  li[i].onclick = navMenuColapse;}




function navMenuColapse(){ 
    
    
  topline.classList.toggle('rotateplus');
  midline.classList.toggle('hide');
  bottline.classList.toggle('rotateminus');
  nav.classList.toggle('show');
  ul.classList.toggle('opacity');
  blue.classList.toggle('slide');
  menu.classList.toggle('navlayer');
    body.classList.toggle('noscroll');
}
*/