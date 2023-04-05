const galleryPhoto = document.querySelector(".gallery");
const loadMoreB = document.querySelector(".load-more");
export function clearGallery() {
    page = 1
    galleryPhoto.innerHTML='';
    loadMoreB.style.display = 'none'
}
