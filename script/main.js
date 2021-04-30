'use strict';
//MODAL FILE LOAD
;( function ( document, window, index )
{
	const inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
    const label = input.nextElementSibling,
			labelVal = label.innerHTML;
		input.addEventListener( 'change', function( e )
		{
			const fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 ));



class Interface{
  

}


class AddPost {
  constructor() {
    this.addBtn = document.querySelector(".postBtn")
    this.btnOpen = document.querySelector('.js-open');
    this.btnClose = document.querySelector('.js-close');
    this.modal = document.querySelector('.modal');
    this.modalChildren = document.querySelectorAll('.js-modal');
    this.addBtn.addEventListener("click", this.openModal.bind(this));
    this.btnClose.addEventListener('click', this.closeModal.bind(this));
  }
  openModal() {
    this.toggleClasses();
    this.showModal();
    this.showModalChildren();
  }

  closeModal() {
    this.hideModal();
    this.toggleClasses();
    this.showBtn()
  }
 hideModal() {
      dynamics.animate(this.modal, {
        opacity: 0,
        translateY: 100
      }, {
        type: dynamics.spring,
        frequency: 50,
        friction: 600,
        duration: 1500
      });
    } 
  showModal() {
      // Define initial properties
      dynamics.css(this.modal, {
        opacity: 0,
        scale: .5
      });
      // Animate to final properties
      dynamics.animate(this.modal, {
        opacity: 1,
        scale: 1
      }, {
        type: dynamics.spring,
        frequency: 300,
        friction: 400,
        duration: 1000
      });
    }
  showBtn() {
      dynamics.css(this.btnOpen, {
        opacity: 0
      });
      
      dynamics.animate(this.btnOpen, {
        opacity: 1
      }, {
        type: dynamics.spring,
        frequency: 300,
        friction: 400,
        duration: 800
      });
    }
    
  showModalChildren() {
      // Animate each child individually
      for(let i=0; i<this.modalChildren.length; i++) {
        let item = this.modalChildren[i];
        // Define initial properties
        dynamics.css(item, {
          opacity: 0,
          translateY: 30
        });
        // Animate to final properties
        dynamics.animate(item, {
          opacity: 1,
          translateY: 0
        }, {
          type: dynamics.spring,
          frequency: 300,
          friction: 400,
          duration: 1000,
          delay: 100 + i * 40
        });
      } 
    }
  toggleClass(element, parameter) {
    console.log(element)
    element.classList.toggle(parameter)
  }  
  toggleClasses() {
    this.toggleClass(this.btnOpen, 'is-active');
    this.toggleClass(this.modal, 'is-active');
    this.toggleClass(this.modal, 'display');
    }
    
}

const newPost = new AddPost;

class CreateMap {
  constructor() {
  }

}
const newMap = new CreateMap
// am4core.options.autoSetClassName = true;
const chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_polandLow;

// Set projection
chart.projection = new am4maps.projections.Mercator();

// Create map polygon series
const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;
polygonSeries.name = "Northern Europe";
polygonSeries.fill = am4core.color("#96BDC6");
// Configure series
const polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#E8E8E8");

// Create hover state and set alternative fill color
const hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#777");


//Adding zoom control
chart.zoomControl = new am4maps.ZoomControl();

//Zoom on click
// polygonTemplate.events.on("hit", function(ev) {
//   ev.target.series.chart.zoomToMapObject(ev.target)
// });

//Adding pin
const imageSeries = chart.series.push(new am4maps.MapImageSeries());
imageSeries.useGeodata = true;
imageSeries.name = "Northern Europe";
imageSeries.fill = am4core.color("#96BDC6");

const mapImage = imageSeries.mapImages.template;
const mapMarker = mapImage.createChild(am4core.Sprite);
mapMarker.path = "M 246.05 93.62 C 246.05 41.89 203.073 0 150 0 C 96.927 0 53.95 41.89 53.95 93.62 C 53.95 145.351 150 300 150 300 C 150 300 246.05 145.26 246.05 93.62 L 246.05 93.62 Z  M 89.888 96.961 C 89.888 64.601 116.801 38.369 150 38.369 C 183.199 38.369 210.112 64.601 210.112 96.961 C 210.112 129.371 183.159 155.552 150 155.552 C 116.841 155.552 89.888 129.371 89.888 96.961 L 89.888 96.961 Z ";
mapMarker.width = 50;
mapMarker.height = 50;
mapMarker.propertyFields.scale = "scale";
mapMarker.propertyFields.fill = "color";
mapMarker.fillOpacity = 0.8;
mapMarker.horizontalCenter = "middle";
mapMarker.verticalCenter = "bottom";
mapMarker.tooltipText = "{title}";
mapMarker.id = "marker2";


// mapImage.nonScaling = true;
mapImage.propertyFields.latitude = "latitude";
mapImage.propertyFields.longitude = "longitude";
mapImage.id = "marker";


imageSeries.data = [{
    "latitude": 53.852902,
    "longitude": 17.577044,
    "title": "Bory Tucholskie",
    "color": am4core.color("#CA6B4A"),
    "location": "past",
    "scale" : 0.1
    
  }, {
    "latitude": 53.903433,
    "longitude": 22.172849,
    "title": "Liski",
    "color": am4core.color("#CA6B4A"),
    "location": "past",
    "scale" : 0.1
   
  }, {
    "latitude": 54.542341,
    "longitude": 18.266402,
    "title": "Jezioro Borowo",
    "color": am4core.color("#CA6B4A"),
    "location": "past",
    "scale" : 0.1
  },
  {
    "latitude": 54.405018,
    "longitude": 18.564327,
    "title": "Gdańsk",
    "color": am4core.color("#FFAE4D"),
    "location": "current",
    "scale": 0.1,
    "pin" : "active"
    
  }
]

const currentAddres = document.querySelector("#maps .current");



const showActualPlace = function() {
  imageSeries.data.forEach(element => {
    if (element.location === "current") {
      
      if ( currentAddres.hasAttribute("pin")) {
        currentAddres.removeAttribute("pin");
        marker.scale = 0.1;
        marker.fillOpacity = 0.8;
        marker.fill = am4core.color("red");
      }
      
      else if (element.location === "current") {
        currentAddres.setAttribute("pin", "active");
        const marker = imageSeries.mapImages.create();
        marker.id = "marker";
        marker.latitude =  54.405018;
        marker.longitude = 18.564327;
        marker.scale = 0.2;
        marker.fillOpacity = 1;
        marker.fill = am4core.color("#FFAE4D");
        
      }
    }
  });
}

const pastLocation = document.querySelector(".last");

const showPastPlace = function () {
  console.log("show last")
  
}

currentAddres.addEventListener("click", showActualPlace)


// GOOGLE MAP
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


