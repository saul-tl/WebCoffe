 // Función para inicializar el mapa
 function initMap() {
    // Creamos un objeto LatLng con las coordenadas de Barcelona
    var barcelona = {lat: 41.3850639, lng: 2.1734035};
    // Creamos el objeto del mapa y lo asociamos al div #mapa
    var mapa = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 13, // Zoom por defecto
      center: barcelona // Centro del mapa
    });
    // Creamos un marcador en la ubicación de Barcelona
    var marcador = new google.maps.Marker({
      position: barcelona,
      map: mapa,
      title: 'Barcelona'
    });
  }