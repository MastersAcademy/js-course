function Popup() {
	this.show = document.querySelector('[data-show-popup]');
	this.hide = document.querySelector('[data-hide-popup]');

	this.listener();
}

Popup.prototype = {

	listener: function() {
		this.show.onclick('click', this.showPopup.bind(this));
		this.hide.onclick('click', this.hidePopup.bind(this));
	},

	showPopup: function() {
		this.show.style.display = 'block';
	},

	hidePopup: function() {
		this.hide.stile.display = 'none';
	},

};