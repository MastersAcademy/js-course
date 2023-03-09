document.addEventListener('DOMContentLoaded', function () {

    var mainMenu = document.querySelector('.js-menu'),
        contentTabs = document.getElementsByClassName('content');

    mainMenu.addEventListener('click', function (e) {
        e.preventDefault();

        var href = e.target.getAttribute('href') || null;

        if (href) {
            [].slice.call(contentTabs).forEach(function (item) {
                if (!item.classList.contains('hidden')) item.classList.add('hidden');
            });
            document.querySelector(href).classList.remove('hidden');
        }
    });

});