// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';


// Change code below this line

const gallery = galleryItems
    .map(({ original, preview, description }) => {
      return `
        <div class ="gallery__items">
        <a href="${original}" class= "gallery__link">
        <img class ="gallery__image" src="${preview}" 
        alt="${description}" data-source="${original}">
        </a>
        </div>
        `;
    })
    .join('');


const galleryBox = document.querySelector('.gallery'); 
galleryBox.innerHTML=gallery ;

new SimpleLightbox('.gallery a', {
captions: true,
captionType: 'attr',
captionsData: "alt",
captionPosition: 'bottom',
swipeClose: true,
animationSpeed:300,
});

console.log(galleryItems);


