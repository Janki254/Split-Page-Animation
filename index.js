const left_split = document.querySelector('.left');
const right_split = document.querySelector('.right');

const container = document.querySelector('.container');

left_split.addEventListener('mouseenter', () =>
    container.classList.add('hover-left'),
);

left_split.addEventListener('mouseleave', () =>
    container.classList.remove('hover-left'),
);

right_split.addEventListener('mouseenter', () =>
    container.classList.add('hover-right'),
);

right_split.addEventListener('mouseleave', () =>
    container.classList.remove('hover-right'),
);
