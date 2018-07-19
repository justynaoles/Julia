/*function logoAnimation - Funkcja dodaje animacje do logo: białe logo zanika i pojawia się kolorowe nad sekcją about me */

/*function backtotop - Funkcja dodaje przycisk dla szerokości < 1200px, czarny po prawej stronie - powrót na górę. */


window.onscroll = function logoAnimation() {
var logo = document.querySelector('.mobile-logo');
var logo2 = document.querySelector('.mobile-logo2');
                
backToTop();
        
logo.classList.add('unvisible');
logo2.classList.add('visible');
     
if (window.pageYOffset>200){
            
logo.style.position="absolute";
    
}
           
}
            
         
function backToTop(){
      
var back = document.querySelector('.backtotop');

    if (window.pageYOffset >50){
            back.style.opacity="1";  
        }
        else  {
             back.style.opacity="0";
        }
    }


/* Pierwsza wersja ze scrollY ale IE miał problemy stąd zamiana na pageYOffset

window.onscroll = function logoAnimation() {
var logo = document.querySelector('.mobile-logo');
var logo2 = document.querySelector('.mobile-logo2');
                
backToTop();
        
logo.classList.add('unvisible');

     
if (scrollY>350){
            
logo.style.position="absolute";
    logo2.classList.add('visible');
}
           
}
            
         
function backToTop(){
      
var back = document.querySelector('.backtotop');

    if (window.scrollY >50){
            back.style.opacity="1";  
        }
        else  {
             back.style.opacity="0";
        }
    }*/