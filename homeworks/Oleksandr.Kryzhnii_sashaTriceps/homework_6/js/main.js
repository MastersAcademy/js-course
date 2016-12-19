var App = {

	init: function() {

		this.currentDate();
		this.changeTheme();
	},

	currentDate: function() {
		var date = new Date();
		document.getElementById('year').textContent = date.getFullYear().toString();
	},

	changeTheme: function() {
		document.querySelector('[data-theme-dark]').addEventListener('click', function() {
			document.body.className = 'dark';
		});
		document.querySelector('[data-theme-light]').addEventListener('click', function() {
			document.body.className = 'light';
		});
	}
};
App.init();