var mapFilters = {
  form: $("#filters form"),
  init: function(){
    $('#filternav a').click(function (e) {
      e.preventDefault();
      mapFilters.show();
      $('#filternav .current').removeClass("current")
      $(this).addClass("current")
      $(this).tab('show');
      $(".close").click(function(){
        mapFilters.hide();
      });

      mapFilters.form.find('input').click(function(){
        mapFilters.applyFilterToData();
      });
    })

  },
  hide: function(){
    $('#filternav .current').removeClass("current")
    $("#filters form").fadeOut("fast");
  },
  show: function(){
    this.form.removeClass("hide");
    this.form.fadeIn("fast");
  },
  populateMap: function(locations){
    //add elements to map
    if(locations.length == 0) {
      for(i in projects){
          addMarker(projects[i]);
        }
    }
    clearOverlays();
    for(i in locations){
        addMarker(locations[i]);
      }
  },
  applyFilterToData: function(){
    //get matching dataset and return array to populate map
    var finalArr = [];

    mapFilters.form.find('input:checked').each(function(){
      var name = this.name;
      var items = _.filter(projects,
        function(project){
          if(name === project.borough){
            return project;
          } else if(jQuery.inArray(name, project.categories) > -1){
            return project;
          } else if(jQuery.inArray(name, project.needs) > -1){
            return project;
          }
        });

      finalArr = $.merge(items, finalArr);
    });

    this.populateMap(finalArr);
  }

}

mapFilters.init();