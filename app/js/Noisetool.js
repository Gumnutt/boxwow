var map;

var marker
var place
var infobox

var polygonSCABounds = new google.maps.Polygon({
  paths: [[    {lat: -33.891881686, lng: 151.253815397},
    {lat: -34.0307876676, lng: 151.224469676},
    {lat: -34.1552945372, lng: 151.144836654},
    {lat: -34.2531235286, lng: 151.022577071},
    {lat: -34.3145937162, lng: 150.869677475},
    {lat: -34.3336107695, lng: 150.70127172},
    {lat: -34.3082944417, lng: 150.534095047},
    {lat: -34.2411703468, lng: 150.384747298},
    {lat: -34.1389038223, lng: 150.267975428},
    {lat: -34.0116098065, lng: 150.195180999},
    {lat: -33.8718219045, lng: 150.173317595},
    {lat: -33.7332379234, lng: 150.204278863},
    {lat: -33.6093748949, lng: 150.284808371},
    {lat: -33.5122656968, lng: 150.406902894},
    {lat: -33.4513163113, lng: 150.5586388},
    {lat: -33.4324220986, lng: 150.725326703},
    {lat: -33.457416366, lng: 150.890887641},
    {lat: -33.5238965455, lng: 151.03933902},
    {lat: -33.6254432906, lng: 151.156276212},
    {lat: -33.7522165873, lng: 151.230234375},
    {lat: -33.891881686, lng: 151.253815397},
  ]],
  clickable: false,
    strokeColor: "#000000",
  strokeOpactity: 0,
    strokeWeight: 0,
    fillColor: "#000000",
  fillOpacity: 0,
  visibile: false,
  zIndex: 0
});


