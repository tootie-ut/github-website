  mapboxgl.accessToken = 'pk.eyJ1IjoidXRwaWtsZXIiLCJhIjoiY2wwcmM0eWtyMDIwNzNkcXB0bnpneWZnMSJ9.7VV66Ac4S8NH6lXX23I6Ng';
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10'
  });


  //  navigator.geolocation.getCurrentPosition(sucessLocation, errorLocation, {
  //      enableHighAccuracy: true
  //  })
  //
  //  function successLocation(position) {
  //      setupMap([position.coords.longitude, position.coords.latitude])
  //      console.log(position)
  //      setupMap()
  //  }

  //  function errorLocation() {
  //      setupMap([149.128998, -35.282001])
  }

  //default location if error//

  //  function setupMap(center) {
  //      var map = new mapboxgl.Map({
  //          container: "map",
  //          style: 'mapbox://styles/mapbox/dark-v10',
  //          center: center,
  //          zoom: 15,

  //  })
