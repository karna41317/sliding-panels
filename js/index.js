var Panels = (function() {

	var panelLeft = document.querySelector('.panel--left');
	var panelRight = document.querySelector('.panel--right');

	var openLeft = function() {
		panelLeft.classList.toggle('panel--left-active');
		panelRight.classList.toggle('panel--right-hidden');
	};

	var openRight = function() {
		panelRight.classList.toggle('panel--right-active');
		panelLeft.classList.toggle('panel--left-hidden');
	};

	var bindActions = function() {
		panelLeft.addEventListener('click', openLeft, false);
		panelRight.addEventListener('click', openRight, false);
	};

	var init = function() {
		bindActions();
	};

	return {
		init: init
	};

}());

Panels.init();