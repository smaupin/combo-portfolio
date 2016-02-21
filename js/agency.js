/*!
 * Agency v1.0.x (http://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
});

// my functions
// when you click 'Software-Side' button, Software-Side class shows and artwork-side class hides
$('.sw-btn').click(function() {
	$('.artwork-side').hide();
	$('.software-side').show();
    $('.sw-btn').addClass('active');
    $('.aw-btn').removeClass('active');
});

// when you click 'Artwork-Side' button, Artwork-Side class shows and software-side class hides
$('.aw-btn').click(function() {
	$('.software-side').hide();
	$('.artwork-side').show();
    $('.aw-btn').addClass('active');
    $('.sw-btn').removeClass('active');
});