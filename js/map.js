'use strict'

;(function() {

    if (typeof ymaps === 'undefined') {
        return;
        
    }
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [47.229281, 39.628532],
                zoom: 14
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                balloonContent: 'г.Ростов-на-Дону, улица Зорге, 33'
            }, {
                iconLayout: 'default#image',
                iconImageHref: '../img/ico/basketball.svg',
                iconImageSize: [25, 63.2],
                iconImageOffset: [-15, -38]
            });
        myMap.geoObjects.add(myPlacemark);

        
    });
    
})();