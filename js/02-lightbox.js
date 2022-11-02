import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGallery(images) { 
    return images
        .map(image => `<a class="gallery__item" href="${image.original}">
            <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
            </a>`)
        .join('');
}


const addGallery = createGallery(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML('beforeend', addGallery);


const galleryOriginalSize = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});


console.log(galleryItems);
