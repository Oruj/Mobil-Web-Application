mapboxgl.accessToken = 'pk.eyJ1IjoidGltbTEyMyIsImEiOiJjajZubjhleWYwOXpiMnFuMHNqZTczc21hIn0.XhdiqDOjvQdN2Ka1mTo2kQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-87.7763 ,42.12344],
    zoom: 9
});

map.on('load', function () {
    // Add a layer showing the places.
    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>A J Katzenmaier Elementary School</strong><p>1829 Kennedy Dr, North Chicago, IL 60088</p>",
                        "icon": "school"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-87.86448159325, 42.32581061811314]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Marjorie P Hart Elementary School</strong><p>N Orchard St, Chicago, IL 60614.</p>",
                        "icon": "school"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-87.645932900280062, 41.92953140056903]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>reenbay Elementary</strong><p>N Orleans St, Chicago, IL 60614.</p>",
                        "icon": "school"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [ -87.63899511015158, 41.913446804653205]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>North Elementary School</strong><p>1789 Rand Rd, Des Plaines, IL 60016.</p>",
                        "icon": "school"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-87.88107507886937, 42.04400272958375]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Howard A Yeager Elementary School</strong><p>W Belden Ave, Chicago, IL 60614.</p>",
                        "icon": "school"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-87.66313681473777, 41.923273403863305]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>South Elementary School</strong><p>1535 Everett Ave, Des Plaines, IL 60018.</p>",
                        "icon": "school"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-87.88573631581008, 42.01998455095969]
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": true
        }
    });

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.features[0].geometry.coordinates)
            .setHTML(e.features[0].properties.description)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });
});

//------------------------------------------------