// this array contains the default responses also
// var ScenarioArrays = [
//   [0,'2030 Prefer 05','ANEC', ANECS2030MS0array, '<20', AltSINGLEDEPARTURESarray, 'N/A', AltSINGLEARRIVALSarray, 'N/A', 
//       OVFS2030DayMS0array, '0', OVFS2030EveningMS0array, '0', OVFS2030NightMS0array, '0', LmaxSingleDA320211MSM4array, '<60', LmaxSingleAA320211MSM4array, '<60' ],
//   [0,'2030 Prefer 23','ANEC', ANECS2030MS1array, '<20', AltSINGLEDEPARTURESarray, 'N/A', AltSINGLEARRIVALSarray, 'N/A', 
//       OVFS2030DayMS1array, '0', OVFS2030EveningMS1array, '0', OVFS2030NightMS1array, '0', LmaxSingleDA320211MSM4array, '<60', LmaxSingleAA320211MSM4array, '<60' ],
//   [0,'2050 Prefer 05','ANEC', ANECS2050MS4array, '<20', AltSINGLEDEPARTURESarray, 'N/A', AltSINGLEARRIVALSarray, 'N/A', 
//       OVFS2050DayMS4array, '0', OVFS2050EveningMS4array, '0', OVFS2050NightMS4array, '0', LmaxSingleDA320211MSM4array, '<60', LmaxSingleAA320211MSM4array, '<60' ],
//   [0,'2050 Prefer 23','ANEC', ANECS2050MS5array, '<20', AltSINGLEDEPARTURESarray, 'N/A', AltSINGLEARRIVALSarray, 'N/A', 
//       OVFS2050DayMS5array, '0', OVFS2050EveningMS5array, '0', OVFS2050NightMS5array, '0', LmaxSingleDA320211MSM4array, '<60', LmaxSingleAA320211MSM4array, '<60' ],
//   [0,'2063 Prefer 05','ANEC', ANECD2063MS0array, '<20', AltDUALDEPARTURESarray, 'N/A', AltDUALARRIVALSarray, 'N/A', 
//       OVFD2063DayMS0array, '0', OVFD2063EveningMS0array, '0', OVFD2063NightMS0array, '0', LmaxDoubleDA320211MSM0array, '<60', LmaxDoubleAA320211MSM0array, '<60' ],
//   [0,'2063 Prefer 23','ANEC', ANECD2063MS1array, '<20', AltDUALDEPARTURESarray, 'N/A', AltDUALARRIVALSarray, 'N/A', 
//       OVFD2063DayMS1array, '0', OVFD2063EveningMS1array, '0', OVFD2063NightMS1array, '0', LmaxDoubleDA320211MSM0array, '<60', LmaxDoubleAA320211MSM0array, '<60' ],
//   [0,'2030 Prefer 05','N70', N70S2030MS0array, '<5', AltSINGLEDEPARTURESarray, 'N/A', AltSINGLEARRIVALSarray, 'N/A', 
//       OVFS2030DayMS0array, '0', OVFS2030EveningMS0array, '0', OVFS2030NightMS0array, '0', LmaxSingleDA320211MSM4array, '<60', LmaxSingleAA320211MSM4array, '<60' ],
//   [0,'2030 Prefer 23','N70', N70S2030MS1array, '<5', AltSINGLEDEPARTURESarray, 'N/A', AltSINGLEARRIVALSarray, 'N/A', 
//       OVFS2030DayMS1array, '0', OVFS2030EveningMS1array, '0', OVFS2030NightMS1array, '0', LmaxSingleDA320211MSM4array, '<60', LmaxSingleAA320211MSM4array, '<60' ],
//   [0,'2050 Prefer 05','N70', N70S2050MS4array, '<5', AltSINGLEDEPARTURESarray, 'N/A', AltSINGLEARRIVALSarray, 'N/A', 
//       OVFS2050DayMS4array, '0', OVFS2050EveningMS4array, '0', OVFS2050NightMS4array, '0', LmaxSingleDA320211MSM4array, '<60', LmaxSingleAA320211MSM4array, '<60' ],
//   [0,'2050 Prefer 23','N70', N70S2050MS5array, '<5', AltSINGLEDEPARTURESarray, 'N/A', AltSINGLEARRIVALSarray, 'N/A', 
//       OVFS2050DayMS5array, '0', OVFS2050EveningMS5array, '0', OVFS2050NightMS5array, '0', LmaxSingleDA320211MSM4array, '<60', LmaxSingleAA320211MSM4array, '<60' ],
//   [0,'2063 Prefer 05','N70', N70D2063MS0array, '<5', AltDUALDEPARTURESarray, 'N/A', AltDUALARRIVALSarray, 'N/A', 
//       OVFD2063DayMS0array, '0', OVFD2063EveningMS0array, '0', OVFD2063NightMS0array, '0', LmaxDoubleDA320211MSM0array, '<60', LmaxDoubleAA320211MSM0array, '<60' ],
//   [0,'2063 Prefer 23','N70', N70D2063MS1array, '<5', AltDUALDEPARTURESarray, 'N/A', AltDUALARRIVALSarray, 'N/A', 
//       OVFD2063DayMS1array, '0', OVFD2063EveningMS1array, '0', OVFD2063NightMS1array, '0', LmaxDoubleDA320211MSM0array, '<60', LmaxDoubleAA320211MSM0array, '<60' ],
//   [0,'2030 Prefer 05','N60', N60S2030MS0array, '<5', AltSINGLEDEPARTURESarray, 'N/A', AltSINGLEARRIVALSarray, 'N/A', 
//       OVFS2030DayMS0array, '0', OVFS2030EveningMS0array, '0', OVFS2030NightMS0array, '0', LmaxSingleDA320211MSM4array, '<60', LmaxSingleAA320211MSM4array, '<60' ],
//   [0,'2030 Prefer 23','N60', N60S2030MS1array, '<5', AltSINGLEDEPARTURESarray, 'N/A', AltSINGLEARRIVALSarray, 'N/A', 
//       OVFS2030DayMS1array, '0', OVFS2030EveningMS1array, '0', OVFS2030NightMS1array, '0', LmaxSingleDA320211MSM4array, '<60', LmaxSingleAA320211MSM4array, '<60' ],
//   [0,'2030 Prefer 05 with Head-to-Head','N60', N60S2030MS2array, '<5', AltSINGLEDEPARTURESarray, 'N/A', AltSINGLEARRIVALSarray, 'N/A', 
//       OVFS2030DayMS2array, '0', OVFS2030EveningMS2array, '0', OVFS2030NightMS2array, '0', LmaxSingleDA320211MSM4array, '<60', LmaxSingleAA320211MSM4array, '<60' ],
//   [0,'2030 Prefer 23 with Head-to-Head','N60', N60S2030MS3array, '<5', AltSINGLEDEPARTURESarray, 'N/A', AltSINGLEARRIVALSarray, 'N/A', 
//       OVFS2030DayMS3array, '0', OVFS2030EveningMS3array, '0', OVFS2030NightMS3array, '0', LmaxSingleDA320211MSM4array, '<60', LmaxSingleAA320211MSM4array, '<60' ],
//   [0,'2050 Prefer 05','N60', N60S2050MS4array, '<5', AltSINGLEDEPARTURESarray, 'N/A', AltSINGLEARRIVALSarray, 'N/A', 
//       OVFS2050DayMS4array, '0', OVFS2050EveningMS4array, '0', OVFS2050NightMS4array, '0', LmaxSingleDA320211MSM4array, '<60', LmaxSingleAA320211MSM4array, '<60' ],
//   [0,'2050 Prefer 23','N60', N60S2050MS5array, '<5', AltSINGLEDEPARTURESarray, 'N/A', AltSINGLEARRIVALSarray, 'N/A', 
//       OVFS2050DayMS5array, '0', OVFS2050EveningMS5array, '0', OVFS2050NightMS5array, '0', LmaxSingleDA320211MSM4array, '<60', LmaxSingleAA320211MSM4array, '<60' ],
//   [0,'2050 Prefer 05 with Head-to-Head','N60', N60S2050MS6array, '<5', AltSINGLEDEPARTURESarray, 'N/A', AltSINGLEARRIVALSarray, 'N/A', 
//       OVFS2050DayMS6array, '0', OVFS2050EveningMS6array, '0', OVFS2050NightMS6array, '0', LmaxSingleDA320211MSM4array, '<60', LmaxSingleAA320211MSM4array, '<60' ],
//   [0,'2050 Prefer 23 with Head-to-Head','N60', N60S2050MS7array, '<5', AltSINGLEDEPARTURESarray, 'N/A', AltSINGLEARRIVALSarray, 'N/A', 
//       OVFS2050DayMS7array, '0', OVFS2050EveningMS7array, '0', OVFS2050NightMS7array, '0', LmaxSingleDA320211MSM4array, '<60', LmaxSingleAA320211MSM4array, '<60' ],
//   [0,'2063 Prefer 05','N60', N60D2063MS0array, '<5', AltDUALDEPARTURESarray, 'N/A', AltDUALARRIVALSarray, 'N/A', 
//       OVFD2063DayMS0array, '0', OVFD2063EveningMS0array, '0', OVFD2063NightMS0array, '0', LmaxDoubleDA320211MSM0array, '<60', LmaxDoubleAA320211MSM0array, '<60' ],
//   [0,'2063 Prefer 23','N60', N60D2063MS1array, '<5', AltDUALDEPARTURESarray, 'N/A', AltDUALARRIVALSarray, 'N/A', 
//       OVFD2063DayMS1array, '0', OVFD2063EveningMS1array, '0', OVFD2063NightMS1array, '0', LmaxDoubleDA320211MSM0array, '<60', LmaxDoubleAA320211MSM0array, '<60' ],
//   [0,'One Runway Departures','A320 LAmax', LmaxSingleDA320211MSM4array, '<60', AltSINGLEDEPARTURESarray, 'N/A', AltSINGLEARRIVALSarray, 'N/A', 
//       null, 'N/A', null, 'N/A', null, 'N/A', null, 'N/A', null, 'N/A' ],
//   [0,'One Runway Arrivals','A320 LAmax', LmaxSingleAA320211MSM4array, '<60', AltSINGLEDEPARTURESarray, 'N/A', AltSINGLEARRIVALSarray, 'N/A', 
//       null, 'N/A', null, 'N/A', null, 'N/A', null, 'N/A', null, 'N/A' ],
//   [0,'Two Runway Departures','A320 LAmax', LmaxDoubleDA320211MSM0array, '<60', AltDUALDEPARTURESarray, 'N/A', AltDUALARRIVALSarray, 'N/A', 
//       null, 'N/A', null, 'N/A', null, 'N/A', null, 'N/A', null, 'N/A' ],
//   [0,'Two Runway Arrivals','A320 LAmax', LmaxDoubleAA320211MSM0array, '<60', AltDUALDEPARTURESarray, 'N/A', AltDUALARRIVALSarray, 'N/A', 
//       null, 'N/A', null, 'N/A', null, 'N/A', null, 'N/A', null, 'N/A' ],
// ];

