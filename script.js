// Unsplash API
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

const count = 10;
const apiKEY = `hBL5rjTsa5FTPDInGGJKUqkLqRjNsfY-fI07i1wsHEI`;
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKEY}&count=${count}`;


function setAttributes (element, attributes){
    for (const key in attributes){
        element.setAttribute( key, attributes[key]);
    }
};

// Create Elements for links & Photos, add to DOM
function displayPhotos(){
    // Jalankan fungsi didalam setiap PhotosArray
    photosArray.forEach((photo) =>{
        const item = document.createElement('a');
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target', '_blank');
        setAttributes (item, {
            href: photo.links.html,
            target: '_blank'
        });
        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            alt: photo.alt_description
        });
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

async function getPhotos() {
    try{
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos();
    } catch(error){
        console.log('error')
    }
};
window.addEventListener('scroll', () =>{
    if(window.innerHeight + scrollY >= document.body.offsetHeight - 1000){
        getPhotos();
    }
})
// getPhotos();
console.log(document.body.offsetHeight)