$(document ).ready(function() {

    $('.carousel').carousel({
        interval: 3000
    });

    $('.pp').click(function() {
        var lien = $(this).find('img').attr('src');
        console.log('test  '+lien);
        $('#myModal img').attr('src', lien);
        $('#myModal').modal();
    });

});