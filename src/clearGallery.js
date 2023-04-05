const galleryPhoto = document.querySelector(".gallery");
const searchBtn = document.querySelector('[type = "submit"]');
const loadMoreB = document.querySelector(".load-more");
export function clearGallery() {
    page = 1
    galleryPhoto.innerHTML='';
    loadMoreB.style.display = 'none'
}
searchBtn.addEventListener("click", clearGallery);

