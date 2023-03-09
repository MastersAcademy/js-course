/**
 * Created by olhadovhal on 12/19/16.
 */
(function () {

    var popupSingleton = {

        $el : $('[data-popup]'),

        show: function () {
            //this.render();
            this.$el.removeClass('hidden');
        },

        render: function () {
            var req = new XMLHttpRequest();

            req.open('GET', 'js/data.json', true);

            req.onreadystatechange = function () {
                if (req.readyState == 4 && req.status == 200) {

                    var jsonData = JSON.parse(req.response);

                    $('[data-popup-name]').text(jsonData.name);
                    $('[data-popup-phone]').text(jsonData.phone);
                    $('[data-popup-address]').text(jsonData.address);
                }


            };
            req.send();
        },

        hide: function () {
            this.$el.addClass('hidden');
        }
    };

    window.popup = popupSingleton;
    popupSingleton.render();
})();