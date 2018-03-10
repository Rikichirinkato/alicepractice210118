$('#submit').click( e => {
    e.preventDefault();
    $('#userName').val('');
    $('#email').val('');
    $('#textarea').val('');
    $('#tnx').show().animate({ 
        opacity: 1
    },2000);
    $('#tnx').show().animate({ 
        opacity: 0
    },2000);
})