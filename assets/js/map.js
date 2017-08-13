window.onload = function () {
    var map = L.map('map', {
        crs: L.CRS.Simple,
        maxZoom: 2.5
    });

    var bounds = [[0, 0], [1600, 2000]];
    var image = L.imageOverlay('./assets/image/mymap.png', bounds).addTo(map);

    map.fitBounds(bounds);

    var yx = L.latLng;

    var xy = function (x, y) {
        if (L.Util.isArray(x)) {
            return yx(x[1], x[0]);
        }
        return yx(y, x);
    };

    var neverwinter = xy(698, 1381);

    L.marker(neverwinter).addTo(map).bindTooltip('Neverwinter');
};
