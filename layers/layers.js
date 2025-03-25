ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([600726.483735, 5295849.904373, 602100.942162, 5296855.578070]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CasaMOyarzun_1 = new ol.format.GeoJSON();
var features_CasaMOyarzun_1 = format_CasaMOyarzun_1.readFeatures(json_CasaMOyarzun_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_CasaMOyarzun_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CasaMOyarzun_1.addFeatures(features_CasaMOyarzun_1);
cluster_CasaMOyarzun_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_CasaMOyarzun_1
});
var lyr_CasaMOyarzun_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CasaMOyarzun_1, 
                style: style_CasaMOyarzun_1,
                popuplayertitle: 'Casa M. Oyarzun',
                interactive: true,
                title: '<img src="styles/legend/CasaMOyarzun_1.png" /> Casa M. Oyarzun'
            });

lyr_OSMStandard_0.setVisible(true);lyr_CasaMOyarzun_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CasaMOyarzun_1];
lyr_CasaMOyarzun_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_Pregunt': 'T_Pregunt', 'N°_Preg_I': 'N°_Preg_I', 'N°_Preg_C': 'N°_Preg_C', 'Por_Corr': 'Por_Corr', 'Porc_Incor': 'Porc_Incor', 'Porc_Total': 'Porc_Total', 'Preg_Incor': 'Preg_Incor', 'Nombre': 'Nombre', 'Video': 'Video', });
lyr_CasaMOyarzun_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_Pregunt': 'TextEdit', 'N°_Preg_I': 'TextEdit', 'N°_Preg_C': 'TextEdit', 'Por_Corr': 'TextEdit', 'Porc_Incor': 'TextEdit', 'Porc_Total': 'TextEdit', 'Preg_Incor': 'TextEdit', 'Nombre': 'TextEdit', 'Video': 'TextEdit', });
lyr_CasaMOyarzun_1.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'T_Pregunt': 'inline label - always visible', 'N°_Preg_I': 'inline label - always visible', 'N°_Preg_C': 'inline label - always visible', 'Por_Corr': 'inline label - visible with data', 'Porc_Incor': 'inline label - always visible', 'Porc_Total': 'inline label - always visible', 'Preg_Incor': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_CasaMOyarzun_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});