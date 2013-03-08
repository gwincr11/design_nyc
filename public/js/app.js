(function(){


    var infowindow = new google.maps.InfoWindow(),
        geocoder = new google.maps.Geocoder(),
        first = true,
        infoTemplate = Handlebars.compile($("#info-box-template").html()),
        detailsTemplate = Handlebars.compile($("#details-template").html());

    function drawMap(lat,long){
        var mapOptions = {
            zoom: 16,
            center: new google.maps.LatLng(lat, long),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    }

    function addMarker(project){

        geocoder.geocode( { 'address': project.location}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {

                project.marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: map,
                    title: project.name,
                    id:project.id
                });


                google.maps.event.addListener(project.marker, 'click', _.bind(function(project) {

                    var infobox = new google.maps.InfoWindow({
                        content : infoTemplate(project),
                        position : project.marker.getPosition(),
                        maxWidth: 300,
                        zIndex:1000
                    });
                    infobox.open(map);
                    map.setCenter(project.marker.getPosition());
                }, this, project));


                if (first){
                    map.setCenter(results[0].geometry.location);
                    first = false;
                }

            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });
    };


    $("document").ready(function(){
        var i;

        drawMap("40.7142", "-74.0064");

        $(window).resize(function () {
            var h = $(window).height(),
                offsetTop = 190; // Calculate the top offset

            $('#map_canvas').css('height', (h - offsetTop));
        }).resize();


        // TODO add markers to map


        for(i in projects){
            addMarker(projects[i]);
        }

        // listen for clicks on the button
        $("button.details").live('click', function(e){
            // hide

            var id = parseInt(this.id.split('-')[1]);
            var project = _.findWhere(projects, {id: id});

            $("#details-modal").html(detailsTemplate(project)).modal('show');
        });

//            addMarker(new google.maps.LatLng(p.lat_lon[0], p.lat_lon[1]), p.name, p.name);
    });


})();

