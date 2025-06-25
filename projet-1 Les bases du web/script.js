document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', e => {
        e.currentTarget.classList.toggle('open');
    });
});

const slider = document.querySelector('.slider-content');
const nbLanguages = document.querySelectorAll('.slider-content .card').length;

let i = 0;
let changeInProgress = false;
setInterval(() => {
    if(changeInProgress) {
        changeInProgress = false;
        return ;
    }
    let nbDisplayedLanguages = window.innerWidth > 768 ? 4 : 2;
    i = (i < nbLanguages - nbDisplayedLanguages) ? i+1 : 0;

    slider.style.transform = 'translateX(-' + (248 * i) + 'px)';
}, 2000);

document.querySelector('#left').addEventListener('click', () => {
    changeInProgress = true;
    let nbDisplayedLanguages = window.innerWidth > 768 ? 4 : 2;
    i = i > 0 ? i - 1 : (nbLanguages - nbDisplayedLanguages);
    slider.style.transform = 'translateX(-' + (248 * i) + 'px)';
});

document.querySelector('#right').addEventListener('click', () => {
    changeInProgress = true;
    let nbDisplayedLanguages = window.innerWidth > 768 ? 4 : 2;
    i = (i < nbLanguages - nbDisplayedLanguages) ? i+1 : 0;
    slider.style.transform = 'translateX(-' + (248 * i) + 'px)';
});