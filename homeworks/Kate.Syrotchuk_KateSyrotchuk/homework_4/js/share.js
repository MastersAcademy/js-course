document.addEventListener('DOMContentLoaded', function () {

    var vkBtn = document.getElementById('vk');

    vkBtn.addEventListener('click', function () {

        VK.Share.click(1, VK.Share.button());

    }, false);

});
