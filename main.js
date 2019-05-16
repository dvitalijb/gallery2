const largeImg = document.getElementById("largeImg");
const gallery = document.getElementById("gallery");
gallery.addEventListener("click", function (event) {
    event.preventDefault();
});

function showImage(event) {
    if (event.target.tagName === 'IMG') {
        largeImg.setAttribute('src', event.target.parentElement.href);
    } else if (event.target.tagName === 'A') {
        largeImg.setAttribute('src', event.target.href);
    }
}

gallery.addEventListener('click', showImage);