interface LatLng{

    lat : number,

    lng : number

}

export class Map {

    el : HTMLElement;

    map : any;

    marker : any;

    constructor (el : HTMLElement) {

        this.el = el;

        this.initMap();

    }

    initMap () {

        this.map = new google.maps.Map(this.el, {

            zoom : 10,
            center : {
                lat : 49.428539,
                lng : 32.062069
            },
            mapTypeId : google.maps.MapTypeId.MAPROAD

        });

        this.marker = new google.maps.Marker({
            position : {
                lat : 49.428539,
                lng : 32.062069
            },
            map : this.map
        })

    }

    setCenter (latLng : LatLng) {

        this.map.setCenter(latLng);

        this.marker.setPosition(latLng);

    }

    initClickHandler (callback : Function) {

        this.map.addListener('click', callback);

    }

}