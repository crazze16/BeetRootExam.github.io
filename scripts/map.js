let map;

function initMap() {
    const mapOptions = {
        center: { lat: -7.931922, lng: 112.635302 },
        zoom: 16,
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    const marker = new google.maps.Marker({
        position: { lat: -7.924191, lng: 112.634941 },
        map: map,
    });
    const infowindow = new google.maps.InfoWindow({
        content: "<p>Marker Location:" + 'Hello world' + "</p>",
    });
    google.maps.event.addListener(marker, "click", () => {
        infowindow.open(map, marker);
    });
}
initMap()