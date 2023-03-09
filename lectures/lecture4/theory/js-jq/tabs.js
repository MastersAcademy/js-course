$(function() {
    var $mainMenu = $('.js-menu'),
        $contentTabs = $('.content');

    $mainMenu.on('click', 'a', function (e) {
        e.preventDefault();

        var href = $(e.target).attr('href');
        $contentTabs.addClass('hidden');
        $(href).removeClass('hidden');
    });
});