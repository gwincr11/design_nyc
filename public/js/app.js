var mapOptions = {
    center: new google.maps.LatLng(40.7142, -74.0064),
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("map_canvas"),
    mapOptions);
