const navSlide =() =>{
    const burger = document.querySelector(".burger");
    const nav =document.querySelector(".nav-links");
    const links = document.querySelectorAll('.nav-links li a');
    
    burger.addEventListener('click',() => {
    nav.classList.toggle('toggle');
    burger.classList.toggle('cross');
    })
    links[0].addEventListener('click',()=>{
        nav.classList.toggle('toggle');
    burger.classList.toggle('cross');
    });
    links[1].addEventListener('click',()=>{
        nav.classList.toggle('toggle');
    burger.classList.toggle('cross');
    });
    links[2].addEventListener('click',()=>{
        nav.classList.toggle('toggle');
    burger.classList.toggle('cross');
    });
};
    
    
navSlide();
    
    