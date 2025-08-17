(function () {
    const burger = document.querySelector('.burger-icon'),
        nav = document.querySelector('.nav__list');

    burger.addEventListener('click', (e) => { document.body.classList.toggle('body--opened-menu') });

    nav.addEventListener('click', (e) => {
        if (document.documentElement.clientWidth > 900) {
            return
        }
        if (e.target.classList.contains('nav__link')) {
            document.body.classList.remove('body--opened-menu')
        }
    });

    // ==========================================================================

    new Swiper('.airmax__swiper', {
        spaceBetween: 15,
        slidesPerView: 1,

        pagination: {
            el: '.airmax__pagination'
        },

    });

    new Swiper('.slider-up__swiper', {
        spaceBetween: 30,
        slidesPerView: 1,

        navigation: {
            nextEl: '.slider-up-next',
            prevEl: '.slider-up-prev',
        },

        breakpoints: {
            600: {
                slidesPerView: 2,
            },
            1001: {
                spaceBetween: 40,
                slidesPerView: 3,
            },
            1201: {
                slidesPerView: 4
            }
        }
    });
})()