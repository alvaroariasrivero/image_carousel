const imageContainer = document.getElementById('image-container');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

next.addEventListener('click', function() {
    const firstAlbum = imageContainer.firstElementChild;
    imageContainer.appendChild(firstAlbum);
});

prev.addEventListener('click', function(){
    const lastAlbum = imageContainer.lastElementChild;
    const firstAlbum = imageContainer.firstElementChild;
    imageContainer.insertBefore(lastAlbum, firstAlbum);
});