console.log('Good on you for checking the source for hints or secrets...');
console.log('That curiousity will serve you well.');

window.onload = function () {
    var yx = L.latLng;

    var xy = function (x, y) {
        if (L.Util.isArray(x)) {
            return yx(x[1], x[0]);
        }
        return yx(y, x);
    };

    var bounds = [[0, 0], [-0.00538, 0.00812]];

    var map = L.map('map', {
        crs: L.CRS.Simple,
        center: [0, 0],
        // maxZoom: 2.5,
        minZoom: 17,
        maxBounds: bounds,
        // maxZoom: 20,
        // minZoom: 20,
        zoom: 20
    });

    // var image = L.imageOverlay('./assets/image/mymapnolabels-min.png', bounds).addTo(map);

    L.tileLayer('./assets/image/image-tiles/{z}/map_tile_{x}_{y}.png', {
      tileSize: 256,
      maxZoom: 20
    }).addTo(map);

    // map.fitBounds(bounds);

    map.setView([-0.00107, 0.00302], 20);

    var legend = L.control();

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'rpgui-container framed legend');

        div.innerHTML += '<p>1 hex = 10 miles</p>';

        return div;
    };

    legend.addTo(map);

    var excamationIcon = L.icon({
        iconUrl: './assets/css/img/icons/exclamation.png',

        iconSize:     [24, 24],
        iconAnchor:   [5, 12],
        popupAnchor:  [5, -12]
    });

    // L.marker([807, 522], {icon: excamationIcon}).addTo(map).bindPopup('Neverwinter');
    L.marker([-0.00085, 0.002899], {icon: excamationIcon}).addTo(map).bindPopup('Mount Hotenow');
    // L.marker([830, 535], {icon: excamationIcon}).addTo(map).bindPopup('Sunless Citadel');
    // L.marker([824, 532], {icon: excamationIcon}).addTo(map).bindPopup('Oakhurst');
    // L.marker([881, 504], {icon: excamationIcon}).addTo(map).bindPopup('Luskan');

//     function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }
//
// map.on('click', onMapClick);
};
