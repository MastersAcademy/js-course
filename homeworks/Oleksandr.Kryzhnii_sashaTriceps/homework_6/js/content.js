function Content() {
	this.listenEvents();
}

Content.prototype = {

	listenEvents: function() {
		document.ondblclick('dblclick', this.changeText.bind(this));
	},

	changeText: function(event) {
		var element = event.target;

		if (element.classList.contains('edit')) {
			var text = document.createElement('input');
		}

		text.value = element.textContent;
		element.textContent = '';
		element.appendChild(text);
		text.focus();

		text.onblur = function() {
			element.textContent = text.value;
		}
	}
};
