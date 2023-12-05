import {codes} from "./scripts/config.js";

const close = document.getElementById('close');

const actionBlock = document.getElementById('block');
const menu = document.getElementById('menu');

const testButtons = document.getElementsByClassName('openBtn');

const input = document.getElementById('input');
const checkPromoCodeButton = document.getElementById('download');
const error = document.getElementById('error');

const playerBlock = document.getElementById('video-block');
const watchButton = document.getElementById('watch');

close.onclick = () => {
    closePromoCodeSpace();
}

menu.onclick = () => {
    closePromoCodeSpace();
}

for (let i = 0; i < testButtons.length; i++) {
    testButtons[i].onclick = () => {
        openPromoCodeSpace();
    }
}

checkPromoCodeButton.onclick = () => {
    checkPromoCode(input.value);
}

watchButton.onclick = () => {
    openVideo();
}

playerBlock.onclick = () => {
    closeVideo();
}


function download(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = url.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function checkPromoCode(code) {
    error.style.display = 'none';
    const index = codes.findIndex(item => item.code === code);

    input.value = '';

    if (index === -1) {
        error.style.display = 'block';
        return;
    }

    closePromoCodeSpace();
    download(codes[index].url);
}

function openPromoCodeSpace() {
    close.style.display = 'block';
    menu.style.display = 'block';
    actionBlock.classList.remove('closepop');
    actionBlock.classList.add('open');
}

function closePromoCodeSpace() {
    close.style.display = 'none';
    actionBlock.classList.add('closepop');
    actionBlock.classList.remove('open');
    setTimeout(() => {
        menu.style.display = 'none';
    }, 300)
}

function openVideo() {
    playerBlock.style.display = 'block';
    playerBlock.style.opacity = '1';
}

function closeVideo() {
    playerBlock.style.opacity = '0';
    setTimeout(() => {
        playerBlock.style.display = 'none';
    }, 300)
}