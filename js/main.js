// main.js

//header_scroll
const header = document.querySelector('header')

window.addEventListener('scroll', scrollEvent)
let lastScrollY = 0;
function scrollEvent(event){
   if(window.scrollY > lastScrollY){
      header.classList.add("hide")
   }else {
      header.classList.remove("hide")
   }
   lastScrollY = window.scrollY;
}

// header_gnb
const gnbOpenBtn = document.querySelector('.gnb_btn');
const gnbBtnIcon = document.querySelector('.gnb_btn i');
const gnb = document.querySelector('.gnb');
const logo = document.querySelector('.logo_wrap a')


let isOpen = false;

gnbOpenBtn.addEventListener('click', function() {
   if (isOpen) {
      gnbBtnIcon.className = 'ri-menu-line';
      gnb.style.display = 'none';
      gnbOpenBtn.style.color = '#000'
      logo.style.backgroundImage = 'url(./images/ob_logo_black.png)'
      document.querySelector('html').style.overflow = 'visible'
   } else {
      gnbBtnIcon.className = 'ri-close-line';
      gnb.style.display = 'flex';
      gnbOpenBtn.style.color = '#fff'
      logo.style.backgroundImage = 'url(./images/ob_logo_white.png)'
      document.querySelector('html').style.overflow = 'hidden'
   }
   isOpen = !isOpen;
});


//brands
const brandsLinkWrap = document.querySelectorAll('.brands_link_wrap');

brandsLinkWrap.forEach((wrap) => {
   const brandLinks = wrap.querySelectorAll('.brands_link');
   const brandImages = document.querySelectorAll('.brands_img_box');

   brandLinks[0].classList.add('active');
   brandImages[0].classList.add('active');

   brandLinks.forEach((link, index) => {
      link.addEventListener('mouseover', () => {
         brandImages.forEach(img => {
            img.classList.remove('active');
            img.style.display = 'none';
         });
         brandLinks.forEach(link => link.classList.remove('active'));
         brandImages[index].style.display = 'flex';
         setTimeout(() => {
            brandImages[index].classList.add('active');
         }, 10);
         brandLinks[index].classList.add('active');
      });

      link.addEventListener('mouseout', () => {
         brandImages[index].classList.remove('active');
         brandLinks[index].classList.remove('active');
         brandImages[0].style.display = 'flex';
         setTimeout(() => {
            brandImages[0].classList.add('active');
         }, 10);
         brandLinks[0].classList.add('active');
      });
   });
});


//news
const newsBoxes = document.querySelectorAll('.news_img_box');

newsBoxes.forEach(box => {
   box.addEventListener('mouseover', () => {
      const img = box.querySelector('img');
      img.style.transform = 'scale(1.2)';

      const newsText = box.closest('.news_contents').querySelector('strong');
      newsText.style.textDecoration = 'underline';
      newsText.style.textUnderlineOffset = '5px'
   });

   box.addEventListener('mouseout', () => {
      const img = box.querySelector('img');
      img.style.transform = 'scale(1)';

      const newsText = box.closest('.news_contents').querySelector('strong');
      newsText.style.textDecoration = 'none';
   });
});

//family_site
const familyBtn = document.querySelector('.family_wrap button')
const familyIcon =document.querySelector('.family_wrap button > i')
const familyList = document.querySelector('.family_wrap ul')

familyBtn.addEventListener('click', function() {
   familyList.classList.toggle('open');

   if (familyList.classList.contains('open')) {
      familyIcon.style.transform = 'rotate(180deg)';
   } else {
      familyIcon.style.transform = 'rotate(0deg)';
   }
});



// 스와이퍼
const adSwiper = new Swiper('.ad_swiper', {
   direction: 'horizontal',
   loop: true,
   scrollbar: {
      draggable: true,
   },
   autoplay: {
      delay: 1500
   }
});



//스크롤트리거
gsap.registerPlugin(ScrollTrigger);

gsap.to('.main_visual_video', {
   scrollTrigger: {
      trigger: '.main_visual_video',
      start: 'top top',
      pin: true,
      pinSpacing: false,
   }
})

gsap.to('.slogan_title', {
   opacity: 1,
   transform: 'scale(1)',
   scrollTrigger: {
      trigger: '.main_visual_text',
      start: 'top top',
      pin: true
   }
})

const aboutOne = gsap.timeline()
aboutOne.to('.about_1', {
   borderRadius : 0,
   width: '100%',
   height: '100%',
})
aboutOne.to('.about_text_1', {
   opacity: 1,
})
aboutOne.to('.underline_1', {
   width: '100%'
})
ScrollTrigger.create({
   animation: aboutOne,
   trigger: ".about_1",
   start: '-10% top',
   end: "+=50%",
   scrub: true,
   pin: '.about_ob',
})

const aboutTwo = gsap.timeline()
aboutTwo.to('.about_2', {
   borderRadius : 0,
   width: '100%',
   height: '100%',
})
aboutTwo.to('.about_text_2', {
   opacity: 1,
})
aboutTwo.to('.underline_2', {
   width: '100%'
})
ScrollTrigger.create({
   animation: aboutTwo,
   trigger: ".about_2",
   start: '50% top',
   end: "+=50%",
   scrub: true,
   pin: '.about_ob',
})
const aboutThree = gsap.timeline()
aboutThree.to('.about_3', {
   borderRadius : 0,
   width: '100%',
   height: '100%',
})
aboutThree.to('.about_text_3', {
   opacity: 1,
})
aboutThree.to('.underline_3', {
   width: '100%'
})
ScrollTrigger.create({
   animation: aboutThree,
   trigger: ".about_3",
   start: '100% top',
   end: "+=50%",
   scrub: true,
   pin: '.about_ob',
})

gsap.to('.news', {
   scrollTrigger: {
      trigger: '.news',
      start: 'top top',
      pin: true,
      pinSpacing: false,
   }
})


const slides = document.querySelectorAll('.esg_content');
const totalSlides = slides.length;

const esg = gsap.timeline({
   scrollTrigger: {
      trigger: '.esg',
      start: 'top top',
      end: '+=300%',
      scrub: true,
      pin: true,
   }
})

slides.forEach((slide, index) => {
   if (index < totalSlides - 1) {
   esg.to(slide, {
      x: '-100vw',
      duration: 0.5,
      ease: 'power1.inOut',
   }, index * 0.5);
   } else {

   esg.to(slide, {
      x: '0',
      duration: 0,
   }, index * 0.5);
   }
});
