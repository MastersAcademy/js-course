(function () {
    var blackCircle = document.getElementById('black');
    blackCircle.addEventListener('click', setDarkTheme);

    var greyCircle =  document.getElementById('grey');
    greyCircle.addEventListener('click', setWhiteTheme);

    var wrap = document.querySelector('.wrap');
    var header = document.querySelector('.header');
    var headerA = header.querySelector('a');
    var content = document.querySelector('.content');
    var contentH1 = content.querySelector('h1');
    var contentP = content.querySelector('p');
    
    function setDarkTheme(){
        wrap.setAttribute('style','background: black');
        document.body.style.background = 'black';
        headerA.setAttribute('style', 'color: white');
        contentH1.setAttribute('style', 'color: white');
        contentP.setAttribute('style', 'color: white');
    }

    function setWhiteTheme(){
        wrap.removeAttribute('style');
        document.body.style.background = 'white';
        headerA.removeAttribute('style');
        contentH1.removeAttribute('style');
        contentP.removeAttribute('style');
    }

})();