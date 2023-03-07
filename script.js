
const books = document.querySelectorAll(".book");
[...books].map(book => {
    const cover = book.querySelector('.cover');
    const coverIcon = book.querySelector('.cover-icon');
    const coverTitle = book.querySelector('.cover-title');

    const patternElement = document.createElement('div');
    const iconElement = document.createElement('div');

    const title = cover.dataset.title;
    const svg = cover.dataset.icon;
    const coverPattern = cover.dataset.pattern;

    iconElement.className = "icon"
    patternElement.className = "pattern";

    patternElement.style.backgroundImage = `url(${coverPattern})`;
    iconElement.style.backgroundImage = `url(${svg})`;
    coverTitle.textContent = title;

    coverIcon.appendChild(iconElement)
    cover.appendChild(patternElement);
})