var ScenarioArrays = [
  [0,'2030 Prefer 05','ANEC', ANECS2030MS0array, '<20', null, 'N/A', null, 'N/A', 
      null, '0', null, '0', null, '0', null, '<60', null, '<60' ],
  [0,'2030 Prefer 23','ANEC', ANECS2030MS1array, '<20', null, 'N/A', null, 'N/A', 
      null, '0', null, '0', null, '0', null, '<60', null, '<60' ],
  [0,'2050 Prefer 05','ANEC', ANECS2050MS4array, '<20', null, 'N/A', null, 'N/A', 
      null, '0', null, '0', null, '0', null, '<60', null, '<60' ],
  [0,'2050 Prefer 23','ANEC', ANECS2050MS5array, '<20', null, 'N/A', null, 'N/A', 
      null, '0', null, '0', null, '0', null, '<60', null, '<60' ],
  [0,'2063 Prefer 05','ANEC', ANECD2063MS0array, '<20', null, 'N/A', null, 'N/A', 
      null, '0', null, '0', null, '0', null, '<60', null, '<60' ],
  [0,'2063 Prefer 23','ANEC', ANECD2063MS1array, '<20', null, 'N/A', null, 'N/A', 
      null, '0', null, '0', null, '0', null, '<60', null, '<60' ],
];

var ScenarioUnits = [
  '',
  '',
  '',
  '',
  '',
  '',
  ' events',
  ' events',
  ' events',
  ' events',
  ' events',
  ' events',
  ' events',
  ' events',
  ' events',
  ' events',
  ' events',
  ' events',
  ' events',
  ' events',
  ' events',
  ' events',
  ' dBA',
  ' dBA',
  ' dBA',
  ' dBA',
]

var runwaysArrays = new Array();
runwaysArrays[0] = RunwaysSingle_array
runwaysArrays[1] = RunwaysDual_array

var runwaysArraysIndexes = new Array();
runwaysArraysIndexes[0] = 0
runwaysArraysIndexes[1] = 0
runwaysArraysIndexes[2] = 0
runwaysArraysIndexes[3] = 0
runwaysArraysIndexes[4] = 1
runwaysArraysIndexes[5] = 1
runwaysArraysIndexes[6] = 0
runwaysArraysIndexes[7] = 0
runwaysArraysIndexes[8] = 0
runwaysArraysIndexes[9] = 0
runwaysArraysIndexes[10] = 1
runwaysArraysIndexes[11] = 1
runwaysArraysIndexes[12] = 0
runwaysArraysIndexes[13] = 0
runwaysArraysIndexes[14] = 0
runwaysArraysIndexes[15] = 0
runwaysArraysIndexes[16] = 0
runwaysArraysIndexes[17] = 0
runwaysArraysIndexes[18] = 0
runwaysArraysIndexes[19] = 0
runwaysArraysIndexes[20] = 1
runwaysArraysIndexes[21] = 1
runwaysArraysIndexes[22] = 0
runwaysArraysIndexes[23] = 0
runwaysArraysIndexes[24] = 1
runwaysArraysIndexes[25] = 1

