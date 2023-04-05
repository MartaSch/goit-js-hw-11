const galleryPhoto = document.querySelector(".gallery");
export function createGallery(images) {
    const markup = images.map(image => {
    
    const { largeImageURL, webformatURL, tags, likes, views,comments, downloads } = image
    return `<div class="photo-card"><a href="${largeImageURL}">
    <img class="photo-card-img" src="${webformatURL}" onclick = "return false" alt="${tags}" load="lazy"/>
    </a><div class="info">
    <p class="info-item">
    <b>Likes:</b> 
    ${likes}</p>
    <p class="info-item">
    <b>Views:</b> 
    ${views}</p>
    <p class="info-item">
    <b>Comments:</b> 
    ${comments}</p>
    <p class="info-item">
    <b>Downloads:</b> 
    ${downloads}</p>
    </div>
    </div>`
    }).join("");
    galleryPhoto.innerHTML += markup;
    
    }
 
