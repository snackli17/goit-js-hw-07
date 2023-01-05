import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


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

galleryEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }

const selectedImage = e.target.getAttribute("data-source");
console.log(selectedImage);
const instance = basicLightbox.create(`
      <img src="${selectedImage}" width="800" height="600">
  `);

instance.show();

galleryEl.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
        instance.close();
        }
    });
});





