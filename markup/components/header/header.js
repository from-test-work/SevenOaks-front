import Swiper from 'swiper';


export default {
    init() {
        // let swiper = new Swiper('.swiper-container', {
        //     loop: true,
        //     speed: 1000,
        //     grabCursor: true,
        //     watchSlidesProgress: true,
        //     mousewheelControl: true,
        //     keyboardControl: true,
        //     navigation: {
        //         nextEl: '.swiper-button-next',
        //         prevEl: '.swiper-button-prev',
        //     },
        // });
        let interleaveOffset = 0.5;

        let swiperOptions = {
            loop: true,
            speed: 1000,
            grabCursor: true,
            watchSlidesProgress: true,
            mousewheelControl: true,
            keyboardControl: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                progress: function () {
                    let swiper = this;
                    for (let i = 0; i < swiper.slides.length; i++) {
                        let slideProgress = swiper.slides[i].progress;
                        let innerOffset = swiper.width * interleaveOffset;
                        let innerTranslate = slideProgress * innerOffset;
                        swiper.slides[i].querySelector('.slide-inner').style.transform =
                            'translate3d(' + innerTranslate + 'px, 0, 0)';
                    }
                },
                touchStart: function () {
                    let swiper = this;
                    for (let i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = '';
                    }
                },
                setTransition: function (speed) {
                    let swiper = this;
                    for (let i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = speed + 'ms';
                        swiper.slides[i].querySelector('.slide-inner').style.transition =
                            speed + 'ms';
                    }
                }
            }
        };

        let swiper = new Swiper('.swiper-container', swiperOptions);
    }
};
