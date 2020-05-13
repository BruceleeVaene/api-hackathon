var coordinates = [];
var map = document.getElementById('map');


$.ajax ({
    method: 'GET',
    url: 'http://hotline.whalemuseum.org/api.json?species=orca',
    success: logResult,
    error: logError
})

function logResult(result) {
    console.log('Success!', result);
    //var whaleData = JSON.stringify(result);
    //console.log(whaleData);
    var lat = 0;
    var long = 0;
    for (var i = 0; i < result.length; i++) {
        lat = result[i].latitude;
        long = result[i].longitude;
        coordinates.push([lat, long]);
    }
    console.log('Coordinates Array',coordinates);


    for (var i =0; i < coordinates.length; i++) {
            var newMarker = new google.maps.Marker({
            position: new google.maps.LatLng(coordinates[i][0], coordinates[i][1]),
            icon: 'http://maps.google.com/mapfiles/kml/paddle/ylw-stars.png',
            map: map
        });
        //newMarker.addListener('click', function() {
            //map.setZoom(12),
            //map.setCenter(newMarker.getPosition());
        //})
    };
}
function logError(error) {
    console.log('Failure!', error);
}







/*$.ajax ({
    method: 'GET',
    dataType: 'jsonp',
    url: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBApr2mVQhGr446cdI_iz9gDY7U2IiKQYg&callback=initMap',
    success: logResult,
    error: logError
})*/
