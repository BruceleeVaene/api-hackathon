var orcaIslandHotel = new google.maps.Marker({
    position: new google.maps.LatLng(48.523160, -122.912320),
    icon: 'http://maps.google.com/mapfiles/kml/shapes/lodging.png',
    map: map
});

var orcaIslandHotelcontent = '<div><img id="eden" src="https://www.visitsanjuans.com/sites/default/files/styles/business_banner/public/media/photos/%5Buid%5D/edenwild_exterior.jpg?itok=V2q_CyeA"</div>' + 
    '<h1>The Edenwild Boutique Inn</h1>' + 
    '<p>The Edenwild Boutique Inn is your perfect island escape located in the heart of Lopez Village. We are proud to offer our guests an elegant, intimate experience and the opportunity to de-stress and restore in a beautiful, natural setting. Lopez Island has so much to offer from beachcombing, biking, hiking, kayaking, whale watching, exploring and more. Let us share our sweet little Island with you and help you experience the wild paradise of the San Juan Islands. -The Rovente Family.</p>' +
    '<a href="https://theedenwild.com/">Visit official website</a>';

var infowindow = new google.maps.InfoWindow({
    content: orcaIslandHotelcontent
});

orcaIslandHotel.addListener('click', function() {
    infowindow.open(map, orcaIslandHotel)
})


