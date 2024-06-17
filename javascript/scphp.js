$ (document).ready(function(){
    $('#comentario').click(function(){
        $.ajax({
            url: '../php/form3select.php',
            success: function(data) {
                $('#resultado').html(data);
            }
        });
    });
});