const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){ //blur 포커스가 제거되면
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});



const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

/* 구글에 lodash cdn 검색 - cdn main.js위에 html에 붙여넣기 - throttle사용가능*/
/** _.throttle(사용하려는함수, 시간) */
window.addEventListener('scroll', _.throttle(function(){
    // console.log(window.scrollY);
    if(window.scrollY > 500){ /* 스크롤 될때마다 window라는 객체부분에 있는 scrollY라는 부분의 값이 그때그때 갱신됨, 위에서부터 몇px지점에 있는지 파악 가능 */
        // badgeEl.style.display = 'none';
        // gsap.to(요소,지속시간,옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        //top보이게
        gsap.to(toTopEl, .2, {
            x: 0
        });
    }else{
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        //top숨기게
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}, 300)); /** 300 = 0.3초 */


toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0
    });
});



const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: index * .7, /* index * 순차 = .7초에 하나씩 나타남 */
        opacity: 1
    });
});


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true, // 자동재생
    loop: true
});

new Swiper('.promotion .swiper-container',{
    slidesPerView: 3, // 한번에 보여줄 슬라이드 갯수
    spaceBetween: 10, // 슬랄이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true, // 반복재생
    autoplay: {
        delay: 5000//기본값이 3000, = 3초
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자 (el속성 : 페이지 번호 사용하게)
        clickable: true, //사용자의 페이지 번호 요소 제어
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});
new Swiper('.awards .swiper-container',{
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHdiePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
    isHdiePromotion = !isHdiePromotion //느낌표 붙이면 반대값, 반대값을 넣어준것
    if (isHdiePromotion){ //처음엔 true값이 들어오면, 숨김처리
        promotionEl.classList.add('hide');
    }else{ //보임처리
        promotionEl.classList.remove('hide');
    }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
    gsap.to( //선택자를 받을건데
        selector, //선택자
        random(1.5, 2.5), //애니메이션 동작시간
        { //옵션
            y: size,
            repeat: -1, //-1 무한반복
            yoyo: true, //한번재생된걸 뒤로재생
            //gsap easing - https://greensock.com/docs/v2/Easing
            ease: Power1.easeInOut,
            delay: random(0, delay)
        }
    );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl){
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐 여부를 감시할 요소
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();