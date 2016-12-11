(function() {
    var copyright = document.querySelector('footer');
    var copyrightYear = copyright.querySelector('p');
    var text = copyrightYear.innerHTML;
    var year = new Date().getFullYear();
    
    copyrightYear.innerHTML = '© ' + year + ' Kim Vladyslav';

})();