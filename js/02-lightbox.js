import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
        })
        .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);
console.log(addGalleryMarkup);
galleryEl.innerHTML = addGalleryMarkup;

new SimpleLightbox(".gallery a", {
    captionDelay: 250,
  });