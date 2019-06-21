function initMap() {
    var options = {
        zoom: 15,
        center: {
            lat: 3.0551,
            lng: 101.7008
        }

    }
    var map = new google.maps.Map(document.getElementById('map'), options);
}