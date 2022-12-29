import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
for (let i = 0; i < galleryItems.length; i++) {
  const item = document.createElement("a");
  item.href = galleryItems[i].original;
  item.classList.add("gallery__item");
  gallery.append(item);
  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = galleryItems[i].preview;
  image.alt = galleryItems[i].description;
  item.append(image);
}
gallery.addEventListener("click", (evt) => {
  evt.stopPropagation();
  evt.preventDefault();
  let simpleGallery = new SimpleLightbox(".gallery .gallery__item", {
    captionsData: "alt",
    captionDelay: 250,
  });
  if (evt.target.classList.contains("gallery__image")) {
    simpleGallery.open();
    simpleGallery.on("closed.simplelightbox", function () {
      simpleGallery.destroy();
    });
  }
});
