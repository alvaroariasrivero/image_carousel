const imageContainer = document.getElementById('image-container');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const closePopUp = document.getElementById('close-popup');
const popUpContainer = document.getElementById('popup-container');
let albumCover = document.querySelectorAll('.album-cover');
let popUpImage = document.getElementById('popup-image');
let imagePopupContainer = document.querySelector('.image-popup-container');

next.addEventListener('click', function() {
    const firstAlbum = imageContainer.firstElementChild;
    albumCover.forEach(function(item){
        item.classList.add('move-right');
    });
    setTimeout(function() {
        imageContainer.appendChild(firstAlbum);
        albumCover.forEach(function(item){
            item.classList.remove('move-right');
        })
    }, 300);
});

prev.addEventListener('click', async function(){
    const lastAlbum = imageContainer.lastElementChild;
    const firstAlbum = imageContainer.firstElementChild;
    albumCover.forEach(function(item){
        item.classList.add('move-left');
    });
    setTimeout(function() {
        imageContainer.insertBefore(lastAlbum, firstAlbum);
        albumCover.forEach(function(item){
            item.classList.remove('move-left');
        })
    }, 300);
});

albumCover.forEach(function(cover){
    cover.addEventListener('click', function(){
        let imageSrc = cover.getAttribute('src');
        let altCover = cover.getAttribute('alt');
        popUpImage.setAttribute('src', imageSrc);
        popUpImage.setAttribute('alt', altCover);
        popUpContainer.style.display = 'block';
    });
});

closePopUp.addEventListener('click', function(){
    popUpContainer.style.display = 'none';
});

popUpContainer.addEventListener('click', function() {
    popUpContainer.style.display = 'none';
});

imagePopupContainer.addEventListener('click', function(event) {
    event.stopPropagation();
});
