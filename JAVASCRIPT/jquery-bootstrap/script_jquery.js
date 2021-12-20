$(function() {
    $('#btn1').click(function() {
        $('#title').fadeOut();       
        $('#msg') 
            .fadeIn('slow')
            .text("Escondeu texto")
            .fadeOut('slow');       
    })
    
    $('#btn2').click(function() {
        $('#title').fadeIn('slow'); 
        $('#msg')
            .fadeIn('slow')
            .text("Mostrou texto")
            .fadeOut('slow');       
    })
    
    $('#btn3').click(function() {
        $('#title').css("color","red");       
        $('#msg')
            .fadeIn('slow')
            .css({color:'red'})
            .text("Mudou cor para Vermelho")
            .fadeOut('slow');       
        })
        
        $('#btn4').click(function() {
            $('#title').css("color","green");            
            $('#msg')
            .fadeIn('slow')
            .css({color:'green'})
            .text("Mudou cor para Verde")
            .fadeOut('slow');       
    })
    
})