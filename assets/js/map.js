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
        center: [-0.00269, 0.00406],
        maxBounds: bounds,
        zoom: 20,
        maxZoom: 20,
        minZoom: 17
    });

    L.tileLayer('./assets/image/image-tiles/{z}/map_tile_{x}_{y}.png', {
        tileSize: 256,
        maxZoom: 20,
        minZoom: 17
    }).addTo(map);

    map.setView([-0.00095, 0.00300], 20);

    var legend = L.control({position: 'bottomleft'});

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'legend');

        div.innerHTML += '1 hex = 10 miles';

        return div;
    };

    legend.addTo(map);

    var orbIcon = L.icon({
        iconUrl: './assets/css/images/orb.png',
        iconSize: [16, 16],
        iconAnchor: [0, 0],
        popupAnchor: [8, 0]
    });

    L.marker([-0.001008, 0.002824], {icon: orbIcon}).addTo(map).bindPopup('Neverwinter');
    L.marker([-0.000847, 0.002895], {icon: orbIcon}).addTo(map).bindPopup('Mount Hotenow');
    L.marker([-0.000882, 0.002895], {icon: orbIcon}).addTo(map).bindPopup('Sunless Citadel');
    L.marker([-0.000918, 0.002876], {icon: orbIcon}).addTo(map).bindPopup('Oakhurst');
    L.marker([-0.000608, 0.002727], {icon: orbIcon}).addTo(map).bindPopup('Luskan');
    L.marker([-0.000419, 0.003122], {icon: orbIcon}).addTo(map).bindPopup('Mirabar');
    L.marker([-0.001966, 0.003278], {icon: orbIcon}).addTo(map).bindPopup('Waterdeep');
    L.marker([-0.003798, 0.004869], {icon: orbIcon}).addTo(map).bindPopup('Berdusk');
    L.marker([-0.000502, 0.002406], {icon: orbIcon}).addTo(map).bindPopup('Fireshear');
    L.marker([-0.000718, 0.004158], {icon: orbIcon}).addTo(map).bindPopup('Silverymoon');
    L.marker([-0.000683, 0.004508], {icon: orbIcon}).addTo(map).bindPopup('Sundabar');
    L.marker([-0.003418, 0.004498], {icon: orbIcon}).addTo(map).bindPopup('Elturel');
    L.marker([-0.003472, 0.004842], {icon: orbIcon}).addTo(map).bindPopup('Scornubel');
    L.marker([-0.003545, 0.003900], {icon: orbIcon}).addTo(map).bindPopup('Baldur\'s Gate');

    // var popup = L.popup();
    //
    // function onMapClick(e) {
    //     popup
    //         .setLatLng(e.latlng)
    //         .setContent("You clicked the map at " + e.latlng.toString())
    //         .openOn(map);
    // }
    //
    // map.on('click', onMapClick);
};
