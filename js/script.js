  function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 41.83156157047524, lng: -87.62729484374748},
      zoom: 18
    });
}

google.maps.event.addDomListener(window, 'load', initMap);