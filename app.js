const navbar = document.querySelector('.navbar')
const mobileMenu = document.getElementById('menu-btn');

window.onscroll = () => {
    navbar.classList.remove('active')
}

mobileMenu.onclick = () => {
    navbar.classList.toggle('active')
}

//Slider Area

var swiper = new Swiper(".home-slider", {
    grapCursor: true,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".food-slider", {
    grapCursor: true,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
    },
});

const previewContainer = document.querySelector('.food-preview-container');
const previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food =>{
   food.onclick = () =>{
      previewContainer.style.display = 'flex';
      let name = food.getAttribute('data-name');
      previewBox.forEach(preview =>{
         let target = preview.getAttribute('data-target');
         if(name == target){
            preview.classList.add('active');
         }
      });
   };
});

previewContainer.querySelector('#close-preview').onclick = () =>{
    previewContainer.style.display = 'none';
    previewBox.forEach(close =>{
       close.classList.remove('active');
    });
};

 var swiper = new Swiper(".menu-slider", {
    grapCursor: true,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});