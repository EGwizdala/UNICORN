
export function mapInit(mapId, cord) {
    // The location of Uluru
    
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById(mapId), {
      zoom: 12,
      center: cord,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: cord,
      map: map,
    });
     } 

    