var polyLayerArray = new Array();
polyLayerArray[0] = ANECS2030MS0array
polyLayerArray[1] = ANECS2030MS1array
polyLayerArray[2] = ANECS2050MS4array
polyLayerArray[3] = ANECS2050MS5array
polyLayerArray[4] = ANECD2063MS0array
polyLayerArray[5] = ANECD2063MS1array
// polyLayerArray[6] = N70S2030MS0array
// polyLayerArray[7] = N70S2030MS1array
// polyLayerArray[8] = N70S2050MS4array
// polyLayerArray[9] = N70S2050MS5array
// polyLayerArray[10] = N70D2063MS0array
// polyLayerArray[11] = N70D2063MS1array
// polyLayerArray[12] = N60S2030MS0array
// polyLayerArray[13] = N60S2030MS1array
// polyLayerArray[14] = N60S2030MS2array
// polyLayerArray[15] = N60S2030MS3array
// polyLayerArray[16] = N60S2050MS4array
// polyLayerArray[17] = N60S2050MS5array
// polyLayerArray[18] = N60S2050MS6array
// polyLayerArray[19] = N60S2050MS7array
// polyLayerArray[20] = N60D2063MS0array
// polyLayerArray[21] = N60D2063MS1array
// polyLayerArray[22] = LmaxSingleDA320211MSM4array
// polyLayerArray[23] = LmaxSingleAA320211MSM4array
// polyLayerArray[24] = LmaxDoubleDA320211MSM0array
// polyLayerArray[25] = LmaxDoubleAA320211MSM0array


var legendContents = new Array();
legendContents[0] = ANECS2030MS0leg
legendContents[1] = ANECS2030MS1leg
legendContents[2] = ANECS2050MS4leg
legendContents[3] = ANECS2050MS5leg
legendContents[4] = ANECD2063MS0leg
legendContents[5] = ANECD2063MS1leg
// legendContents[6] = N70S2030MS0leg
// legendContents[7] = N70S2030MS1leg
// legendContents[8] = N70S2050MS4leg
// legendContents[9] = N70S2050MS5leg
// legendContents[10] = N70D2063MS0leg
// legendContents[11] = N70D2063MS1leg
// legendContents[12] = N60S2030MS0leg
// legendContents[13] = N60S2030MS1leg
// legendContents[14] = N60S2030MS2leg
// legendContents[15] = N60S2030MS3leg
// legendContents[16] = N60S2050MS4leg
// legendContents[17] = N60S2050MS5leg
// legendContents[18] = N60S2050MS6leg
// legendContents[19] = N60S2050MS7leg
// legendContents[20] = N60D2063MS0leg
// legendContents[21] = N60D2063MS1leg
// legendContents[22] = LmaxSingleDA320211MSM4leg
// legendContents[23] = LmaxSingleAA320211MSM4leg
// legendContents[24] = LmaxDoubleDA320211MSM0leg
// legendContents[25] = LmaxDoubleAA320211MSM0leg

var lockedLayers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]


var activeElement
activeElement = 0 //initialize with 2012 existing ANEF

var infoboxShowing

var openoverlay

//var questionURL = "http://monitoring.soundscience.com.au/includes/SCA/greenQuestion25.png"

