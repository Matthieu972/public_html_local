/**
 * Created by abdel-latifmabrouck on 03/01/2017.
 */
$(document ).ready(function() {

    function clearconsole() {
        console.log(window.console);
        if(window.console || window.console.firebug) {
            console.clear();
        }
    }


    console.log("Front ready!");
    $('body').on('click','#id_albums', function(e) {
        e.preventDefault(); // J'empêche le comportement
        var id_album = $(this).find("a").attr('href');

        console.log(id_album);
        $.ajax({
            url : lien+'C_participation',
            type : 'POST',
            data: {id:id_album},
            success : function(data){
                //clearconsole();
                if (data){
                    var $page_data = $(data);

                    $('#containerlist').html($page_data.find('div#listPhotos'));
                }

                //$('#contentPage').append(code_html);
                //var $page_data = $(data);
                //$('#containerOffre').html($page_data.find('div#bodyOffre'));
                //var $page_data = $(data);
                //$('#containerOffre').html($page_data.find('div#bodyOffre'));
            }
        });
    });


    $("#uploadimage").on('submit',(function(e) {
        e.preventDefault();
        var url = lien+'C_participation/upload_file';
        var arrInputs = $("[name='file']").val();
        console.log(arrInputs);
        $.ajax({
            url: url, // Url to which the request is send
            type: "POST",             // Type of request to be send, called as method
            data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
            contentType: false,       // The content type used when sending data to the server.
            cache: false,             // To unable request pages to be cached
            processData:false,        // To send DOMDocument or non processed data file it is set to false
            success: function(data)   // A function to be called if request succeeds
            {
                location.reload();
            }
        });
    }));


    //bouton pour participation
    $('#bt_participer').click(function () {
        var link = $('#myModal img').attr('src');
        var url = lien+'C_participation/participer';
        console.log(link);
        $.ajax({
            url: url, // Url to which the request is send
            type: "POST",             // Type of request to be send, called as method
            data: {link:link}, // To send DOMDocument or non processed data file it is set to false
            success: function(data)   // A function to be called if request succeeds
            {
                console.log(data);
            }
        });
    });
/*
    $('.html_popup').popup({
        content : '<h1>This is some HTML</h1>',
        type : 'html'
    });*/

/*
    for (var i = 0; i < arrInputs.length; i++) {
        var oInput = arrInputs[i];
        if (oInput.type == "file") {
            var sFileName = oInput.value;
            if (sFileName.length > 0) {
                var blnValid = false;
                for (var j = 0; j < _validFileExtensions.length; j++) {
                    var sCurExtension = _validFileExtensions[j];
                    if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                        blnValid = true;
                        break;
                    }
                }

                if (!blnValid) {
                    alert("Sorry, " + sFileName + " is invalid, allowed extensions are: " + _validFileExtensions.join(", "));
                    return false;
                }
            }
        }
    }


/*
    $("#uploadimage").on('submit',(function(e) {
        e.preventDefault();
        var url = lien+'/participation/upload_file';
        $.ajax({
            url: url, // Url to which the request is send
            type: "POST",             // Type of request to be send, called as method
            data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
            contentType: false,       // The content type used when sending data to the server.
            cache: false,             // To unable request pages to be cached
            processData:false,        // To send DOMDocument or non processed data file it is set to false
            success: function(data)   // A function to be called if request succeeds
            {

            }
        });
    }));*/


    $('body').on('submit','#uploadPhoto', function(e) {
        e.preventDefault();

        var url = lien+'participation/upload_file';
        var linkImage = document.getElementById('file').files[0];
        console.log(url);
        $.ajax({
            url: url,
            type : 'POST',
            dataType : 'json',
            data: {lien:linkImage},
            success: function (res) {
                console.log(res);
            },
            error: function (error) {
                console.log(error);
            }
        }); // End: $.ajax()

    });
});
