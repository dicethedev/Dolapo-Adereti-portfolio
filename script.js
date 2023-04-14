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

// @note - Hero_title Aniamtion Typing magic functionality code 

/* @note - The JavaScript code defines an array of objects, 
  * each containing a text property with the word to be typed, 
  * and a color property with the color of the word. The type function
  * is similar to before, but it now wraps each letter of the word in
  * a span element with a color style that matches the color property 
  * of the current word object. This way, each word will have its own unique color.
  * You can add as many words and colors to the words array as you like, and 
  * the animation will cycle through them in order. You can also modify the 
  * timing and behavior of the animation by changing the setTimeout intervals 
  * and animation properties in the CSS code.
*/
const animationText = document.querySelector('.animation-text');
const words = [
  { text: 'a Product Designer', color: '#FFFFFF' },
  { text: 'an explorer', color: '#C192FF' },
  { text: 'an art aficionado', color: '#FF97C9' },
];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    animationText.innerHTML = `<span style="color:${currentWord.color}">${currentWord.text.substring(0, letterIndex-1)}</span>`;
    letterIndex--;
  } else {
    animationText.innerHTML = `<span style="color:${currentWord.color}">${currentWord.text.substring(0, letterIndex+1)}</span>`;
    letterIndex++;
  }

  if (!isDeleting && letterIndex === currentWord.text.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex++;
    setTimeout(type, 500);
  } else {
    setTimeout(type, 100);
  }

  if (wordIndex === words.length) {
    wordIndex = 0;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
});


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