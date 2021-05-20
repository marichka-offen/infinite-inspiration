const { async } = require("rxjs");

const count = 10;
const apiKey = 'INTEIqVpknVS8k6K8bIZj2lfQy0Ue1uMTdpxoQBYiQs';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
    } catch (error) {
        // Catch error
    }
}

getPhotos();