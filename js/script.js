let accent = document.getElementsByClassName('accent')[0];
let accent2 = document.getElementsByClassName('accent')[1];
let white = document.getElementById('white');
let black = document.getElementById('black');
let red = document.getElementById('red');
let cta = document.getElementsByClassName('cta-primary')[0];

white.addEventListener('mouseover', () => {
    accent.style.backgroundColor = 'var(--accent-white)';
    cta.style.backgroundColor = 'var(--accent-black-alt)';
    accent2.style.color = 'var(--accent-white-alt)';
    });

black.addEventListener('mouseover', () => {
    accent.style.backgroundColor = 'var(--accent-black)';
    cta.style.backgroundColor = 'var(--accent-black)';
    accent2.style.color = 'var(--accent-black-alt)';
}
);

red.addEventListener('mouseenter', () => {
    accent.style.backgroundColor = 'var(--accent-red)';
    cta.style.backgroundColor = 'var(--accent-red)';
    accent2.style.color = 'var(--accent-red-alt)';
}
);