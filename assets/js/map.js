window.onload = function () {
    var yx = L.latLng;

    var xy = function (x, y) {
        if (L.Util.isArray(x)) {
            return yx(x[1], x[0]);
        }
        return yx(y, x);
    };

    var bounds = [[0, 0], [-0.00629, 0.00972]];

    var map = L.map('map', {
        crs: L.CRS.Simple,
        center: [-0.00269, 0.00406],
        maxBounds: bounds,
        zoom: 20,
        maxZoom: 20,
        minZoom: 17
    });

    L.tileLayer('./assets/image/{z}/map_tile_{x}_{y}-min.png', {
        tileSize: 256,
        maxZoom: 19,
        minZoom: 17
    }).addTo(map);

    map.setView([-0.00130, 0.00400], 20);

    var legend = L.control({position: 'bottomleft'});

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'legend');

        div.innerHTML += '1 hex = 10 miles';

        return div;
    };

    legend.addTo(map);
};