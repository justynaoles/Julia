window.addEventListener('load', function(event) {
  smoothScroll();
  
  const menu = document.querySelector('.menu');
  const icon = document.querySelector('#icon');
  const nav = document.getElementById('nav');
  const topline = document.querySelector('.topline');
  const midline = document.querySelector('.midline');
  const bottline = document.querySelector('.bottline');
  const ul = document.querySelector('ul');
  const medialang = document.querySelector('.medialangbar');
  const body = document.querySelector('body');
  const img = document.querySelector('.bigmedia');
  const img1 = document.querySelector('.bigmedia1');
  
  
  icon.addEventListener('click', menuMobile);
  nav.addEventListener('click', closeMenuMobile);
  
    //hamburger menu animations/
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
  
    //closing nav after clicking on
    function closeMenuMobile() {
  
      topline.classList.remove('rotateplus');
      midline.classList.remove('hide');
      bottline.classList.remove('rotateminus');
  
      nav.classList.remove('show');
      ul.classList.remove('opacity');
      medialang.classList.toggle('opacity');
  
      menu.classList.remove('navlayer');
      body.classList.remove('noscroll');
  
    }
  
    //closing menu after resizing
      $(window).on("resize", function () {
        if ($(this).width() >= 1200) {
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
  
    //smooth scroll
    function smoothScroll(){
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1600, function(){
        
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
      
        }
  
      //owl carusel animations
      $('.owl-carousel').owlCarousel({
        loop:true,
        items:3,
        margin:10,
        nav:false,
            
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
                
            },
            801:{
                items:3
            }   
        }
    })
  
    //logo - onscroll animations
    window.addEventListener('scroll', function() {
      const logo = document.querySelector('.mobile-logo');
      const logo2 = document.querySelector('.mobile-logo2');
                      
      backToTop();
              
      logo.classList.add('unvisible');
      logo2.classList.add('visible');
           
      if (window.pageYOffset>300){
                  
      logo.style.position="absolute";
      logo.style.marginTop="300px";
          
      }
                 
      });
  
  
      //back to top animations
      function backToTop(){
        
        const back = document.querySelector('.backtotop');
        
            if (window.pageYOffset >50){
                    back.style.opacity="1";  
                }
                else  {
                     back.style.opacity="0";
                }
            }
  
  });
  