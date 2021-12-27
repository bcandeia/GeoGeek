require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Directions",
    "esri/config"
], function(Map, MapView, Directions, esriConfig) {

    esriConfig.apiKey = "API_KEY";

    const map = new Map({
        basemap: "streets-navigation-vector"
    });

    const view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 6,
        center: {
            latitude: 51.5319958,
            longitude: -0.1262043
        }
    });

    let directionsWidget = new Directions({
        view: view
    });

    view.ui.add(directionsWidget, {
        position: "top-right"
    });
});