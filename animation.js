//Code for Sticky NavBar
window.addEventListener("scroll",function(){
    var header = document.querySelector('.header');
    header.classList.toggle("sticky", window.scrollY > 100);
    
    });
    
    // Code for toggle navbar menu icons from humberger to cross and vise versa
    const mobIcons= document.querySelector('.mb-icons');
    var header = document.querySelector('.header');
    var websiteContainer = document.querySelector('#website-container');
    const toggleNavbar = () =>{
    header.classList.toggle('active');
    
    }
    mobIcons.addEventListener('click',() => toggleNavbar());
    
    // document.onclick = function(e){
    //   if(e.target.classList != '.header'){
    //     header.classList.remove('active');
    //   }
    // }
    
    //Code for Active classes
    let section = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll("header nav a");
    window.onscroll = () =>{
    section.forEach(sec =>{
    let top = window.scrollY;
    let offSet = sec.offsetTop -100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if(top >= offSet && top < offSet + height){
        navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    };
    
    });
    };
    
    
        var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        });
      
      
     
    
    
    
    // const activePage = window.location.pathname;
    // const navLinks = document.querySelectorAll("nav a").forEach(link => {
    // if(link.href.includes(`${activePage}`)){
    //     console.log(`${activePage}`);
    // }
    // });
    
    // const section_hero = document.querySelector('.container-banner');
    // const observer = new IntersectionObserver(() => {
    // alert("hello");
    // },
    // {
    // root: null,
    // rootMargin: "",
    // threshold: 0
    // }
    // );
    // observer.observe(section_hero);