function mapinitialize() {
    var mapstyle = [
        {
          "featureType": "poi",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
        },
        {
            "featureType": "water",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#b5cbe4"
                }
            ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
        },
        {
            "featureType": "landscape",
            "stylers": [
                {
                    "color": "#efefef"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#83a5b0"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#bdcdd3"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e3eed3"
                }
            ]
        },
        {
            "featureType": "administrative",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "lightness": 33
                }
            ]
        },
        {
            "featureType": "road"
        },
        {
            "featureType": "road",
            "stylers": [
                {
                    "lightness": 20
                }
            ]
        }
    ]


    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(-33.885831, 150.699957),
      styles: mapstyle,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.SATELLITE,
      minZoom: 10,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_RIGHT
      },
    };
    map = new google.maps.Map(document.getElementById('mapcanvas'),
        mapOptions);


    // Create the search box and link it to the UI element.
    var input = /** @type {HTMLInputElement} */(
        document.getElementById('pac-input'));
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    try
      {
        var searchBox = new google.maps.places.SearchBox(
          /** @type {HTMLInputElement} */(input));
      }
    catch(err)
      {
        txt="There was an error on this page.\n\n";
        txt+="Error description: " + err.message + "\n\n";
        txt+="Click OK to continue.\n\n";
        alert(txt);                
      }


    // [START region_getplaces]
    // Listen for the event fired when the user selects an item from the
    // pick list. Retrieve the matching places for that item.
    google.maps.event.addListener(searchBox, 'places_changed', function() {
      var places = searchBox.getPlaces();

      //hide search box NOTE: THIS DOES NOT WORK
      //document.getElementById("pac-input").style.visibility="hidden";
      if(inSCABounds(places[0].geometry.location)==false){
        return
      };

      // For each place, get the icon, place name, and location
      if (marker){
        marker.setMap(null); // single marker allowed, on new marker the preious one will be removed
      };

      var infoboxtype = typeof infobox
      if (infoboxtype != 'undefined'){
        if (infobox){
          try
            {
               infobox.setMap(null); // single marker allowed, on new marker the preious one will be removed
            }
          catch(err)
            {txt = 'placeholder'}
        }
      };
      
      var bounds = new google.maps.LatLngBounds();
      //for (var i = 0, place; place = places[i]; i++) {
      place = places[0]
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker
      marker = new google.maps.Marker({
        map: map,
        //icon: image,
        title: place.name,
        position: place.geometry.location
      });

      //markers.push(marker);

      noiseLevel = inBounds(place.geometry.location,activeElement,3) + ScenarioUnits[activeElement]
      
      temp = inBoundsOPS(place.geometry.location,activeElement,9)
      opsDay = temp[0]
      overflownDay = temp[1]
      temp = inBoundsOPS(place.geometry.location,activeElement,11)
      opsEve = temp[0]
      overflownEve = temp[1]
      temp = inBoundsOPS(place.geometry.location,activeElement,13)
      opsNig = temp[0]
      overflownNig = temp[1]

      if(temp[1] == 2){
        opsStr = ''
      }
      else{
        opsStr = '<p>Typical overflights per day:   <a href="javascript:void()" descrip="overlayOPS" title="What does this mean?" onclick="javascript:void pretrigger(this);"><i class="fa fa-info-circle nti"></i></a><br> ' +
                'Day: ' + opsDay + ', Evening: ' + opsEve + ', Night: ' + opsNig + '</p> '
      }
      
      
      temp = inBoundsMAX(place.geometry.location,activeElement,15)
      maxDep = temp[0]
      temp = inBoundsMAX(place.geometry.location,activeElement,17)
      maxArr = temp[0]

      // if(temp[1] == 2){
      //   nlStr = ''
      // }
      // else{
      //   nlStr = '<p>Typical (A320) L<sub>Amax</sub>:   <a href="javascript:void()" descrip="overlayNL" onclick="javascript:void pretrigger(this);"><i class="fa fa-info-circle nti"></i></a><br> ' +
      //           'Departures ' + maxDep + ' dBA, Arrivals ' + maxArr + ' dBA</p>'
      // }

      nlStr = ''

      // if(overflownDay == 1 || overflownEve == 1 || overflownNig == 1){
      //   arrAlt = inBounds(place.geometry.location,activeElement,7)
      //   if(arrAlt != 'N/A'){arrAlt = arrAlt + 'ft'}
      //   depAlt = inBounds(place.geometry.location,activeElement,5)
      //   if(depAlt != 'N/A'){depAlt = depAlt + 'ft'}
      //   altStr = 'Departures ' + depAlt + ', Arrivals ' + arrAlt
      // }
      // else{
      //   // altStr = 'Not typically overflown'
      //   arrAlt = inBounds(place.geometry.location,activeElement,7)
      //   if(arrAlt != 'N/A'){arrAlt = arrAlt + 'ft'}
      //   depAlt = inBounds(place.geometry.location,activeElement,5)
      //   if(depAlt != 'N/A'){depAlt = depAlt + 'ft'}
      //   altStr = 'Departures ' + depAlt + ', Arrivals ' + arrAlt
      // }
      altStr = ''


      var contentString = infoContents(noiseLevel, altStr, opsStr, nlStr);

      infobox = new InfoBox({
           content: contentString, //document.getElementById("infobox"),
           disableAutoPan: false,
           maxWidth: 150,
           pixelOffset: new google.maps.Size(-36, 5),
           arrowPosition: -100,
           zIndex: null,
           boxStyle: {
              background: "url('http://monitoring.soundscience.com.au/includes/SCA/tipbox.png') no-repeat",  
              opacity: 0.9,
              width: "300px",
          },
          closeBoxMargin: "12px 4px 2px 2px",
          closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
          infoBoxClearance: new google.maps.Size(1, 1)
      });

      try
        {
          infobox.open(map, marker);
          map.panTo(place.geometry.location);
        }
      catch(err)
        {
          txt="There was an error on this page.\n\n";
          txt+="Error description: " + err.message + "\n\n";
          txt+="Click OK to continue.\n\n";
          alert(txt);                
        }

      bounds.extend(place.geometry.location);
      
      // add listener for marker click
      google.maps.event.addListener(marker, 'click', function() {
        infoboxShowing = true
        infobox.open(map, marker);
      });


      //map.fitBounds(bounds);
      map.setZoom(17);
    });
      // [END region_getplaces]



    // Bias the SearchBox results towards places that are within the bounds of the
    // current map's viewport.
    google.maps.event.addListener(map, 'bounds_changed', function() {
      var bounds = map.getBounds();
      searchBox.setBounds(bounds);
    });


    // start with existing ANEC showing
    for (index = 0; index < polyLayerArray[0].length; ++index) {
      polyLayerArray[0][index][0].setMap( map )
    };
    var runwayIndex = runwaysArraysIndexes[0]
    for (index = 0; index < runwaysArrays[runwayIndex].length; ++index) {
      runwaysArrays[runwayIndex][index][0].setMap( map )
    };


    // enable the site boundary layer
    SiteBoundary.setMap( map )



    // temp space to show layers
    // for (index = 0; index < RunwaysDual_array.length; ++index) {
    //   RunwaysDual_array[index][0].setMap( map )
    // };
    // polygonSCABounds.setMap( map )
    // OVFD2063NightMS1V1_0.setMap( map )
    // OVFD2063NightMS1V1_1.setMap( map )
};


function inSCABounds(latLng) {
  if(google.maps.geometry.poly.containsLocation(latLng, polygonSCABounds))
    return true;
  else {
    alert("We're sorry but the entered address is outside of the data area. Please try another");
    return false;
  }
};

function inBounds(latLng, Scenario, param) {
  if(ScenarioArrays[Scenario][param]){
    var ScenarioArray = ScenarioArrays[Scenario][param]
    for (index = 0; index < ScenarioArray.length; ++index) {
      var test = ScenarioArray[index][0]
      if(google.maps.geometry.poly.containsLocation(latLng, ScenarioArray[index][0])){
        return ScenarioArray[index][1];
      };
    };
    return ScenarioArrays[Scenario][param+1];
  }
  else {
    return ScenarioArrays[Scenario][param+1]
  }
};


function inBoundsOPS(latLng, Scenario, param) {
  if(ScenarioArrays[Scenario][param]){
    var ScenarioArray = ScenarioArrays[Scenario][param]
    for (index = 0; index < ScenarioArray.length; ++index) {
      var test = ScenarioArray[index][0]
      if(google.maps.geometry.poly.containsLocation(latLng, ScenarioArray[index][0])){
        return [ScenarioArray[index][1], 1];
      };
    };
    return [ScenarioArrays[Scenario][param+1], 0];
  }
  else {
    return [null, 2]
  }
};

