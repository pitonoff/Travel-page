let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});
document.querySelector("#submit").onclick = function(){
    let a = document.getElementById("mail");
    let b = document.getElementById("password");
    let c = a.value + "    " + b.value;
    alert("login and pass snatched:  "+ c);
}

let hamb = document.querySelector(".hamb");
let navMenu = document.querySelector(".mobile__menulist");

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamb.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamb.classList.remove("active");
  navMenu.classList.remove("active");
}

const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    slides[n].classList.add('active');
}
const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if(index == slides.length -1) {
        index = 0;
        prepareCurrentSlide(index)
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if(index ==  0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}


dots.forEach ((item, indexDot) => {
      item.addEventListener('click', () => {
         index = indexDot;
      })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(nextSlide, 2500);