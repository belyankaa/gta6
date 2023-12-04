const close = document.getElementById('close');

const actionBlock = document.getElementById('block');
const menu = document.getElementById('menu');

const testButtons = document.getElementsByClassName('openBtn');

close.onclick = () => {
    close.style.display = 'none';
    actionBlock.classList.add('closepop');
    actionBlock.classList.remove('open');
    setTimeout(() => {
        menu.style.display = 'none';
    }, 300)
}

for (let i = 0; i < testButtons.length; i++) {
    testButtons[i].onclick = () => {
        close.style.display = 'block';
        menu.style.display = 'block';
        actionBlock.classList.remove('closepop');
        actionBlock.classList.add('open');
    }
}