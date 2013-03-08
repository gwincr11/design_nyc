(function(){


    var markers = {}
    var infowindow = new google.maps.InfoWindow();

    function drawMap(lat,long){
        var mapOptions = {
            zoom: 12,
            center: new google.maps.LatLng(lat, long),
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }
          map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    }


    function addMarker(latLong, name, title, letter){
        markers[name] = new google.maps.Marker({
              position: latLong,
              map: map,
              title: title,
              id:name,
              icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld='+letter+'|1DAFEC|ffffff'
          });
        google.maps.event.addListener(markers[name], 'click', function() {
            map.setCenter(markers[name].getPosition());
            map.setZoom(13);
            fadeInStore(markers[name]["id"]);
            var el = $("#"+ name);
            var address = el.find("address").html();
            infowindow.setContent('<h2>' + title + '</h2><br />' + address);
            infowindow.open(map, markers[name]);
          });
    }


    $("document").ready(function(){
        drawMap("38.107420","-122.569703");

        $(loop for each marker).each(function(index){
            var el = $(this);
            var titleEl = el.find("h2.name").clone();
            var titleChild = titleEl.children("span");
            titleChild.remove();
            var title = titleEl.text();

            var lat = el.find(".geo .lat").attr("content");

            var long = el.find(".geo .long").attr("content");


            var count = index + 1;

            addMarker(new google.maps.LatLng(lat, long), "marker"+count, title, count);
        });


    });

})();