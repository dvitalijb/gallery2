const largeImg = document.getElementById("largeImg");
const gallery = document.getElementById("gallery");

function showImage(event) {
    event.preventDefault();
    const {target} = event;
    const {tagName} = target;

    if (tagName === 'IMG') {
        largeImg.setAttribute('src', target.parentElement.href);
        return;
    }
    if (tagName === 'A') {
        largeImg.setAttribute('src', target.href);
    }
}

gallery.addEventListener('click', showImage);