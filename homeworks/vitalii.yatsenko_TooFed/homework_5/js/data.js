(function() {
    
    var copyright = document.querySelector('footer');
    var copyrightYear = copyright.querySelector('p');
    var text = copyrightYear.innerHTML;
    var year = new Date().getFullYear();
    
    copyrightYear.innerHTML = '© ' + year + ' Vitalii Yatsenko';
    
    var main = document.querySelector('main');
    var content = main.querySelector('.content');
    var contentH1 = content.querySelector('h1');
    var contentH3 = content.querySelector('h3');
    var contentP = content.querySelector('p');
    
    // need start chrome or chromium with --allow-file-access-from-files
    $.ajax({
        url: "js/data.json",
        type: 'GET',
        success: function(result) {
            var contentObject = result;
            contentH1.innerHTML = contentObject.contentH1;
            contentH3.innerHTML = contentObject.contentH3;
            contentP.innerHTML = contentObject.contentP;
        }
    });
    
    Share = {
        vkontakte: function(purl, ptitle, pimg, text) {
            url = 'http://vkontakte.ru/share.php?';
            url += 'url=' + encodeURIComponent(purl);
            url += '&title=' + encodeURIComponent(ptitle);
            url += '&description=' + encodeURIComponent(text);
            url += '&image=' + encodeURIComponent(pimg);
            url += '&noparse=true';
            Share.popup(url);
        },
        facebook: function(purl, ptitle, pimg, text) {
            url = 'http://www.facebook.com/sharer.php?s=100';
            url += '&p[title]=' + encodeURIComponent(ptitle);
            url += '&p[summary]=' + encodeURIComponent(text);
            url += '&p[url]=' + encodeURIComponent(purl);
            url += '&p[images][0]=' + encodeURIComponent(pimg);
            Share.popup(url);
        },
        twitter: function(purl, ptitle) {
            url = 'http://twitter.com/share?';
            url += 'text=' + encodeURIComponent(ptitle);
            url += '&url=' + encodeURIComponent(purl);
            url += '&counturl=' + encodeURIComponent(purl);
            Share.popup(url);
        },
        popup: function(url) {
            window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
        }
    };
    
    $('#fb').click(function() {
        Share.facebook('URL', 'TITLE', 'IMG', 'DESC');
    });
    
    $('#twitter').click(function() {
        Share.twitter('URL', 'TITLE');
    });

})();