

    var infowindow = new google.maps.InfoWindow(),
        geocoder = new google.maps.Geocoder(),
        first = true,
        infoTemplate = Handlebars.compile($("#info-box-template").html()),
        detailsTemplate = Handlebars.compile($("#details-template").html());

    function drawMap(lat, long) {
        var mapOptions = {
            zoom: 10,
            center: new google.maps.LatLng(lat, long),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            },
            panControl: true,
            panControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            },
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.LARGE,
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            },
            scaleControl: true,
            scaleControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            },
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            }
        }
        map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    }
    markers = {}
    function addMarker(project) {

        geocoder.geocode({ 'address': project.location}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {

                markers[project.name] = new google.maps.Marker({
                  position: results[0].geometry.location,
                    map: map,
                    title: project.name,
                    id: project.id,
                  icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=A|1DAFEC|ffffff'
                });


                google.maps.event.addListener(markers[project.name], 'click', _.bind(function (project, marker) {

                    var infobox = new google.maps.InfoWindow({
                        content: infoTemplate(project),
                        position: markers[project.name].getPosition(),
                        maxWidth: 300,
                        zIndex: 1000
                    });
                    infobox.open(map);
                    map.setCenter(markers[project.name].getPosition());
                }, this, project, markers[project.name]));

                    map.setCenter(results[0].geometry.location);
                    first = false;


            } else {
                alert("Geocode was not successful for the following reason: " + status);
            }
        });
    };

    function clearOverlays() {
      for (i in markers) {
        markers[i].setMap(null);
      }
    }


    $("document").ready(function () {
        var i;

        drawMap("40.7142", "-74.0064");

        $(window).resize(function () {
            var h = $(window).height(),
                offsetTop = 190; // Calculate the top offset

            $('#map_canvas').css('height', (h - offsetTop));
        }).resize();


        // TODO add markers to map


        for (i in projects) {
            addMarker(projects[i]);
        }

        // listen for clicks on the button
        $("button.details").live('click', function (e) {
            // hide

            var id = parseInt(this.id.split('-')[1]);
            var project = _.findWhere(projects, {id: id});

            $("#details-modal").html(detailsTemplate(project)).modal({show: true});
            $("#details-carousel").carousel();
        });

        //initilize the modal
//        $('#details-modal').modal({ show: false});

//            addMarker(new google.maps.LatLng(p.lat_lon[0], p.lat_lon[1]), p.name, p.name);
    });



