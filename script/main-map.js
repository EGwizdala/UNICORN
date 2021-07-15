import { toggleClass } from './library.js';
export const chart = am4core.create("chartdiv", am4maps.MapChart);
export const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());




export class MainMap {
    constructor() {
        this.geodata = {
            poland: am4geodata_polandLow,
            europe: am4geodata_worldLow
        }

        this.mapInfo = document.getElementById("state-name");
        this.changeBtn = document.getElementById("changeBtn");
        this.buttonTxt = changeBtn.querySelector("div");
        this.regions = ["Polska", "Europa"];
        this.changeBtn.addEventListener("click", this.changeMap.bind(this));
        // this.toggle = new Toggle;
    }

    createMap() {
        // am4core.options.autoSetClassName = true;

        // // Set map definition
        chart.geodata = am4geodata_polandLow;

        // Set projection
        chart.projection = new am4maps.projections.Mercator();

        // Create map polygon series
        // const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;
        polygonSeries.name = "Northern Europe";
        polygonSeries.fill = am4core.color("#96BDC6");

        // Configure series
        const polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "[bold font-size: 16px]{name}[/]";
        // Addng a link
        // polygonTemplate.tooltipHTML = '<b>{name}</b><br><a href="https://en.wikipedia.org/wiki/{name.urlEncode()}">More info</a>';
        // Set up tooltips
        polygonSeries.calculateVisualCenter = true;
        polygonTemplate.tooltipPosition = "fixed";
        polygonSeries.tooltip.label.interactionsEnabled = true;
        polygonSeries.tooltip.keepTargetHover = true;
        // Create hover state and set alternative fill color
        const hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#777");
        //Adding zoom control
        chart.zoomControl = new am4maps.ZoomControl();
        //Zoom on click
        polygonTemplate.events.on("hit", function(ev) {
        ev.target.series.chart.zoomToMapObject(ev.target)
        });
        // Add home button
        const button = chart.chartContainer.createChild(am4core.Button);
        button.padding(5, 5, 5, 5);
        button.align = "right";
        button.marginRight = 15;
        button.events.on("hit", function() {
        chart.goHome();
        });

        button.icon = new am4core.Sprite();
        button.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
        button.icon.fill = am4core.color("#CA6B4A");
        //Adding pin
        const imageSeries = chart.series.push(new am4maps.MapImageSeries());
        imageSeries.useGeodata = true;
        imageSeries.name = "Northern Europe";
        imageSeries.fill = am4core.color("#96BDC6");
        const mapImage = imageSeries.mapImages.template;
        const mapMarker = mapImage.createChild(am4core.Sprite);
        mapMarker.path = "M 246.05 93.62 C 246.05 41.89 203.073 0 150 0 C 96.927 0 53.95 41.89 53.95 93.62 C 53.95 145.351 150 300 150 300 C 150 300 246.05 145.26 246.05 93.62 L 246.05 93.62 Z  M 89.888 96.961 C 89.888 64.601 116.801 38.369 150 38.369 C 183.199 38.369 210.112 64.601 210.112 96.961 C 210.112 129.371 183.159 155.552 150 155.552 C 116.841 155.552 89.888 129.371 89.888 96.961 L 89.888 96.961 Z ";
        mapMarker.width = 100;
        mapMarker.height = 100;
        mapMarker.propertyFields.scale = "scale";
        mapMarker.propertyFields.fill = "color";
        mapMarker.fillOpacity = 0.8;
        mapMarker.horizontalCenter = "middle";
        mapMarker.verticalCenter = "bottom";
        mapMarker.tooltipText = "[whte font-size: 16px]{title}[/]!";

        mapMarker.id = "marker2";
        mapImage.nonScaling = true;
        mapImage.propertyFields.latitude = "latitude";
        mapImage.propertyFields.longitude = "longitude";
        mapImage.id = "marker";


        imageSeries.data = [
        {
            "latitude": 54.542341,
            "longitude": 18.266402,
            "title": "Jezioro Borowo",
            "color": am4core.color("#CA6B4A"),
            "location": "past",
            "scale" : 0.13
        },
        {
            "latitude": 53.852902,
            "longitude": 17.577044,
            "title": "Bory Tucholskie",
            "color": am4core.color("#CA6B4A"),
            "location": "past",
            "scale" : 0.13
        },
        {
            "latitude": 53.795425,
            "longitude": 19.389923,
            "title": "Pojezierze Iławskie",
            "color": am4core.color("#CA6B4A"),
            "location": "past",
            "scale" : 0.13
        },
        {
            "latitude": 54.405018,
            "longitude": 18.564327,
            "title": "Gdańsk",
            "color": am4core.color("#FFAE4D"),
            "location": "current",
            "scale": 0.13,
            "pin" : "active"
            
        }
        ]
            }

    toggleClasses() {
        toggleClass(this.changeBtn, 'is-active')
        toggleClass(this.mapInfo, 'is-active')
        }
    
    changeMap() {
    if (this.changeBtn.className.includes("is-active")) {
        this.buttonTxt.innerHTML = this.regions[1];
        this.mapInfo.innerText = this.regions[0];
        this.toggleClasses();
        // Set map definition
        chart.geodata = am4geodata_polandLow;
        const ids = [];
        function getIds() {
            for(let i = 1; i<36; i++) {
                if ( i < 10) {
                    const id = `PL-0${i}`
                    ids.push(id)
                }
                else  {
                    const id = `PL-${i}`
                    ids.push(id)
                }
            }
        }
        getIds()
        polygonSeries.include = ids
        console.log(polygonSeries.include)
        
     }
    else  if(this.changeBtn.className != "is-active") {
        this.buttonTxt.innerHTML = this.regions[0];
        this.mapInfo.innerText = this.regions[1];
        this.toggleClasses();
        // Set map definition
        chart.geodata = am4geodata_worldLow;
        //include europe
        polygonSeries.include = ["FI", "DK", "SE", "NO", "LT", "LV", "EE", "IS", "AT", "CZ", "DE", "HU", "LI", "PL", "SK", "SI", "CH", "AL", "BA", "BG", "HR", "GR", "XK", "MK", "ME", "RO", "RS", "BE", "FR", "IE", "IT", "LU", "MC", "NL", "GB", "ES", "PT", "AD"]
        console.log(polygonSeries.include)

     }

        console.log(chart.geodata)
    }

}

