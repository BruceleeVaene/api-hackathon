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

var sookeHouse = new google.maps.Marker({
    position: new google.maps.LatLng(48.3564768, -123.7275092),
    icon: 'http://maps.google.com/mapfiles/kml/shapes/lodging.png',
    map: map
});

var sookeHousecontent = '<div><img id="sooke" src="https://www.victoriabuzz.com/wp-content/uploads/2020/04/2240807_lg.jpg"</div>' + 
    '<h1>Sooke Harbour House Hotel and Resort</h1>' + 
    '<p>One of Canada’s leading Vancouver Island Resorts, our charming oasis offers 28 guest rooms, each individually decorated with the finest amenities. Original artwork, local antiques, and handcrafted furniture are just a few of the things that create such an inviting atmosphere, but it may just be the wood-burning fireplace, jetted tub, and amazing views that truly makes your space a sanctuary.</p>' +
    '<a href="https://sookeharbourhouse.com/">Visit official website</a>';

var sookeInfoWindow = new google.maps.InfoWindow({
    content: sookeHousecontent
});

sookeHouse.addListener('click', function() {
    sookeInfoWindow.open(map, sookeHouse)
})

var edgewater = new google.maps.Marker({
    position: new google.maps.LatLng(47.6125416, -122.3528448),
    icon: 'http://maps.google.com/mapfiles/kml/shapes/lodging.png',
    map: map
});

var edgewaterContent = '<div><img id="edge" src="https://2hhwc1vtgxw7vk9e1dfokovt-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/Edgewater-hotel-4-horz.jpg"</div>' + 
    '<h1>The Edgewater Hotel</h1>' + 
    '<p>The Edgewater Hotel is laden with a rich musical past and surrounded by breathtaking views of the Olympic Mountains, Elliott Bay and the sparkling city. Consistently named one of the best hotels in Seattle, our unique location on Pier 67 means you’re just a short walk to everything you want to do in our evergreen city. Relax in luxurious waterfront or cityside accommodations knowing you’re doing the same as the Beatles, Pearl Jam and the Foo Fighters once did. We’ll even loan you complimentary rental guitars, sheet music and record players to inspire you to fully experience life at The Edge.</p>' +
    '<a href="https://www.edgewaterhotel.com/">Visit official website</a>';

var edgeInfoWindow = new google.maps.InfoWindow({
    content: edgewaterContent
});

edgewater.addListener('click', function() {
    edgeInfoWindow.open(map, edgewater)
})