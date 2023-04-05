import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchPhotos } from './fetchPhotos';
import { createGallery } from './createGallery';
import { clearGallery } from './clearGallery';
import { smoothScroll } from './smoothScroll';

let gallerySimpleLightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionType: "alt",
    captionPosition: "bottom",
    captionDelay: 250
    });
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector('[name="searchQuery"]');
const searchBtn = document.querySelector('[type = "submit"]');
const galleryPhoto = document.querySelector(".gallery");
const loadMoreB = document.querySelector(".load-more");
const photoCard = document.querySelector(".photo-card");
const body = document.querySelector("body");

let page = 1;
loadMoreB.style.display = "none"
searchForm.addEventListener("submit", searchFun)
function searchFun (e) {
 e.preventDefault();
 const textSearch = searchInput.value.trim();
 fetchPhotos(textSearch, page).then(({data}) => {
        if(data.totalHits === 0) {
            Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
        } else {
    createGallery(data.hits);
    Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`)
loadMoreB.style.display = "block";
gallerySimpleLightbox.refresh();
        }
})
}
loadMoreB.addEventListener("click", loadFun)
function loadFun() {
    page ++;
    const textSearch = searchInput.value.trim();
    fetchPhotos(textSearch, page).then(({data}) => {
        if(data.totalHits === 0) {
            Notiflix.Notify.failure("We`re sorry, but you`ve reached the end of search results.")
} else {
 
    createGallery(data.hits);
 Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`)
loadMoreB.style.display = "block";   
gallerySimpleLightbox.refresh();
}
 smoothScroll();
    })
}

searchBtn.addEventListener("click", clearGallery);


