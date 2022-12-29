import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryImg = document.querySelector(".gallery__image");
for (let i = 0; i < galleryItems.length; i++) {
  const item = document.createElement("div");
  item.classList.add("gallery__item");
  gallery.append(item);
  const link = document.createElement("a");
  link.href = galleryItems[i].original;
  link.classList.add("gallery__link");
  item.append(link);
  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = galleryItems[i].preview;
  image.alt = galleryItems[i].description;
  image.dataset.source = galleryItems[i].original;
  link.append(image);
}

gallery.addEventListener("click", (evt) => {
  evt.stopPropagation();
  evt.preventDefault();
  const instance = basicLightbox.create(`
	<img src="${evt.target.dataset.source}" alt="${evt.target.alt}">
`);
  if (evt.target.classList.contains("gallery__image")) {
    instance.show();
  }
  if (instance.visible()) {
    document.addEventListener("keydown", function escapeKey(e) {
      if (e.key === "Escape") {
        instance.close();
      }
    });
  }
});
