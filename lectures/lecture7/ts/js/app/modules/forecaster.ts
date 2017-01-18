import {RequesterService} from '../services/weather-requester'

import {CardList} from './card-list'

import {Map} from './map'

interface Tpl {

    searchInput : JQuery,

    searchButton : JQuery,

    foundName : JQuery,

    foundCountry : JQuery

}

interface Model {

    cityName : string

}

export class Forecaster {

    $el : JQuery;

    tpl : Tpl;

    model : Model;

    map : Map;

    cardList : CardList;

    constructor ($el : JQuery) {

        this.$el = $el;

        this.initTpl().initModel().initMap().initCardList().listenEvents();

    }

    renderForecast (error : any, serviceResponse : any) {

        console.dir(serviceResponse);

        if(error){

            alert(error.statusText);

            return;

        }

        this.tpl.foundName.text(serviceResponse.city.name);

        this.tpl.foundCountry.text(serviceResponse.city.country);

        this.map.setCenter({
            lat : serviceResponse.city.coord.lat,
            lng : serviceResponse.city.coord.lon
        });

        this.cardList.buildList(serviceResponse.list);

    }

    private initTpl () : Forecaster {

        this.tpl = {

            searchInput : this.$el.find('[data-input-city]'),

            searchButton : this.$el.find('[data-search]'),

            foundName : this.$el.find('[data-city-name]'),

            foundCountry : this.$el.find('[data-city-country]')

        };

        return this;

    }

    private initModel () : Forecaster {

        this.model = {

            cityName : ''

        };

        return this;

    }

    private initCardList () : Forecaster {

        this.cardList = new CardList(this.$el.find('[data-forecasts]'));

        return this;

    }

    private listenEvents () : Forecaster {

        this.tpl.searchButton.on('click', (e : JQueryEventObject) => {

            e.preventDefault();

            this.startSearch();

        });

        this.tpl.searchInput.on('keyup', (e : JQueryEventObject) => {

            if(e.keyCode == 13){

                this.startSearch();

            }

        });

        return this;

    }

    private startSearch () {

        this.model.cityName = this.tpl.searchInput.val();

        if(this.model.cityName.trim().length){

            RequesterService.getWeather(this.model.cityName, this.renderForecast, this);

        }
        else{

            alert('Empty city value!');

            console.log('test');
        }

    }

    private startCoordinateSearch (latLng : any) {

        RequesterService.getWeatherByCoords(latLng, this.renderForecast, this);

    }

    private initMap () : Forecaster{

        this.map = new Map(this.$el.find('[data-map]').get(0));

        this.map.initClickHandler(this.mapClick.bind(this));

        return this;

    }

    private mapClick (e : any) {

        this.startCoordinateSearch({
            lat : e.latLng.lat(),
            lng : e.latLng.lng()
        });


    }

}