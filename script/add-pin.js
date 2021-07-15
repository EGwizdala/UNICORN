import { chart } from './main-map.js';

export function addPin (latitude, longitude, header) {
        console.log(chart)
        const imageSeries = chart.series.push(new am4maps.MapImageSeries());
        const mapImage = imageSeries.mapImages.template;
        const mapMarker = mapImage.createChild(am4core.Sprite);
        mapMarker.path = "M 246.05 93.62 C 246.05 41.89 203.073 0 150 0 C 96.927 0 53.95 41.89 53.95 93.62 C 53.95 145.351 150 300 150 300 C 150 300 246.05 145.26 246.05 93.62 L 246.05 93.62 Z  M 89.888 96.961 C 89.888 64.601 116.801 38.369 150 38.369 C 183.199 38.369 210.112 64.601 210.112 96.961 C 210.112 129.371 183.159 155.552 150 155.552 C 116.841 155.552 89.888 129.371 89.888 96.961 L 89.888 96.961 Z ";
        mapMarker.width = 100;
        mapMarker.height = 100;
        mapMarker.scale = 0.13;
        mapImage.nonScaling = true;
        mapMarker.fill = am4core.color("#CA6B4A");
        mapMarker.fillOpacity = 0.8;
        mapMarker.horizontalCenter = "middle";
        mapMarker.verticalCenter = "bottom";
        mapMarker.tooltipText = `[whte font-size: 16px]${header}[/]!`;
        
        const marker = imageSeries.mapImages.create();
        marker.latitude = latitude;
        marker.longitude = longitude;
      }


