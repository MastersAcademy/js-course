import {WeatherCard} from './weather-card'

export class CardList {

    $el : JQuery;

    cardTpl : string;

    cards : WeatherCard[];

    constructor ($el : JQuery) {

        this.$el = $el;

        this.cardTpl = this.$el.find('li').get(0).outerHTML;

        this.$el.empty();

        this.cards = [];

    }

    buildList (listData : any[]) {

        this.clearList();

        listData.forEach((card : any) => {

            let newCard = new WeatherCard(this.cardTpl, card);

            this.cards.push(newCard);

            this.$el.append(newCard.$el);

        });

    }

    clearList () {

        this.cards.forEach((card) => {

            card.destroy();

        });

        this.cards = [];

    }

}