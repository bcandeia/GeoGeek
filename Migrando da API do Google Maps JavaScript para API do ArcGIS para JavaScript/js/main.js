require([
    "esri/Map",
    "esri/views/MapView"
], function(Map, MapView) {


    const map = new Map({
        basemap: "streets-navigation-vector"
    });

    const view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 12,
        center: {
            latitude: 51.5319958,
            longitude: -0.1262043
        }
    });

    const contentString = "A estação <a href='https://stpancras.com/'>Kings Cross</a> " +
        "é considerada uma das principais estações de trem que servem Londres, Inglaterra. Os alunos da Escola de Magia e Bruxaria de Hogwarts embarcam no trem a vapor Expresso de Hogwarts para Hogwarts a partir da Plataforma 9¾ no dia 1 de setembro, às 11 da manhã em ponto." +
        "<p><p><img src='https://media1.popsugar-assets.com/files/thumbor/309T9GLVeCkPKFEhGrkEvjuKuzQ/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/04/09/984/n/1922507/3ca8b84f81f9bf99_christian-wagner-2_mKndNWB58-unsplash/i/Harry-Potter-Hogwarts-Express-Zoom-Background.jpg' alt='Kings Cross' height='150'>";
    view.graphics.add({
        symbol: {
            type: "text",
            color: "#7A003C",
            text: "\ue61d", // esri-icon-map-pin
            font: {
                size: 30,
                family: "CalciteWebCoreIcons"
            }
        },
        geometry: {
            type: "point",
            longitude: -0.1262043,
            latitude: 51.5319958
        },
        popupTemplate: {
            title: "Plataforma 9¾",
            content: contentString
        }
    });
});
view.graphics.add({
    symbol: {
        type: "simple-marker",
        color: "cyan"
    },
    geometry: {
        type: "point",
        longitude: -0.1262043,
        latitude: 51.5319958
    }
});