var stylelac = {
  "color": "#044970",
  "weight" : 0,
  "opacity": 1,
  "fillOpacity": 0.8
}
var j2525lac = L.geoJSON(j2525lc, {style: stylelac }).addTo(map);
/*var lac = new L.GeoJSON.AJAX("lac.geojson", { onEachFeature: function (feature, layer) {
        layer.bindTooltip(feature.properties.name, {permanent: true, direction: 'right'}).openTooltip();
    }, style: stylelac});*/
//var adm = new L.GeoJSON.AJAX("adm.geojson", { onEachFeature: popUp}).addTo(map);
var stylelanduse = {
  "color": "#66B66E",
  "opacity": 1,
  "weight": 0,
  "fillOpacity": 0.2
}
var j2525landuse = L.geoJSON(j2525le, {style: stylelanduse }).addTo(map);


var verte = {
  "color": "#057301",
  "opacity": 1,
  "weight": 0,
  "fillOpacity": 0.4
}
var j2525z_verte = L.geoJSON(j2525z_v, {style: verte }).addTo(map);

var eaux = {
  "color": "#044970",
  "opacity": 1,
  "weight": 0,
  "fillOpacity": 0.8
}
var j2525eau = L.geoJSON(j2525eu, { style: eaux }).addTo(map);
//var poi_surf = new L.GeoJSON.AJAX("poi_surf2.geojson", { onEachFeature: popUp});


var style3 = {
    "color": "#999998",
    "weight": 2,
    "opacity": 0.8
} 

var j2525lines3 = L.geoJSON(j2525r_l3, { style: style3 }).addTo(map);
var style12 = {
    "color": "#F1E793",
    "weight": 4,
    "opacity": 0.6
}
var j2525lines12 = L.geoJSON(j252512, { style: style12 }).addTo(map);

var stylem = {
    "color": "#ffffff",
    "weight": 1,
    "opacity": 1,
        "dashArray": '10, 10', 
    "dashOffset": '5'
}
var stylefinal1 = {
    "color": "#ffffff",
    "weight": 15,
    "opacity": 0.8,
    //"dashArray": '50, 50', 
    //"dashOffset": '60'
}

var j2525linesm = L.geoJSON(j2525123_m, { style: stylem });
var j2525linesfinal1 = new L.geoJSON(j2525123_m, { onEachFeature: function (feature, layer) {
            layer.setText(feature.properties.name,  {offset : 25,center: true, attributes: {fill: 'black', /*'font-weight': 'bold',*/
              'font-size': '15'}});

        }, style: stylefinal1 });
var j2525linesfinal2 = L.geoJSON(j2525123_m, {style: stylefinal1 });

var stylel = {
    "color": "#2B2E34",
    "weight": 10,
    "opacity": 0.9
  }

var j2525linesl = L.geoJSON(j2525123_m, { style: stylel });
var stylelarge = {
    "color": "#2B2E34",
    "weight": 30,
    "opacity": 0.9
  }

var j2525lineslarge = L.geoJSON(j2525123_m, { style: stylelarge });

var styleB = {
    "color": "#4E1901",
    "weight": 0,
    "opacity": 1
}
var stylen = {
    "color": "#540101",
    "weight": 3,
    "opacity": 1
}
var g2525bl = L.geoJSON(j2525bl, { style: styleB}).addTo(map);




