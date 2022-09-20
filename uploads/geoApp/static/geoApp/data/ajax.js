



    var g2525b = L.geoJSON(j2525b,{
      pointToLayer: pointToLayerbank,
      //onEachFeature: onEachFeaturebank
    }).addTo(map);


    var g2525hl = L.geoJSON(j2525hl,{
      pointToLayer: pointToLayerhotel,
      //onEachFeature: onEachFeaturehotel
    }).addTo(map);


      var g2525es = L.geoJSON(j2525es,{
      pointToLayer: pointToLayerembassy,
      //onEachFeature: onEachFeatureembassy
    }).addTo(map);

          var g2525pe = L.geoJSON(j2525pe,{
      pointToLayer: pointToLayerpharmacie,
      //onEachFeature: onEachFeaturepharmacie
    }).addTo(map); 



              var g2525lr = L.geoJSON(j2525lr,{
      pointToLayer: pointToLayerloisir,
      //onEachFeature: onEachFeatureloisir
    }).addTo(map);




                      var g2525ma = L.geoJSON(j2525ma,{
      pointToLayer: pointToLayermalta,
      //onEachFeature: onEachFeaturemalta
    });

           var g2525cg = L.geoJSON(j2525cg,{
      pointToLayer: pointToLayercongo,
      //onEachFeature: onEachFeaturecongo
    });
    

        var g2525ia = L.geoJSON(j2525ia,{
      pointToLayer: pointToLayerindonisya,
      //onEachFeature: onEachFeatureindonisya
    }); 



        var g2525va = L.geoJSON(j2525va,{
      pointToLayer: pointToLayervenesuela,
      //onEachFeature: onEachFeaturevenesuela
    });



        var g2525fd = L.geoJSON(j2525fd,{
      pointToLayer: pointToLayerfenland,
      //onEachFeature: onEachFeaturefenland
    });

        var g2525se = L.geoJSON(j2525se,{
      pointToLayer: pointToLayersuede,
      //onEachFeature: onEachFeaturesuede
    });







    var g2524b = L.geoJSON(j2524b,{
      pointToLayer: pointToLayerTrue,
      //onEachFeature: onEachFeaturebank
    }).addTo(map);


    var g2524hl = L.geoJSON(j2524hl,{
      pointToLayer: pointToLayerTrue,
      //onEachFeature: onEachFeaturehotel
    }).addTo(map);


      var g2524es = L.geoJSON(j2524es,{
      pointToLayer: pointToLayerTrue,
      //onEachFeature: onEachFeatureembassy
    }).addTo(map);

          var g2524pe = L.geoJSON(j2524pe,{
      pointToLayer: pointToLayerTrue,
      //onEachFeature: onEachFeaturepharmacie
    }).addTo(map); 



              var g2524lr = L.geoJSON(j2524lr,{
      pointToLayer: pointToLayerTrue,
      //onEachFeature: onEachFeatureloisir
    }).addTo(map);
















map.on('zoomend', function (e) {
    zoom_based_layerchange();
});

function clean_map() {
    map.eachLayer(function (layer) {
        if (layer instanceof L.GeoJSON)


        {
            map.removeLayer(layer);

        }
        //console.log(layer);


    });
}



