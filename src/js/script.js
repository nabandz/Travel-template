const slider_photos_1 = tns({
    container: '.photos__img_1',
    items: 3,
    slideBy: 1,
    speed: 800,
    autoplay: false,
    controls: false,
    gutter: 35,
    nav: false,
    autoWidth: true,
});

const slider_photos_2 = tns({
    container: '.photos__img_2',
    items: 3,
    slideBy: 1,
    speed: 800,
    autoplay: false,
    controls: false,
    gutter: 35,
    nav: false,
    autoWidth: true,
});

const slider_photos_3 = tns({
    container: '.photos__img_3',
    items: 3,
    slideBy: 1,
    speed: 800,
    autoplay: false,
    controls: false,
    gutter: 35,
    nav: false,
    autoWidth: true,
});

/* let p1 = {
    container: '.photos__img_1',
    items: 3,
    slideBy: 1,
    speed: 800,
    autoplay: false,
    controls: false,
    gutter: 35,
    nav: false,
    autoWidth: true,
}

const slider_photos_1 = tns(p1); */

document.querySelector('.button_photos-prev').addEventListener ('click', function () {
    slider_photos_1.goTo('prev');
    slider_photos_2.goTo('next');
    slider_photos_3.goTo('prev');
});

document.querySelector('.button_photos-next').addEventListener ('click', function () {
    slider_photos_1.goTo('next');
    slider_photos_2.goTo('prev');
    slider_photos_3.goTo('next');
});