function inBoundsMAX(latLng, Scenario, param) {
  if(ScenarioArrays[Scenario][param]){
    var ScenarioArray = ScenarioArrays[Scenario][param]
    for (index = 0; index < ScenarioArray.length; ++index) {
      var test = ScenarioArray[index][0]
      if(google.maps.geometry.poly.containsLocation(latLng, ScenarioArray[index][0])){
        return [ScenarioArray[index][1], 1];
      };
    };
    return [ScenarioArrays[Scenario][param+1], 0];
  }
  else {
    return [null, 2]
  }
};


function infoContents(noiseLevel, altStr, opsStr, nlStr){
  contentString = '<div id="infobox">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<p id="firstHeading" class="firstHeading"><b>'+place.formatted_address+'</b></p></br>'+
          '<div id="bodyContent">'+
          '<p><b>' + ScenarioArrays[activeElement][1] + '</b><br> ' +
          ScenarioArrays[activeElement][2] + ' ' + noiseLevel + '</p> ' +
          altStr + 
          opsStr +
          nlStr  +
          '</div>'+
          '</div>';
  return contentString
};

function pretrigger(TAG){
  triggers(TAG.getAttribute("descrip"))
};


function triggers(TAG){
  // close all overlays
  try
    {
      $('#exposeMask').remove()
      var closebutton = $('#' + openoverlay + ' .close')
      closebutton.click()
    }
  catch(err)
    {txt = 'placeholder'}

  openoverlay = TAG
  $("#" + TAG).overlay({
    // some mask tweaks suitable for modal dialogs
    mask: {
      color: '#ebecff',
      loadSpeed: 200,
      opacity: 0.9
    },
    closeOnClick: false,
    load: true,
    oneInstance: false,
    top: '10%',
    //effect: 'apple'
    //api: true
  }).load();
};


function toggleLayer( layerIndex, map ){
    // turn off all runway layers
    for (index = 0; index < runwaysArrays.length; ++index) {
      for (index2 = 0; index2 < runwaysArrays[index].length; ++index2) {
        runwaysArrays[index][index2][0].setMap( null )
      };
    };

    // turn on the correct runway layer
    var runwayIndex = runwaysArraysIndexes[layerIndex]
    for (index = 0; index < runwaysArrays[runwayIndex].length; ++index) {
      runwaysArrays[runwayIndex][index][0].setMap( map )
    };



    //turn the layer on
    var index
    for (index = 0; index < polyLayerArray[layerIndex].length; ++index) {
      polyLayerArray[layerIndex][index][0].setMap( map )
    };
    

    
    var index2
    for (index = 0; index < polyLayerArray.length; ++index) {
        if (index != layerIndex) // turn off layers that aren't the current layer
          {
            if (lockedLayers[index] != 1) // except locked layers
              {
                for (index2 = 0; index2 < polyLayerArray[index].length; ++index2) {
                  polyLayerArray[index][index2][0].setMap( null )
                };
              };
          };
    };
};

function lockLayer( layerIndex, map ){

    var index
    
    if (lockedLayers[layerIndex] == 1) // layer is on
      {
        lockedLayers[layerIndex] = 0
        // turn layer off
        for (index = 0; index < polyLayerArray[layerIndex].length; ++index) {
          var layer = polyLayerArray[layerIndex][index][0];
          layer.setMap( null )
        };
      }
    else // layer is off
      {
        lockedLayers[layerIndex] = 1
        //turn layer on
        for (index = 0; index < polyLayerArray[layerIndex].length; ++index) {
          var layer = polyLayerArray[layerIndex][index][0];
          layer.setMap( map )
        };
      }

};

function turnOffLayers( ){
    // turn off all the layers
    var index
    for (index = 0; index < polyLayerArray.length; ++index) {
      var layerArray = polyLayerArray[index]
      var index2
      for (index2 = 0; index2 < layerArray.length; ++index2)
        {
          layerArray[index2][0].setMap( null );
        };          
    };

    // turn off locked layer indexes
    for (index = 0; index < lockedLayers.length; ++index)
      {
        lockedLayers[index] = 0
      }
};



