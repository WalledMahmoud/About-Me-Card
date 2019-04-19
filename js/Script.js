/*global $, console, JQuery,*/


$(function () {
    
    "use strict";
    
    $("#pause, #play").hide();
   
    $(window).load(function () {
        
        $("#pause").show();
        document.getElementById("sound").muted = false;
         
        $("#pause").click(function () {
               
            document.getElementById("sound").muted = true;
                
            $(this).css({
                   
                display: 'none'
            });
                
            $("#play").css({
                   
                display: 'inline-block'
            });
            
        });
            
        $("#play").click(function () {
                
               
            document.getElementById("sound").muted = false;
                
            $(this).css({
                    
                display: 'none'
            });
                
            $("#pause").css({
                   
                display: 'inline-block'
            });
        });
                
        
    });
    
});