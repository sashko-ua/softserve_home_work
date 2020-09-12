'use strict';

const imagesData = [
    'https://wallpapers.net/clear-road-nature/download/800x480.jpg',
    'https://www.setaswall.com/wp-content/uploads/2018/05/Mountains-In-The-Summer-Wallpaper-800x480.jpg',
    'https://img3.goodfon.ru/original/800x480/5/b7/siluet-chelovek-meditaciya.jpg',
    'https://img5.goodfon.ru/original/800x480/7/e6/pole-leto-groza.jpg'
];

const dom = {
    btnNext: document.querySelector('.btn-next'),
    btnPrev: document.querySelector('.btn-prev'),
    imgContainer: document.querySelector('.images'),
    cur: 0,
    // imgHeight: 480,
    imgWidth: 800,
};


dom.imgContainer.innerHTML = imagesData.map(url => `<img src="${url}" alt="slider image">`).join(''); //join?

dom.btnNext.addEventListener('click', () => changeImage());
dom.btnPrev.addEventListener('click', () => changeImage('prev'));

function changeImage(dir = 'next') {
    if (dir == 'next') {
        dom.cur++;
        if (dom.cur >= imagesData.length) {
            dom.cur = 0;
        }
    } else {
        dom.cur--;
        if (dom.cur < 0) {
            dom.cur = imagesData.length - 1;
        }
    }

    // dom.imgContainer.style.top = -1 * dom.imgHeight * dom.cur + 'px';
    dom.imgContainer.style.left = -1 * dom.imgWidth * dom.cur + 'px';
    dom.btnNext.innerText = `${dom.cur + 1} : Next`;
    dom.btnPrev.innerText = `${dom.cur + 1} : Prev`;
}