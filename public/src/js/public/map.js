ymaps.ready(init);

function init() {
    // Создание карты.
    var map = new ymaps.Map("map", {
        center: [47.287588, 39.709174],
        zoom: 13,
        controls: ['zoomControl'],
    });
    map.behaviors.disable('scrollZoom');
    var myPlacemark = new ymaps.Placemark(
        [47.287588, 39.709174],
    );
   
    map.geoObjects.add(myPlacemark);
}