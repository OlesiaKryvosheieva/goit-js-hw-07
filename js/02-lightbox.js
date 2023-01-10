import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listOfItems = document.querySelector(".gallery");
const galleryItem = createImageGallery(galleryItems);
listOfItems.insertAdjacentHTML("beforeend", galleryItem);

listOfItems.addEventListener("click", onItemClick);

function createImageGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <a class="gallery__item" href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
      </a>`;
    })
    .join("");
}

function onItemClick(evt) {
  evt.preventDefault();

  let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
