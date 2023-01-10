import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listOfItems = document.querySelector(".gallery");
const galleryItem = createImageGallery(galleryItems);
listOfItems.insertAdjacentHTML("beforeend", galleryItem);

listOfItems.addEventListener("click", onItemClick);

function createImageGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>`;
    })
    .join("");
}

function onItemClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${evt.target.dataset.source}" width="800" height="600">
    </div>
`);
  instance.show();

  listOfItems.addEventListener("keydown", closeModal);

  function closeModal(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
    listOfItems.removeEventListener("keydown", closeModal);
  }
}
