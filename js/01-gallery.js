import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
console.log(galleryItems.length);
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
