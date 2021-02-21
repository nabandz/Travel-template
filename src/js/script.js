//Sliders
let slider = {
    items: 3,
    slideBy: 1,
    speed: 800,
    autoplay: false,
    controls: false,
    gutter: 35,
    nav: false,
    autoWidth: true,
    mouseDrag: true,
}

slider.container = '.photos__slider-1';
const photosSlider_1 = tns(slider);

slider.container = '.photos__slider-2';
const photosSlider_2 = tns(slider);

slider.container = '.photos__slider-3';
const photosSlider_3 = tns(slider);

//Clicks
let clicks = 1;

function onClickNext() {
    if (clicks < 5) {
        clicks += 1;
        document.getElementById("photos__click").innerHTML = clicks;
    }
};

function onClickPrev() {
    if (clicks > 1) {
        clicks -= 1;
        document.getElementById("photos__click").innerHTML = clicks;
    }
};

//Result
document.querySelector('.button_photos-prev').addEventListener ('click', function () {
    if (clicks > 1) {
        photosSlider_1.goTo('prev');
        photosSlider_2.goTo('next');
        photosSlider_3.goTo('prev');
    }
    onClickPrev();
});

document.querySelector('.button_photos-next').addEventListener ('click', function () {
    if (clicks < 5) {
        photosSlider_1.goTo('next');
        photosSlider_2.goTo('prev');
        photosSlider_3.goTo('next');
    }
    onClickNext();
});
