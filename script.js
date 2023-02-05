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

const hamburger = document.querySelector('#hamburger');
const navPages = document.querySelector('.pages');
hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')
    navPages.classList.toggle('responsive')
})