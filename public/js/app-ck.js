(function(){function r(e,t){var n={zoom:16,center:new google.maps.LatLng(e,t),mapTypeId:google.maps.MapTypeId.ROADMAP};map=new google.maps.Map(document.getElementById("map_canvas"),n)}function i(e){t.geocode({address:e.location},function(t,r){if(r==google.maps.GeocoderStatus.OK){e.marker=new google.maps.Marker({position:t[0].geometry.location,map:map,title:e.name,id:e.id});google.maps.event.addListener(e.marker,"click",_.bind(function(e){map.setCenter(e.marker.getPosition())},this,e));if(n){map.setCenter(t[0].geometry.location);n=!1}}else alert("Geocode was not successful for the following reason: "+r)})}var e=new google.maps.InfoWindow,t=new google.maps.Geocoder,n=!0;$("document").ready(function(){var e;r("40.7142","-74.0064");$(window).resize(function(){var e=$(window).height(),t=190;$("#map_canvas").css("height",e-t)}).resize();for(e in projects)i(projects[e])})})();