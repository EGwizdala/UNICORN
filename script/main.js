
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const bory_tucholskie = { lat: 53.852517, lng:17.577373};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("routeMap"), {
      zoom: 12,
      center: bory_tucholskie,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: bory_tucholskie,
      map: map,
    });
  }
