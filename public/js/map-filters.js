var mapFilters = {
  form: $("#filters form"),
  init: function(){
    $('#filternav a').click(function (e) {
      e.preventDefault();
      mapFilters.show();
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
    $("#filters form").fadeOut("fast");
  },
  show: function(){
    this.form.removeClass("hide");
    this.form.fadeIn("fast");
  },
  populateMap: function(locations){
    //add elements to map
    drawMap("38.107420","-122.569703");
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