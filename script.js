function changeHeaderColor() {
    const header = document.querySelector('header');
    const currentColor = header.style.backgroundColor;
    const newColor = currentColor === 'rgb(0, 51, 102)' ? '#ff9900' : '#003366';
    header.style.backgroundColor = newColor;
}

const header = document.querySelector('header');
header.addEventListener('click', changeHeaderColor);
