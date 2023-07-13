let accent = document.getElementsByClassName('accent')[0];
let accent2 = document.getElementsByClassName('accent')[1];
let white = document.getElementById('white');
let black = document.getElementById('black');
let red = document.getElementById('red');
let cta = document.getElementsByClassName('cta-primary')[0];
let ctasecondary = document.getElementsByClassName('cta-secondary')[0];
let ctaarrow = document.getElementById('cta-arrow');
let cart_button = document.getElementById('cart');
let cart = document.getElementById('cart-overlay');
let account_button = document.getElementById('account');
let account = document.getElementById('account-overlay');
let close_cart = document.getElementById('close-cart');
let close_account = document.getElementById('close-account');

white.addEventListener('mouseover', () => {
    accent.style.backgroundColor = 'var(--accent-white)';
    cta.style.backgroundColor = 'var(--accent-white)';
    accent2.style.color = 'var(--accent-white-alt)';
}
);

black.addEventListener('mouseover', () => {
    accent.style.backgroundColor = 'var(--accent-black)';
    cta.style.backgroundColor = 'var(--accent-white-alt)';
    accent2.style.color = 'var(--accent-black-alt)';
}
);

red.addEventListener('mouseenter', () => {
    accent.style.backgroundColor = 'var(--accent-red)';
    cta.style.backgroundColor = 'var(--accent-red)';
    accent2.style.color = 'var(--accent-red-alt)';
}
);

ctasecondary.addEventListener('mouseover', () => {
    ctaarrow.style.marginLeft = '10px';
}
);

ctasecondary.addEventListener('mouseout', () => {
    ctaarrow.style.marginLeft = '0px';
}
);

cart_button.addEventListener('click', () => {
    cart.style.visibility = 'visible';
}
);

account_button.addEventListener('click', () => {
    account.style.visibility = 'visible';
}
);

close_account.addEventListener('click', () => {
    account.style.visibility = 'hidden';
    }
);

close_cart.addEventListener('click', () => {
    cart.style.visibility = 'hidden';
    }
);