$('#submit').click( e => {
    $('#tnx').show().animate({ 
        opacity: 1
    },2000);
    $('#tnx').show().animate({ 
        opacity: 0
    },2000);
});

$(function() {
    $('.smooth').on('click', function(event) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});
