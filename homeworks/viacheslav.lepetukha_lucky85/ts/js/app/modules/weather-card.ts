interface Template {

    weatherIcon : JQuery,

    weatherDesc : JQuery,

    weatherTemp : JQuery,

    windSpeed : JQuery,

    dateTime : JQuery

}

export class WeatherCard {

    $el : JQuery;

    tpl : Template;

    model : any;

    constructor (templateString : string, cardData : any) {

        this.$el = $(templateString);

        this.model = cardData;

        this.initTpl();

        this.render();

    }

    initTpl () : WeatherCard {

        this.tpl = {

            weatherIcon : this.$el.find('[data-icon]'),

            weatherDesc : this.$el.find('[data-description]'),

            weatherTemp : this.$el.find('[data-temperature]'),

            windSpeed : this.$el.find('[data-wind-speed]'),

            dateTime : this.$el.find('[data-date]')

        };

        return this;

    }

    render () {

        let iconType = this.model.weather[0].icon;

        let description = this.model.weather[0].description;

        let url = `http://openweathermap.org/img/w/${iconType}.png`;

        let temperature = `Temperature : ${this.model.main.temp} C`;

        let windSpeed = `Wind speed : ${this.model.wind.speed} m/s`;

        //let date = new Date(this.model.dt);
        let date = this.model.dt_txt;

        this.tpl.weatherIcon.prop('src', url);

        this.tpl.weatherDesc.text(description);

        this.tpl.weatherTemp.text(temperature);

        this.tpl.windSpeed.text(windSpeed);

        this.tpl.dateTime.text(date);

    }

    destroy () {

        this.$el.remove();

    }

}