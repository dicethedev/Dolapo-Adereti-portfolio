//animation code
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(hiddenElement => observer.observe(hiddenElement))
const slideRight = document.querySelectorAll('.slideRight');
slideRight.forEach(hiddenElement => observer.observe(hiddenElement))
const slideLeft = document.querySelectorAll('.slideLeft');
slideLeft.forEach(hiddenElement => observer.observe(hiddenElement))


//code for hamburger nav menu on small screens
const hamburger = document.querySelector('#hamburger');
const navPages = document.querySelector('.pages');
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')
    navPages.classList.toggle('responsive')
})