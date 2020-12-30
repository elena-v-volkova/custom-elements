// Select

// Pass single element
const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
    serchEnabled: true,
});

// Map

  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
      // Создание карты.
      var myMap = new ymaps.Map("map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [48.87105359302263,2.3572444290563674],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 14,
          controls: []
      });
      // Создание геообъекта с типом точка (метка).
      var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [48.87219657376512,2.354223999999991] // координаты точки
        }
    });
      
      var myPlacemark = new ymaps.Placemark([48.87219657376512,2.354223999999991], {}, {
        iconLayout: 'default#image',
        iconImageHref: '/img/Subtract.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42]
      });

    // Размещение геообъекта на карте.
    // myMap.geoObjects.add(myGeoObject); 
    myMap.geoObjects.add(myPlacemark);
  }

  // Scroll-bar

