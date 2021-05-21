ymaps.ready(init);

function init() {
    // Создание карты.
    var map = new ymaps.Map("map", {
        center: [47.287588, 39.709174],
        zoom: 11,
        controls: ['zoomControl'],
    });
    map.behaviors.disable('scrollZoom');
    var Vorosh = new ymaps.Placemark(
        [47.287588, 39.709174],
    );
    var Kashirskay = new ymaps.Placemark(
        [47.199791, 39.623645]
    );
    var Pyshkin = new ymaps.Placemark(
        [47.227543, 39.724283]
    );
    var Dovatora = new ymaps.Placemark(
        [47.241946, 39.589141]
    );

    map.geoObjects.add(Vorosh);
    map.geoObjects.add(Kashirskay);
    map.geoObjects.add(Pyshkin);
    map.geoObjects.add(Dovatora);
    
}