function updateInfobox () {
    noiseLevel = inBounds(place.geometry.location,activeElement,3) + ScenarioUnits[activeElement]
      
    temp = inBoundsOPS(place.geometry.location,activeElement,9)
    opsDay = temp[0]
    overflownDay = temp[1]
    temp = inBoundsOPS(place.geometry.location,activeElement,11)
    opsEve = temp[0]
    overflownEve = temp[1]
    temp = inBoundsOPS(place.geometry.location,activeElement,13)
    opsNig = temp[0]
    overflownNig = temp[1]

    if(temp[1] == 2){
      opsStr = ''
    }
    else{
      opsStr = '<p>Typical overflights per day:   <a href="javascript:void()" descrip="overlayOPS" title="What does this mean?" onclick="javascript:void pretrigger(this);"><i class="fa fa-info-circle nti"></i></a><br> ' +
              'Day: ' + opsDay + ', Evening: ' + opsEve + ', Night: ' + opsNig + '</p> '
    }
    
    
    temp = inBoundsMAX(place.geometry.location,activeElement,15)
    maxDep = temp[0]
    temp = inBoundsMAX(place.geometry.location,activeElement,17)
    maxArr = temp[0]

    // if(temp[1] == 2){
    //   nlStr = ''
    // }
    // else{
    //   nlStr = '<p>Typical (A320) L<sub>Amax</sub>:   <a href="javascript:void()" descrip="overlayNL" onclick="javascript:void pretrigger(this);"><i class="fa fa-info-circle nti"></i></a><br> ' +
    //           'Departures ' + maxDep + ' dBA, Arrivals ' + maxArr + ' dBA</p>'
    // }

    nlStr = ''

    // if(overflownDay == 1 || overflownEve == 1 || overflownNig == 1){
    //   arrAlt = inBounds(place.geometry.location,activeElement,7)
    //   if(arrAlt != 'N/A'){arrAlt = arrAlt + 'ft'}
    //   depAlt = inBounds(place.geometry.location,activeElement,5)
    //   if(depAlt != 'N/A'){depAlt = depAlt + 'ft'}
    //   altStr = 'Departures ' + depAlt + ', Arrivals ' + arrAlt
    // }
    // else{
    //   // altStr = 'Not typically overflown'
    //   arrAlt = inBounds(place.geometry.location,activeElement,7)
    //   if(arrAlt != 'N/A'){arrAlt = arrAlt + 'ft'}
    //   depAlt = inBounds(place.geometry.location,activeElement,5)
    //   if(depAlt != 'N/A'){depAlt = depAlt + 'ft'}
    //   altStr = 'Departures ' + depAlt + ', Arrivals ' + arrAlt
    // }
    altStr = ''

    var contentString = infoContents(noiseLevel, altStr, opsStr, nlStr);
    infobox.setContent(contentString)
    
};


google.maps.event.addDomListener(window, 'load', mapinitialize);


