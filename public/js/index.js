$(document).ready(function() {
    $('#tab3').on('click', function() {
        console.log('hello');
    });
    $('.sidebar-toggler').on('click', function() {
        $('.sidebar').toggleClass('sidebar-collapse')
        $('.page-container').toggleClass('sidebar-collapse')
        $('.navbar').toggleClass('navbar-expanded')
    })
    $('.navbar-toggler').on('click', function() {
        $('.sidebar').toggleClass('sidebar-collapse')
        $('.page-container').toggleClass('sidebar-collapse')
        $('.navbar').toggleClass('navbar-expanded')
    })
});