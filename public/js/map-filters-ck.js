var mapFilters={form:$("#filters form"),init:function(){$("#filternav a").click(function(e){e.preventDefault();mapFilters.show();$(this).tab("show");$(".close").click(function(){mapFilters.hide()});mapFilters.form.find("input").click(function(){mapFilters.applyFilterToData()})})},hide:function(){$("#filters form").fadeOut("fast")},show:function(){this.form.removeClass("hide");this.form.fadeIn("fast")},populateMap:function(e){for(i in e)addMarker(e[i])},applyFilterToData:function(){var e=[];mapFilters.form.find("input:checked").each(function(){var t=this.name,n=_.filter(projects,function(e){if(t===e.borough)return e;if(jQuery.inArray(t,e.categories)>-1)return e;if(jQuery.inArray(t,e.needs)>-1)return e});e.push(n)});this.populateMap(e)}};mapFilters.init();