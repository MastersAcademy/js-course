/**
 * Object with links for sharing to social network.
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
        // Url for share must be valid because google try load this url.
        var url = "https://plus.google.com/share?url=" + window.location.href.toString();
        ShareLinks.share(url);
    },
    // Creates popup window with link to social network.
    share: function(url) {
        window.open(url, "", "toolbar=0, status=1, width=600, height=400, position=center");
    }
};
/**
 *
 * @type {{name: Content.name, post: Content.post, info: Content.info, phone: Content.phone, skype: Content.skype, email: Content.email, address: Content.address, fb_url: Content.fb_url, fb_nickname: Content.fb_nickname, vk_url: Content.vk_url, vk_nickname: Content.vk_nickname, jsonData: string}}
 */
Content = {
    name: function() {
        return this.jsonData.name;
    },
    post: function() {
        return this.jsonData.post;
    },
    info: function() {
        return this.jsonData.info;
    },
    phone: function() {
        return this.jsonData.phone;
    },
    skype: function() {
        return this.jsonData.skype;
    },
    email: function() {
        return this.jsonData.email;
    },
    address: function() {
        return this.jsonData.address;
    },
    fb_url: function() {
        return this.jsonData.fb_url;
    },
    fb_nickname: function() {
        return this.jsonData.fb_nickname;
    },
    vk_url: function() {
        return this.jsonData.vk_url;
    },
    vk_nickname: function() {
        return this.jsonData.vk_nickname;
    },
    jsonData: ""
};
/**
 * Function for click on an element.
 * @param e An element which has been clicked.
 */
document.onclick = function(e) {
    e = e || event;
    var target = e.target || e.srcElement;
    if (target.id === "popup") {
        hidePopup();
    }
};
/**
 * Function for double click on an element.
 * @param e An element which has been clicked.
 */
document.ondblclick = function(e) {
    e = e || event;
    var target = e.target || e.srcElement;
    if(target.className === "can-edit") {
        changeToInput(e.target.parentElement, e.toElement);
    }
};
/**
 * Self-invoking anonymous function to determine the year and load json-file.
 */
(function() {
    var now = new Date();
    document.getElementById("current-year").textContent = now.getFullYear().toString();
    loadJSON();
})();
/**
 * Replace the element on "input" and set unfocused function to him.
 * @param parentElement Element of all parent block.
 * @param element Element which must be replaced.
 */
function changeToInput(parentElement, element) {
    // console.log(element);
    var newElement = document.createElement("input");
    newElement.className = "input-edit";
    newElement.value = element.textContent;
    parentElement.replaceChild(newElement, element);
    newElement.focus();
    verticalAlignPicture();
    // Closure parameters:
    newElement.onblur = function() {
        // Save value from "input".
        element.textContent = newElement.value;
        // Replace the input to old element.
        parentElement.replaceChild(element, newElement);
        verticalAlignPicture();
    }
}
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
    // Fade popup-element.
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
 * Load local json-file.
 */
function loadJSON() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.overrideMimeType("application/json");
    httpRequest.open('GET', 'data/data.json', true);
    httpRequest.onreadystatechange = function() {
        // After load data(json-file):
        if(httpRequest.readyState == 4 && httpRequest.status == "200") {
            // Parse json-file.
            Content.jsonData = JSON.parse(httpRequest.responseText);
            // Create elements from data and displaying them.
            showData();
        }
    };
    httpRequest.send(null);
}
/**
 * Create elements from data and displaying them.
 */
function showData() {
    // Element before which inserted.
    var element = document.querySelector(".button"), el;
    beforeAddElement(element, "h1", Content.name());
    beforeAddElement(element, "h2", Content.post());
    beforeAddElement(element, "p", Content.info());
    verticalAlignPicture();
    // Element after which inserted.
    element = document.querySelector(".contact-list");
    appendElement(element, "li", "Phone number: " + Content.phone(), "can-edit");
    appendElement(element, "li", "Skype: " + Content.skype(), "can-edit");
    appendElement(element, "li", "Email: " + Content.email(), "can-edit");
    appendElement(element, "li", "Address: " + Content.address(), "can-edit");
    el = appendElement(element, "li", "Facebook: ");
    appendLink(el, Content.fb_url(), Content.fb_nickname());
    el = appendElement(element, "li", "Vkonakte: ");
    appendLink(el, Content.vk_url(), Content.vk_nickname());
}
/**
 * Create and insert an element before the current.
 * @param elementWhere Current element.
 * @param elStr The tag name to create the element.
 * @param content The data to be inserted into the created element.
 */
function beforeAddElement(elementWhere, elStr, content) {
    var element = document.createElement(elStr);
    element.textContent = content;
    element.className = "can-edit";
    elementWhere.before(element);
}
/**
 * Create and insert an element in the current element.
 * @param elementWhere Current element.
 * @param elStr The tag name to create the element.
 * @param content The data to be inserted into the created element.
 * @returns {Element} Created element.
 */
function appendElement(elementWhere, elStr, content, className) {
    var element = document.createElement(elStr);
    element.textContent = content;
    element.className = className;
    elementWhere.appendChild(element);
    return element;
}
/**
 * Inserting a link to the current element.
 * @param elementWhere Current element.
 * @param href Link.
 * @param content Caption Links.
 */
function appendLink(elementWhere, href, content) {
    var element = document.createElement("a");
    element.className = "link";
    element.target = "_blank";
    element.href = href;
    element.textContent = content;
    elementWhere.appendChild(element);
}
/**
 * Align image vertically with respect to the text-block.
 */
function verticalAlignPicture() {
    document.querySelector(".content").style.lineHeight = document.querySelector(".information").offsetHeight.toString() + "px";
}