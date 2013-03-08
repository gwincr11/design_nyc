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
    clearOverlays();
    for(i in locations){
        addMarker(locations[i]);
      }
  },
  applyFilterToData: function(){
    //get matching dataset and return array to populate map
    var finalArr = [];
    
    var items = projects

    mapFilters.form.find('input:checked').each(function(){
      var name = this.name;
      items = _.filter(items,
        function(project){
          if(name === project.borough){
            return project;
          } else if(jQuery.inArray(name, project.categories) > -1){
            return project;
          } else if(jQuery.inArray(name, project.needs) > -1){
            return project;
          }
        });

      
    });
    finalArr = items;
    this.populateMap(finalArr);
  }

}

mapFilters.init();