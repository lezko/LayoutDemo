import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
    apiKey: "",
    version: "weekly"
});

loader.load().then(() => {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
});
