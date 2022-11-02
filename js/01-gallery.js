import { galleryItems } from './gallery-items.js';
// Change code below this line


function createGallery(images) { 
    return images
        .map(image => `<div class="gallery__item">
            <a class="gallery__link" href="${image.original}">
                <img
                class="gallery__image"
                src="${image.preview}"
                data-source="${image.original}"
                alt="${image.description}"
                />
            </a>
        </div >`)
        .join('');
}

const addGallery = createGallery(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML('beforeend', addGallery);

gallery.addEventListener("click", onImageClick);

function onImageClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") { 
        return;
    }

    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}">`);
        instance.show();

    console.log(instance);
    console.log(event.target.dataset.source);

    gallery.addEventListener('keydown', (event) => { 
        if (event.code === "Escape") { 
            instance.close();
        }
    })
} 


console.log(galleryItems);