function zoom_based_layerchange() {
    //console.log(map.getZoom());

var currentZoom = map.getZoom();
    switch (currentZoom) {
        /*-case 8:
            clean_map();
            lines1.addTo(map);
            lines2.addTo(map);
            break;*/
        //case 7:
          //  clean_map();

            //buslayer.addTo(map); //show Busline
            //break;
        case 10:
            //clean_map();
           
            //restaurant.addTo(map);
            
            map.removeLayer(g2525lr);
            //map.removeLayer(cafe);
            map.removeLayer(g2525pe);
            //map.removeLayer(restaurant);
            map.removeLayer(g2525hl);
            //map.removeLayer(fastfood);
            map.removeLayer(g2525b);
             map.removeLayer(g2525ma);
             map.removeLayer(g2525cg);
             map.removeLayer(g2525va);
             map.removeLayer(g2525ia);
             map.removeLayer(g2525fd);
             map.removeLayer(g2525se);
             map.removeLayer(g2525es);
             map.removeLayer(j2525linesfinal2);
            map.removeLayer(j2525linesl);
            map.removeLayer(j2525linesm);
            map.removeLayer(j2525linesfinal1);
             map.removeLayer(j2525lines3);
            map.removeLayer(j2525lines12);
            //lines3.addTo(map);
            j2525lines12.addTo(map);

            break;
        case 11:
            map.removeLayer(g2525lr);
            //map.removeLayer(cafe);
            map.removeLayer(g2525pe);
            //map.removeLayer(restaurant);
            map.removeLayer(g2525hl);
            //map.removeLayer(fastfood);
            map.removeLayer(g2525b);
             map.removeLayer(g2525ma);
             map.removeLayer(g2525cg);
             map.removeLayer(g2525va);
             map.removeLayer(g2525ia);
             map.removeLayer(g2525fd);
             map.removeLayer(g2525se);
             map.removeLayer(g2525es);
             map.removeLayer(j2525linesfinal2);
            map.removeLayer(j2525linesl);
            map.removeLayer(j2525linesm);
            map.removeLayer(j2525linesfinal1);
             map.removeLayer(j2525lines3);
            map.removeLayer(j2525lines12);

            j2525lines12.addTo(map);
            break;
        case 12:
            map.removeLayer(g2525lr);
            //map.removeLayer(cafe);
            map.removeLayer(g2525pe);
            //map.removeLayer(restaurant);
            map.removeLayer(g2525hl);
            //map.removeLayer(fastfood);
            map.removeLayer(g2525b);
             map.removeLayer(g2525ma);
             map.removeLayer(g2525cg);
             map.removeLayer(g2525va);
             map.removeLayer(g2525ia);
             map.removeLayer(g2525fd);
             map.removeLayer(g2525se);
             map.removeLayer(g2525es);
             map.removeLayer(j2525linesfinal2);
            map.removeLayer(j2525linesl);
            map.removeLayer(j2525linesm);
            map.removeLayer(j2525linesfinal1);
             map.removeLayer(j2525lines3);
            map.removeLayer(j2525lines12);

            j2525lines12.addTo(map);
            break;
        case 13:
            map.removeLayer(g2525lr);
            //map.removeLayer(cafe);
            map.removeLayer(g2525pe);
            //map.removeLayer(restaurant);
            map.removeLayer(g2525hl);
            //map.removeLayer(fastfood);
            map.removeLayer(g2525b);
             map.removeLayer(g2525ma);
             map.removeLayer(g2525cg);
             map.removeLayer(g2525va);
             map.removeLayer(g2525ia);
             map.removeLayer(g2525fd);
             map.removeLayer(g2525se);
             map.removeLayer(g2525es);
             map.removeLayer(j2525linesfinal2);
            map.removeLayer(j2525linesl);
            map.removeLayer(j2525linesm);
            map.removeLayer(j2525linesfinal1);
             map.removeLayer(j2525lines3);
            map.removeLayer(j2525lines12);

            j2525lines12.addTo(map);
            break;
        case 14:
            map.removeLayer(g2525lr);
            //map.removeLayer(cafe);
            map.removeLayer(g2525pe);
            //map.removeLayer(restaurant);
            map.removeLayer(g2525hl);
            //map.removeLayer(fastfood);
            map.removeLayer(g2525b);
             map.removeLayer(g2525ma);
             map.removeLayer(g2525cg);
             map.removeLayer(g2525va);
             map.removeLayer(g2525ia);
             map.removeLayer(g2525fd);
             map.removeLayer(g2525se);
             map.removeLayer(g2525es);
             map.removeLayer(j2525linesfinal2);
            map.removeLayer(j2525linesl);
            map.removeLayer(j2525linesm);
            map.removeLayer(j2525linesfinal1);
             map.removeLayer(j2525lines3);
            map.removeLayer(j2525lines12);

            j2525lines12.addTo(map);
            //landuse.addTo(map);
            //z_verte.addTo(map);
            //eau.addTo(map);
            //building2.addTo(map);
            //lines12.addTo(map);

            break;
        case 16:
            //map.removeLayer(loisir);
            //map.removeLayer(cafe);
            //map.removeLayer(pharmacie);
            //map.removeLayer(restaurant);
            //map.removeLayer(hotel);
           // map.removeLayer(fastfood);
            //map.removeLayer(bank);
             map.removeLayer(g2525ma);
             map.removeLayer(g2525cg);
             map.removeLayer(g2525va);
             map.removeLayer(g2525ia);
             map.removeLayer(g2525fd);
             map.removeLayer(g2525se);
             //map.removeLayer(embassy);
             map.removeLayer(j2525linesfinal2);
            map.removeLayer(j2525linesl);
            map.removeLayer(j2525linesm);
            map.removeLayer(j2525linesfinal1);
             map.removeLayer(j2525lines3);
            map.removeLayer(j2525lines12);
            j2525lines3.addTo(map);
            j2525lines12.addTo(map);
            g2525lr.addTo(map);
              overlays.eachLayer(function (layer) {
  map.removeLayer(layer);
  layerControl.removeLayer(layer);
  overlays.removeLayer(layer);
  
  });
  //overlays.clearLayers();

            //poi_surf.addTo(map);
            
            // show Campus
            break;
        case 15:
            //clean_map();
            map.removeLayer(g2525lr);
            //map.removeLayer(cafe);
            map.removeLayer(g2525pe);
            //map.removeLayer(restaurant);
            map.removeLayer(g2525hl);
            //map.removeLayer(fastfood);
            map.removeLayer(g2525b);
             map.removeLayer(g2525ma);
             map.removeLayer(g2525cg);
             map.removeLayer(g2525va);
             map.removeLayer(g2525ia);
             map.removeLayer(g2525fd);
             map.removeLayer(g2525se);
             map.removeLayer(g2525es);
             map.removeLayer(j2525linesfinal2);
            map.removeLayer(j2525linesl);
            map.removeLayer(j2525linesm);
            map.removeLayer(j2525linesfinal1);
             map.removeLayer(j2525lines3);
            map.removeLayer(j2525lines12);
            j2525lines3.addTo(map);
            j2525lines12.addTo(map);
           


            break;
        case 17:
            map.removeLayer(g2525lr);
            //map.removeLayer(cafe);
            map.removeLayer(g2525pe);
            //map.removeLayer(restaurant);
            map.removeLayer(g2525hl);
            //map.removeLayer(fastfood);
            map.removeLayer(g2525b);
             map.removeLayer(g2525ma);
             map.removeLayer(g2525cg);
             map.removeLayer(g2525va);
             map.removeLayer(g2525ia);
             map.removeLayer(g2525fd);
             map.removeLayer(g2525se);
             map.removeLayer(g2525es);
             map.removeLayer(j2525linesfinal2);
            map.removeLayer(j2525linesl);
            map.removeLayer(j2525linesm);
            map.removeLayer(j2525linesfinal1);
             map.removeLayer(j2525lines3);
            map.removeLayer(j2525lines12);
            j2525linesfinal2.addTo(map);
            j2525linesl.addTo(map);
            j2525linesm.addTo(map);
            g2525lr.addTo(map);
            g2525pe.addTo(map);
            g2525b.addTo(map);
            g2525hl.addTo(map);
            g2525es.addTo(map);
        var ajaxcafe = $.ajax({
            url : URLcafe,
            dataType : 'json',
            jsonpCallback : 'getJson',
            success : function (response) {
              
             var cafegeo = L.geoJson(response, {
              style: function(geoJsonPoint, latlng) {
                return L.marker(latlng);
              },
                    onEachFeature: function (feature, url) {
                        popupOptions = {maxWidth: 250};
                        url.bindPopup(feature.properties.name, popupOptions);
                    },
                    pointToLayer: pointToLayercafegeo
                });
     
             cafegeo.addTo(map);
            overlays.addLayer(cafegeo,'cafe');
            layerControl.addOverlay(cafegeo,'cafe');

              //cafegeo.addTo(map);

              }
            });
var ajaxrestaurant = $.ajax({
            url : URLrestaurant,
            dataType : 'json',
            jsonpCallback : 'getJson',
            success : function (response) {
              var currentZoom = map.getZoom();
             var restaurantgeo = L.geoJson(response, {
              style: function(geoJsonPoint, latlng) {
                return L.marker(latlng);
              },
                    onEachFeature: function (feature, url) {
                        popupOptions = {maxWidth: 250};
                        url.bindPopup(feature.properties.name, popupOptions);
                    },
                    pointToLayer: pointToLayerrestaurantgeo
                }).addTo(map);
              overlays.addLayer(restaurantgeo,'restaurant');
              layerControl.addOverlay(restaurantgeo,'restaurant');
              }
            });
var ajaxfastfood = $.ajax({
            url : URLfastfood,
            dataType : 'json',
            jsonpCallback : 'getJson',
            success : function (response) {
              var currentZoom = map.getZoom();
             var fastfoodgeo = L.geoJson(response, {
              style: function(geoJsonPoint, latlng) {
                return L.marker(latlng);
              },
                    onEachFeature: function (feature, url) {
                        popupOptions = {maxWidth: 250};
                        url.bindPopup(feature.properties.name, popupOptions);
                    },
                    pointToLayer: pointToLayerfastfoodgeo
                }).addTo(map);
              overlays.addLayer(fastfoodgeo,'fastfood');
              layerControl.addOverlay(fastfoodgeo,'fastfood');
              }
            });



            break;
          case 18:

            map.removeLayer(g2525lr);
            //map.removeLayer(cafe);
            map.removeLayer(g2525pe);
            //map.removeLayer(restaurant);
            map.removeLayer(g2525hl);
            //map.removeLayer(fastfood);
            map.removeLayer(g2525b);
             map.removeLayer(g2525ma);
             map.removeLayer(g2525cg);
             map.removeLayer(g2525va);
             map.removeLayer(g2525ia);
             map.removeLayer(g2525fd);
             map.removeLayer(g2525se);
             map.removeLayer(g2525es);
             map.removeLayer(j2525linesfinal2);
            map.removeLayer(j2525linesl);
            map.removeLayer(j2525linesm);
            map.removeLayer(j2525linesfinal1);
             map.removeLayer(j2525lines3);
            map.removeLayer(j2525lines12);

            j2525linesfinal2.addTo(map);
            j2525linesl.addTo(map);
            j2525linesm.addTo(map);
            g2525lr.addTo(map);
            g2525pe.addTo(map);
            g2525b.addTo(map);
            g2525hl.addTo(map);
            //fastfood.addTo(map);
            //restaurant.addTo(map);
            //cafe.addTo(map);
            g2525ma.addTo(map);
            g2525cg.addTo(map);
            g2525va.addTo(map);
            g2525fd.addTo(map);
            g2525se.addTo(map);
            g2525ia.addTo(map);
              overlays.eachLayer(function (layer) {
  map.removeLayer(layer);
  layerControl.removeLayer(layer);
  overlays.removeLayer(layer);
  
  });
        var ajaxcafe = $.ajax({
            url : URLcafe,
            dataType : 'json',
            jsonpCallback : 'getJson',
            success : function (response) {
              
             var cafegeo = L.geoJson(response, {
              style: function(geoJsonPoint, latlng) {
                return L.marker(latlng);
              },
                    onEachFeature: function (feature, url) {
                        popupOptions = {maxWidth: 250};
                        url.bindPopup(feature.properties.name, popupOptions);
                    },
                    pointToLayer: pointToLayercafegeo
                });
     
             cafegeo.addTo(map);
            overlays.addLayer(cafegeo,'cafe');
            layerControl.addOverlay(cafegeo,'cafe');

              //cafegeo.addTo(map);

              }
            });
var ajaxrestaurant = $.ajax({
            url : URLrestaurant,
            dataType : 'json',
            jsonpCallback : 'getJson',
            success : function (response) {
              var currentZoom = map.getZoom();
             var restaurantgeo = L.geoJson(response, {
              style: function(geoJsonPoint, latlng) {
                return L.marker(latlng);
              },
                    onEachFeature: function (feature, url) {
                        popupOptions = {maxWidth: 250};
                        url.bindPopup(feature.properties.name, popupOptions);
                    },
                    pointToLayer: pointToLayerrestaurantgeo
                }).addTo(map);
              overlays.addLayer(restaurantgeo,'restaurant');
              layerControl.addOverlay(restaurantgeo,'restaurant');
              }
            });
var ajaxfastfood = $.ajax({
            url : URLfastfood,
            dataType : 'json',
            jsonpCallback : 'getJson',
            success : function (response) {
              var currentZoom = map.getZoom();
             var fastfoodgeo = L.geoJson(response, {
              style: function(geoJsonPoint, latlng) {
                return L.marker(latlng);
              },
                    onEachFeature: function (feature, url) {
                        popupOptions = {maxWidth: 250};
                        url.bindPopup(feature.properties.name, popupOptions);
                    },
                    pointToLayer: pointToLayerfastfoodgeo
                }).addTo(map);
              overlays.addLayer(fastfoodgeo,'fastfood');
              layerControl.addOverlay(fastfoodgeo,'fastfood');
              }
            });

          break;
        case 19:
            map.removeLayer(g2525lr);
            //map.removeLayer(cafe);
            map.removeLayer(g2525pe);
            //map.removeLayer(restaurant);
            map.removeLayer(g2525hl);
            //map.removeLayer(fastfood);
            map.removeLayer(g2525b);
             map.removeLayer(g2525ma);
             map.removeLayer(g2525cg);
             map.removeLayer(g2525va);
             map.removeLayer(g2525ia);
             map.removeLayer(g2525fd);
             map.removeLayer(g2525se);
             map.removeLayer(g2525es);
             map.removeLayer(j2525linesfinal2);
            map.removeLayer(j2525linesl);
            map.removeLayer(j2525linesm);
            map.removeLayer(j2525linesfinal1);
             map.removeLayer(j2525lines3);
            map.removeLayer(j2525lines12);

            j2525linesfinal1.addTo(map);
            j2525linesl.addTo(map);
            j2525linesm.addTo(map);
            g2525lr.addTo(map);
            g2525pe.addTo(map);
            g2525b.addTo(map);
            g2525hl.addTo(map);
            //fastfood.addTo(map);
            //restaurant.addTo(map);
            //cafe.addTo(map);
            g2525ma.addTo(map);
            g2525cg.addTo(map);
            g2525va.addTo(map);
            g2525fd.addTo(map);
            g2525se.addTo(map);
            g2525ia.addTo(map);
              overlays.eachLayer(function (layer) {
  map.removeLayer(layer);
  layerControl.removeLayer(layer);
  overlays.removeLayer(layer);
  
  });
        var ajaxcafe = $.ajax({
            url : URLcafe,
            dataType : 'json',
            jsonpCallback : 'getJson',
            success : function (response) {
              
             var cafegeo = L.geoJson(response, {
              style: function(geoJsonPoint, latlng) {
                return L.marker(latlng);
              },
                    onEachFeature: function (feature, url) {
                        popupOptions = {maxWidth: 250};
                        url.bindPopup(feature.properties.name, popupOptions);
                    },
                    pointToLayer: pointToLayercafegeo
                });
     
             cafegeo.addTo(map);
            overlays.addLayer(cafegeo,'cafe');
            layerControl.addOverlay(cafegeo,'cafe');

              //cafegeo.addTo(map);

              }
            });
var ajaxrestaurant = $.ajax({
            url : URLrestaurant,
            dataType : 'json',
            jsonpCallback : 'getJson',
            success : function (response) {
              var currentZoom = map.getZoom();
             var restaurantgeo = L.geoJson(response, {
              style: function(geoJsonPoint, latlng) {
                return L.marker(latlng);
              },
                    onEachFeature: function (feature, url) {
                        popupOptions = {maxWidth: 250};
                        url.bindPopup(feature.properties.name, popupOptions);
                    },
                    pointToLayer: pointToLayerrestaurantgeo
                }).addTo(map);
              overlays.addLayer(restaurantgeo,'restaurant');
              layerControl.addOverlay(restaurantgeo,'restaurant');
              }
            });
var ajaxfastfood = $.ajax({
            url : URLfastfood,
            dataType : 'json',
            jsonpCallback : 'getJson',
            success : function (response) {
              var currentZoom = map.getZoom();
             var fastfoodgeo = L.geoJson(response, {
              style: function(geoJsonPoint, latlng) {
                return L.marker(latlng);
              },
                    onEachFeature: function (feature, url) {
                        popupOptions = {maxWidth: 250};
                        url.bindPopup(feature.properties.name, popupOptions);
                    },
                    pointToLayer: pointToLayerfastfoodgeo
                }).addTo(map);
              overlays.addLayer(fastfoodgeo,'fastfood');
              layerControl.addOverlay(fastfoodgeo,'fastfood');
              }
            });
          break;
        /*case 16:
            //clean_map();
            //map.removeLayer(toponymie);
            //map.removeLayer(osmb);
            //lac.addTo(map);
            landuse.addTo(map);
            z_verte.addTo(map);
            eau.addTo(map);
            building2.addTo(map);
            
            lines3.addTo(map);
            lines12.addTo(map);
            //building2.addTo(map);

            
            // show rental
            break;*/

        default:
            // do nothing
            break;
    }
}               





var styletrue = {
    "color": "#DEDEDE",
    "weight": 0,
    "opacity": 0
}


var g252412 = L.geoJSON(j252412, { style: styletrue}).addTo(map);
var g2524123_m = L.geoJSON(j2524123_m, { style: styletrue}).addTo(map);


var g2524bl = L.geoJSON(j2524bl, { style: styletrue}).addTo(map);

var g2524eu = L.geoJSON(j2524eu, { style: styletrue}).addTo(map);



var g2524r_l3 = L.geoJSON(j2524r_l3, { style: styletrue}).addTo(map);

var g2524z_v = L.geoJSON(j2524z_v, { style: styletrue}).addTo(map);

var g2524lc = L.geoJSON(j2524lc, { style: styletrue}).addTo(map);