$(document).ready(function($){  
  // prevent the context menu for long press
  if ($('#mobile-indicator').is(':visible')) {
    window.oncontextmenu = function(event) {
       event.preventDefault();
       event.stopPropagation();
       return false;
    }
  };


  // serve hard-coded info svg
  var infoSVG = '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" id="svg2" height="10pt" width="10pt" version="1.0" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512.000000 512.000000" inkscape:version="0.48.5 r10040">\
        <defs id="defs8"/>\
        <path style="fill:#005ec8;fill-opacity:1;fill-rule:evenodd;stroke:none" id="path3755" d="m511.6 255.4 a255.8 255.8 0 0 0 -511.6 0 255.8 255.8 0 0 0 511.6 0 z"/>\
        <rect style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none" id="rect3757" width="103.5" height="47.6" x="203.4" y="71.7"/>\
        <rect style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none" id="rect3757-1" width="103.5" height="269.2" x="203.3" y="165.3"/>\
      </svg'
  var elementArray = document.getElementsByClassName("infoSpan");
    for (var i=0;i<elementArray.length;i++){
      var element = $(elementArray[i]);
      element.html(infoSVG);
    };   

  var timeoutId = 0

  var selectionComplete

  //load the loading overlay
  if ($('#mobile-indicator').is(':visible')) {
    var loader = $("#loadOverlay").overlay({
      // some mask tweaks suitable for modal dialogs
      mask: {
        color: '#ebecff',
        loadSpeed: 200,
        opacity: 0.9
      },
      closeOnClick: false,
      load: true,
      oneInstance: false,
      top: '10%',
      //effect: 'apple'
      api: true,          
    });
  }else {
    var loader = $("#loadOverlay").overlay({
      // some mask tweaks suitable for modal dialogs
      mask: {
        color: '#ebecff',
        loadSpeed: 200,
        opacity: 0.9
      },
      closeOnClick: false,
      load: true,
      oneInstance: false,
      top: '10%',
      //effect: 'apple'
      api: true,          
    });
  };  
  
  loader.load()


  var selectorClicked = function(THIS){
    $(THIS).removeAttr('href');
    var elementArray = document.getElementsByClassName(THIS.id);
    for (var i=0;i<elementArray.length;i++){
      var element = $(elementArray[i]);
      //var element = $(THIS).parent('li');
      element.addClass('active');
      element.siblings('li').removeClass('active');
      element.parent().parent().siblings('li').find('li').removeClass('active');
      element.parent().parent().addClass('active');
      element.parent().parent().siblings('li').removeClass('active');
    };

    $("#legendActive").slideDown();
    legendActive = $("#legendActive").children("a")
    newText = legendContents[THIS.id]
    legendActive.html(newText);

    activeElement = THIS.id;
    if (typeof place !== 'undefined') {
      updateInfobox()
    }

    toggleLayer( THIS.id, map );
  };

  var selectorHeld = function(THIS){
    $(THIS).removeAttr('href');
    var elementArray = document.getElementsByClassName(THIS.id);
    for (var i=0;i<elementArray.length;i++){
      var element = $(elementArray[i]);
      /*var element = $(THIS).parent('li');*/
      if (element.hasClass('locked')) {
        element.removeClass('locked');
        $("li[legendcontent='" + THIS.id + "']").slideUp();
      }
      else {
        element.addClass('locked');
        $("li[legendcontent='" + THIS.id + "']").slideDown();
      }
    };
    lockLayer( THIS.id, map );
  };

  
  // Top level menu buttons
  $('#cssmenu li.has-sub>a').on('click', function(){
    if ($(this).parent('li').hasClass('info')){
      triggers(this.getAttribute("descrip"))
    }
    else {
      var elementArray = document.getElementsByClassName(this.id);
      for (var i=0;i<elementArray.length;i++){
        var element = $(elementArray[i]);
        
        if (!element.hasClass('open')) {
          element.addClass('open');
          element.addClass('active');
          element.children('ul').slideDown();
          element.children('ul').find('ul').slideDown();
          element.siblings('li').children('ul').slideUp();
          element.siblings('li').removeClass('open');
          element.siblings('li').find('li').removeClass('open');
          element.siblings('li').removeClass('active');
          element.siblings('li').find('li').removeClass('active');
          element.siblings('li').find('ul').slideUp();

          // should add code to remove all locked layers or otherwise active layers
          element.siblings('li').find('li').removeClass('locked');
          turnOffLayers();
          $("li[legendcontent]").slideUp();
          $("#legendActive").slideUp();
        };
      };
    }

  });
  

  // layers selection buttons
  var hasTouch = 'ontouchstart' in window
    START = 'mousedown',
    MOVE = 'mousemove',
    END = 'mouseup';

  if (hasTouch) {
    START = 'touchstart';
    MOVE = 'touchmove';
    END = 'touchend';
  }
  $('#cssmenu li.no-sub>a').on(START, function(){
    if ($(this).parent('li').hasClass('info')){
      selectionComplete = true
      triggers(this.getAttribute("descrip"))
    }
    else {
      var self = this;
        selectionComplete = false;
        this.style.cursor = 'wait';
        timeoutId = setTimeout(function() { 
          selectionComplete = true
          self.style.cursor = 'pointer';
          selectorHeld(self); }, 1000);
    }}).bind(END, function() {
          this.style.cursor = 'pointer';
          clearTimeout(timeoutId);                  
          var self = this;
          if (selectionComplete!=true && !$(self).parent('li').hasClass('locked') ){
            selectorClicked(self)};
    }).bind('mouseleave', function() {
          this.style.cursor = 'pointer';
          clearTimeout(timeoutId);                  
    });
    

  // reset map button
  $('#cssmenu li.resetMap>a').on('click', function(){
      var center = new google.maps.LatLng(-33.885831, 150.699957);
      map.panTo(center);
      map.setZoom(12);
  });

  // tutorial button
  $('#cssmenu li.tutorial>a').on('click', function(){
      $("#instructionOverlay").overlay({
        // some mask tweaks suitable for modal dialogs
        mask: {
          color: '#ebecff',
          loadSpeed: 200,
          opacity: 0.9
        },
        closeOnClick: false,
        load: true,
        oneInstance: false,
        top: '10%',
        //effect: 'apple'
        //api: true
      }).load();
      // loader.load()
  });

  // decibel button
  $('#cssmenu li.whatDecibel>a').on('click', function(){
      $("#overlayNL").overlay({
        // some mask tweaks suitable for modal dialogs
        mask: {
          color: '#ebecff',
          loadSpeed: 200,
          opacity: 0.9
        },
        closeOnClick: false,
        load: true,
        oneInstance: false,
        top: '10%',
        //effect: 'apple'
        //api: true
      }).load();
      // loader.load()
  });


  var elementArray1

  // mimic hover behaviour for adjoing accordions
  $('#cssmenu li.has-sub>a').on('mouseover', function(){
    elementArray1 = document.getElementsByClassName(this.id);
    for (var i=0;i<elementArray1.length;i++){
      elementArray1[i].classList.add("mouse");
    };
  }).bind('mouseleave', function(){
    for (var i=0;i<elementArray1.length;i++){
      elementArray1[i].classList.remove("mouse");
    };
  });

  // mimic hover behaviour for adjoing accordions
  $('#cssmenu li.whatDecibel>a').on('mouseover', function(){
    elementArray1 = document.getElementsByClassName(this.id);
    for (var i=0;i<elementArray1.length;i++){
      elementArray1[i].classList.add("mouse");
    };
  }).bind('mouseleave', function(){
    for (var i=0;i<elementArray1.length;i++){
      elementArray1[i].classList.remove("mouse");
    };
  });

  // mimic hover behaviour for adjoing accordions
  $('#cssmenu li.resetMap>a').on('mouseover', function(){
    elementArray1 = document.getElementsByClassName(this.id);
    for (var i=0;i<elementArray1.length;i++){
      elementArray1[i].classList.add("mouse");
    };
  }).bind('mouseleave', function(){
    for (var i=0;i<elementArray1.length;i++){
      elementArray1[i].classList.remove("mouse");
    };
  });

  // mimic hover behaviour for adjoing accordions
  $('#cssmenu li.tutorial>a').on('mouseover', function(){
    elementArray1 = document.getElementsByClassName(this.id);
    for (var i=0;i<elementArray1.length;i++){
      elementArray1[i].classList.add("mouse");
    };
  }).bind('mouseleave', function(){
    for (var i=0;i<elementArray1.length;i++){
      elementArray1[i].classList.remove("mouse");
    };
  });


  $(function () {
    $('#cssmenu li.firstload>a').click();
    $("#legendActive").slideDown();
    var legendActive = $("#legendActive").children("a")
    var newText = legendContents[0]
    legendActive.html(newText);
  });

});

// MAKE THE SIDE PANEL SLIDE IN
$(document).ready(function(){
    $('#nismap-slide-button').click(function(){
      var hidden = $('#nismap-menu-container');
      if (hidden.hasClass('visible')){
          hidden.animate({"left":"-200px"}, "slow").removeClass('visible');
      } else {
          hidden.animate({"left":"0px"}, "slow").addClass('visible');
      }
      var hidden = $('#nismap-slide-button-container');
      if (hidden.hasClass('visible')){
          hidden.animate({"left":"0px"}, "slow").removeClass('visible');
          hidden.find("img").attr('src', 'Arrow20px.png')
      } else {
          hidden.animate({"left":"200px"}, "slow").addClass('visible');
          hidden.find("img").attr('src', 'Arrow20pxL.png')
      }
    });
});

