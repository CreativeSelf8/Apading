$(document).ready(function() {
    $('.sidebar-toggler').on('click', function() {
        $('.sidebar').toggleClass('sidebar-collapse')
        $('.page-container').toggleClass('page-expanded')
        $('.navbar').toggleClass('navbar-expanded')
    })
    $('.navbar-toggler').on('click', function() {
        $('.sidebar').toggleClass('sidebar-collapse')
        $('.page-container').toggleClass('page-expanded')
        $('.navbar').toggleClass('navbar-expanded')
    })
});