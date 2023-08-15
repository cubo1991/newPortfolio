window.onload = function() {
window.addEventListener('scroll', function() {
    var divs = document.querySelectorAll('.centerDiv');
    divs.forEach(function(div) {
        var divPosition = div.getBoundingClientRect();
        var windowHeight = window.innerHeight;
        if (divPosition.top >= 0 && divPosition.bottom <= windowHeight) {
            div.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    });
})};