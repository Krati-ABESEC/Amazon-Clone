document.addEventListener("DOMContentLoaded", () => {
      const container = document.querySelector(".box");
      const leftBtn = document.querySelector(".arrow.left");
      const rightBtn = document.querySelector(".arrow.right");

      function updateButtons() {
        leftBtn.disabled = container.scrollLeft === 0;
        rightBtn.disabled = container.scrollLeft + container.clientWidth >= container.scrollWidth;
      }

      function scrollLeft() {
        container.scrollBy({ left: -1500, behavior: "smooth" });
      }

      function scrollRight() {
        container.scrollBy({ left: 1500, behavior: "smooth" });
      }

      leftBtn.addEventListener("click", scrollLeft);
      rightBtn.addEventListener("click", scrollRight);
      container.addEventListener("scroll", updateButtons);

      updateButtons(); 
});

const S = document.querySelector('.sign');
let timer;

S.addEventListener('mouseenter', () => {
  timer = setTimeout(() => {
    S.querySelector('.popup').style.display = 'block';
  }, 200); // delay in ms
});

S.addEventListener('mouseleave', () => {
  clearTimeout(timer);
  S.querySelector('.popup').style.display = 'none';
});



const selectElement = document.querySelector('.dropdown select');

function resizeSelect() {
    
    const tempSpan = document.createElement('span');
    
    
    const selectStyle = window.getComputedStyle(selectElement);
    tempSpan.style.font = selectStyle.font;
    tempSpan.style.fontWeight = selectStyle.fontWeight;
    tempSpan.style.fontSize = selectStyle.fontSize;
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.position = 'absolute';
    
    
    tempSpan.textContent = selectElement.options[selectElement.selectedIndex].text;
    document.body.appendChild(tempSpan);
    
   
    selectElement.style.width = (tempSpan.offsetWidth + 30) + 'px';
    
   
    document.body.removeChild(tempSpan);
}


selectElement.addEventListener('change', resizeSelect);


window.addEventListener('DOMContentLoaded', resizeSelect);

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;

function showSlide(index) {
  
    slides[currentSlide].classList.remove('active');
    
  
    currentSlide = (index + slides.length) % slides.length;
    
    
    slides[currentSlide].classList.add('active');
}


nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);