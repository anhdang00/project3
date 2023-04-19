function initMap(){
  var getMap = document.getElementById('map');
  var myLocation = new google.maps.LatLng(41.83156157047524, -87.62729484374748);
  var setMap = {
    center: myLocation,
    zoom: 18
  }
  var myMap = new google.maps.Map(getMap, setMap);
  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    icon: 'images/sticker.png'
  })
}

google.maps.event.addDomListener(window, 'load', initMap);