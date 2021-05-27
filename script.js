let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn')
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function()
{
    let move = window.scrollY;
    stars.style.left = move * 0.25 + 'px';
    moon.style.top = move * 1.05 + 'px';
    mountains_behind.style.top = move * 0.5 + 'px';
    mountains_front.style.top = move * 0 + 'px';
    text.style.marginRight = move * 4 + 'px';
    text.style.marginTop = move * 1.5 + 'px';
    btn.style.marginTop = move * 1.5 + 'px';
    header.style.Top = move * 1.5 + 'px';
})