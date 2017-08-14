window.onload = function () {
    var bounds = [[0, 0], [1000, 1500]];

    var map = L.map('map', {
        crs: L.CRS.Simple,
        maxZoom: 2.5,
        maxBounds: bounds
    });

    var image = L.imageOverlay('./assets/image/mymap.png', bounds).addTo(map);

    map.fitBounds(bounds);

    var yx = L.latLng;

    var xy = function (x, y) {
        if (L.Util.isArray(x)) {
            return yx(x[1], x[0]);
        }
        return yx(y, x);
    };
};
