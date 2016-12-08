/**
 *
 * @type {{vk: ShareLinks.vk, facebook: ShareLinks.facebook, twitter: ShareLinks.twitter, googlePlus: ShareLinks.googlePlus, share: ShareLinks.share}}
 */
ShareLinks = {
    vk: function() {
        var url = "http://vkontakte.ru/share.php?url=" + window.location.href.toString();
        ShareLinks.share(url);
    },
    facebook: function() {
        var url = "http://www.facebook.com/sharer.php?s=100&p[url]=" + window.location.href.toString();
        ShareLinks.share(url);
    },
    twitter: function() {
        var url = "https://twitter.com/intent/tweet?text=&url=" + window.location.href.toString();
        ShareLinks.share(url);
    },
    googlePlus: function() {
        // Url for share must be valid because google try load this url
        var url = "https://plus.google.com/share?url=<%=" + window.location.href.toString() + "%>";
        ShareLinks.share(url);
    },
    // Creates popup window with link to social network
    share: function(url) {
        window.open(url, "", "toolbar=0, status=1, width=600, height=400, position=center");
    }
};
/**
 * Changes the theme of the page.
 * @param theme CSS class with the theme of page.
 */
function changeTheme(theme) {
    document.body.className = theme;
}
/**
 * Shows popup.
 */
function showPopup() {
    var element = document.getElementById("popup");
    element.className = "visible-popup";
    // fade popup-element
    var op = 0.1;
    var timer = setInterval(function() {
        if(op > 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += 0.1;
    }, 25);
}
/**
 * Hides popup.
 */
function hidePopup() {
    var element = document.getElementById("popup");
    element.className = "invisible-popup";
    element.style.opacity = 0;
}
/**
 * Self-invoking anonymous function to determine the year.
 */
(function() {
    var now = new Date();
    document.getElementById("current-year").textContent = now.getFullYear().toString();
})();
/**
 * Function for a click on an element
 * @param e An element which has been clicked.
 */
document.onclick = function(e) {
    e = e || event;
    var target = e.target || e.srcElement;
    if (target.id === "popup") {
        hidePopup();
    }
};