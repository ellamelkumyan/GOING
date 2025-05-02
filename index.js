document.querySelector('.deals__prev-btn').addEventListener('click', () => {
    document.querySelector('.deals__wrapper').scrollBy({ left: -400, behavior: 'smooth' });
});

document.querySelector('.deals__next-btn').addEventListener('click', () => {
    document.querySelector('.deals__wrapper').scrollBy({ left: 400, behavior: 'smooth' });
});

document.querySelector('.reviews__prev-btn').addEventListener('click', () => {
    document.querySelector('.reviews__wrapper').scrollBy({ left: -356, behavior: 'smooth' });
});

document.querySelector('.reviews__next-btn').addEventListener('click', () => {
    document.querySelector('.reviews__wrapper').scrollBy({ left: 356, behavior: 'smooth' });
});