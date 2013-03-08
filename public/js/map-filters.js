var mapFilters = {
  form: $("#filters form"),
  init: function(){
    $('#filternav a').click(function (e) {
      e.preventDefault();
      mapFilters.show();
      $(this).tab('show');
      $(".close").click(function(){
        mapFilters.hide();
      })
    })
  },
  hide: function(){
    $("#filters form").fadeOut("fast");
  },
  show: function(){
    this.form.removeClass("hide");
    this.form.fadeIn("fast");
  },

}

mapFilters.init();