(function () {
    var black = document.getElementById('black');
    black.addEventListener('click',setDarkTheme);
    
    var grey = document.getElementById('grey');
    grey.addEventListener('click',setLightTheme);

    var header = document.querySelector('header');
    var headerP = header.querySelector('p');
    var bio = document.querySelector('.bio');
    var bioH1 = bio.querySelector('h1');
    var bioP = bio.querySelector('p');

    function setDarkTheme() {
        document.body.style.background = 'black';
        headerP.setAttribute('style','color: white');
        bioH1.setAttribute('style','color: white');
        bioP.setAttribute('style','color: white');
    }

    function setLightTheme() {
        document.body.style.background = 'white';
        headerP.removeAttribute('style');
        bioH1.removeAttribute('style');
        bioP.removeAttribute('style');
    }
})();
