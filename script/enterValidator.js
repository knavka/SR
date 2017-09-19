jQuery(document).ready(function($){






$.fn.forceСirillicOnly = function() {
    return this.each(function()
    {
        
        $(this).keypress(function(e)
        {

// console.log(e.which);
         if ((e.which>=1040&& e.which<=1105) || e.which==1031 || e.which==1111 || e.which==1030 || e.which==1110 || e.which==8208 || e.which==45 || e.which==32)   {
            if ( e.which==32&&!this.value) {
                $(this).parent().addClass("incorrect").removeClass("correct");
         return false;
            }
         $(this).removeClass('invalid')
         $(this).parent().addClass("correct").removeClass("incorrect");
         return true; 
         }
         else  {
         $(this).parent().addClass("incorrect").removeClass("correct");
         return false;
           }
           
           });

    });
};


$('#input_surname').forceСirillicOnly();


$.fn.forceAge = function() {
    return this.each(function()
    {
        
        $(this).keypress(function(e)
        {

         if ((e.which>=48&& e.which<=57)&&this.value.length<2)   {
         if ( e.which==48&&!this.value) {
                $(this).parent().addClass("incorrect").removeClass("correct");
         return false;
            }
         $(this).removeClass('invalid')
         $(this).parent().addClass("correct").removeClass("incorrect");
         return true; 
         }
         else  {
         $(this).parent().addClass("incorrect").removeClass("correct");
         return false;
           }
           
           });

    });
};

$('#input_age').forceAge();




$.fn.forceEmail = function() {
    return this.each(function()
    {
        
        $(this).keypress(function(e)
        {

         if ((e.which>=65&& e.which<=90)||(e.which>=97&& e.which<=122)||(e.which>=1040&& e.which<=1105)  || e.which==1031 || e.which==1111 || e.which==1030 || e.which==1110 || e.which==8208 || e.which==45|| e.which==46 || e.which==64 || e.which==95 ||  (e.which>=48 && e.which<=57) )   {
         $(this).removeClass('invalid')
         $(this).parent().addClass("correct").removeClass("incorrect");
         return true; 
         }
         else  {
         $(this).parent().addClass("incorrect").removeClass("correct");
         return false;
           }
           
           
           });

    });
};

$('#input_email').forceEmail();



});

