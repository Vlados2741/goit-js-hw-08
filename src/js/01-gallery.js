// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector(`.gallery`)
}

const createImagesList = galleryItems.map(image =>
    `<a class="gallery__item" href= "${image.original}">
    <img src="${image.preview}
    "alt="${image.description}"
    class="gallery__image"
    src="${image.original}">`).join("");
refs.gallery.insertAdjacentHTML("beforeend", createImagesList);

const lightbox = new SimpleLightbox('.gallery a', {
    docClose: false,
    captionsData: "alt",
    captionDelay: 250,
});