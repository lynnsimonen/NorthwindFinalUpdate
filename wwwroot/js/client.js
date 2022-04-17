$(function(){
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();
         //first pause the audio (in case it is still playing)
         toast.pause();
         //reset the audio
         toast.currentTime = 0;
        //play audio
        toast.play();
        $('#toast').toast({ autohide: false }).toast('show');

     // Display the discount code name and discount code in the toast (use data- attributes)
     $('#product').html($(this).data('product'));
     $('#code').html($(this).data('code'));    

    });
 

    //Close the toast when the user presses Escape:
    $(document).on('keyup', function(e) {
        if (e.key === "Escape") {
            $('#toast').toast('hide');
        }    
    });
});


