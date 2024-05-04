<!-- Map.svelte -->
<script>
    import { onMount } from "svelte";
    import mapboxgl from "mapbox-gl";
    import "mapbox-gl/dist/mapbox-gl.css";
    import { selectedDataset } from "./stores/store.js"; // Import the store

    let map;

    let datasources = {
        "dataset 1": "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",
        "dataset 2": "https://dataworks.calderdale.gov.uk/download/24qdx/enf/accident%202018.geojson",
        "dataset 3": "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",
        "dataset 4": "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",
    };

    onMount(async () => {
        mapboxgl.accessToken = "pk.eyJ1IjoiaGlnaGVzdHJvYWQiLCJhIjoiY2xlcWQ2MzdvMGw5dTN5cXVjaDk2ajljcSJ9.nCVozN5tyn-0jbiPi9TTLA";
        map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/highestroad/clvo4a8l100ro01rdct0i58g0",
            center: [2.351876, 48.856431],
            zoom: 17.4,
            pitch: 68,
            bearing: -92.9,
            hash: true,
        });
        console.log(datasources["dataset 1"]);
        map.on("style.load", () => {
            map.addSource("dataset", {
                type: "geojson",
                data: datasources["dataset 1"],
            });
            map.addLayer({
                id: "dataset",
                type: "circle",
                source: "dataset",
                paint: {
                    "circle-radius": 4,
                    "circle-stroke-width": 2,
                    "circle-color": "red",
                    "circle-stroke-color": "white",
                },
            });
        });
        selectedDataset.subscribe(($selectedDataset) => {
            if (map.getSource("dataset")) {
                map.removeLayer("dataset");
                map.removeSource("dataset");
            }
            map.addSource("dataset", { type: "geojson", data: datasources[$selectedDataset] });
            map.addLayer({
                id: "dataset",
                type: "circle",
                source: "dataset",
            });
        });
    });
</script>

<div id="map"></div>

<style>
    #map {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }
</style>
