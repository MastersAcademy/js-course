document.addEventListener('DOMContentLoaded', function () {

    var vkBtn = document.getElementById('vk');

    vkBtn.addEventListener('click', function () {
        // console.log(VK.Share.button());
        VK.Share.click(0, VK.Share.button());

    }, false);

});
