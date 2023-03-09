(function() {
    
   Share = {
       go: function(_element, _options) {
            var
                self = Share,
                options = $.extend(
                    {
                        type:'',
                        url:location.href,
                        count_url:location.href,
                        title:document.title,
                        image: '',
                        text:'',
                    }, $(_element).data(),_options);

            if (self.popup(link = self[options.type](options)) === null) {
                if ( $(_element).is('a') ) {
                    $(_element).prop('href', link);
                    return true;
                }
                else {
                    location.href = link;
                    return false;
                }
            }
            else {
                return false;
            }
        },

        fb: function(_options) {
            var options = $.extend({
                    url:location.href,
                    title:document.title,
                    image:'',
                    text:'',
                }, _options);
  
            return 'http://www.facebook.com/sharer.php?s=100'
                +'&p[title]='     +encodeURIComponent(options.title)
                +'&p[summary]='   +encodeURIComponent(options.text)
                +'&p[url]='       +encodeURIComponent(options.url)
                +'&p[images][0]=' +encodeURIComponent(options.image);

            Share.popup(url);    
        },

        tw: function(_options) {
            var options = $.extend({
                    url:        location.href,
                    count_url:  location.href,
                    title:      document.title,
                }, _options);
  
            return 'http://twitter.com/share?'
                +'text='      +encodeURIComponent(options.title)
                +'&url='      +encodeURIComponent(options.url)
                +'&counturl=' +encodeURIComponent(options.count_url);

            Share.popup(url);
        },

        gg: function (_options) {
            var options = $.extend({
                url: location.href          
            }, _options);
  
            return 'https://plus.google.com/share?url='
                +encodeURIComponent(options.url);

            Share.popup(url);    
        },

        popup: function(url) {
            return window.open(url,'','toolbar=0,status=0,scrollbars=1,width=700,height=500');
        }
    }

})();