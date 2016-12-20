function Share() {

    this.vk = document.querySelector('[data-vk]');
    this.fb = document.querySelector('[data-fb]');
    this.tw = document.querySelector('[data-tw]');
    this.listenEvents();
}

Share.prototype = {

    vkontakte: function(url, title, img, text) {
        this.url = 'http://vkontakte.ru/share.php?';
        this.url += 'url=' + encodeURIComponent(url);
        this.url += '&title=' + encodeURIComponent(title);
        this.url += '&description=' + encodeURIComponent(text);
        this.url += '&image=' + encodeURIComponent(img);
        this.url += '&noparse=true';
        this.popup(this.url);
    },

    facebook: function(url, title, img, text) {
        this.url = 'http://www.facebook.com/sharer.php?s=100';
        this.url += '&p[title]=' + encodeURIComponent(title);
        this.url += '&p[summary]=' + encodeURIComponent(text);
        this.url += '&p[url]=' + encodeURIComponent(url);
        this.url += '&p[images][0]=' + encodeURIComponent(img);
        this.popup(this.url);
    },

    twitter: function(url, title) {
        this.url = 'http://twitter.com/share?';
        this.url += 'text=' + encodeURIComponent(title);
        this.url += '&url=' + encodeURIComponent(url);
        this.url += '&counturl=' + encodeURIComponent(this.url);
        this.popup(this.url);
    },

    share: function(e) {
        this.elem = e.target;
        if (this.elem === this.vk) {
            this.vkontakte('https://acid-base.github.io//', 'JS Developer', '../../img/1.png', 'Vladimir Varavva');
        } else if (this.elem === this.fb) {
            this.facebook('https://acid-base.github.io//', 'JS Developer', '../../img/1.png', 'Vladimir Varavva');
        } else if (this.elem === this.tw) {
            this.twitter('https://acid-base.github.io//', 'JS Developer');
        }
    },

    popup: function(url) {
        window.open(url, '', 'toolbar=0,status=0,width=626,height=445');
    },

    listenEvents: function() {
        document.addEventListener('click', this.share.bind(this));
    }
};

module.exports = new Share();
