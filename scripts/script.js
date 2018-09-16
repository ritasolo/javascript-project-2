$(function() {
      console.log("ready!");
      $(".circle").hide();
      $('form').hide();
      $('form').on('submit', function(event) {
            event.preventDefault();
            $('#chillOption').removeClass('hidden');
            $('.container').addClass('hidden');
            $('img').addClass('hidden');
            $('.buttonDiv').html(`<input type="reset" value="redo" class="resetButton">`);
            $('footer').html(``);

            const userFeel = $('input[name=feeling]:checked').val();
            const userMovement = $('input[name=movement]:checked').val();
            const userLength = $('input[name=length]:checked').val();

            if (userFeel === 'lethargic' && userMovement === 'sit' && userLength === 'long') {
            $('#chillOption').html(`<iframe src="https://www.youtube.com/embed/HpHKf4tlvFw"></iframe>`)
            } else if (userFeel === 'lethargic' && userMovement === 'moveSlow' && userLength === 'long') {
            $('#chillOption').html(`<iframe src="https://www.youtube.com/embed/bofQabiS3C4"></iframe>`)
            } else if (userFeel === 'lethargic' && userMovement === 'moveFast' && userLength === 'long') {
            $('#chillOption').html(`<iframe src="https://www.youtube.com/embed/sirRG5zJ4K8"></iframe>`)
            } else if (userFeel === 'anxious' && userMovement === 'sit' && userLength === 'long') {
            $('#chillOption').html(`<iframe src="https://www.youtube.com/embed/MRrWiebVQmI"></iframe>`)
            } else if (userFeel === 'anxious' && userMovement === 'moveSlow' && userLength === 'long') {
            $('#chillOption').html(`<iframe src="https://www.youtube.com/embed/PaA7c0dZ1DI"></iframe>`)
            } else if (userFeel === 'anxious' && userMovement === 'moveFast' && userLength === 'long') {
            $('#chillOption').html(`<iframe src="https://www.youtube.com/embed/hJbRpHZr_d0"></iframe>`)
            } else if (userFeel === 'stressed' && userMovement === 'sit' && userLength === 'long') {
            $('#chillOption').html(`<iframe src="https://www.youtube.com/embed/CNgNzunfSSE"></iframe>`)
            } else if (userFeel === 'stressed' && userMovement === 'moveSlow' && userLength === 'long') {
            $('#chillOption').html(`<iframe src="https://www.youtube.com/embed/pU8V70yRW-w"></iframe>`)
            } else if (userFeel === 'stressed' && userMovement === 'moveFast' && userLength === 'long') {
            $('#chillOption').html(`<iframe src="https://www.youtube.com/embed/tE70XhKhWMM"></iframe>`) 
            } else if (userFeel === 'lethargic' && userMovement === 'sit' && userLength === 'short') {
            $('#chillOption').html(`<iframe width="720" height="405" src="https://www.youtube.com/embed/?listType=playlist&list=PLO9OtUmChpP9F8J-nwpWqCtTSA6QXjuua" frameborder="0" allowfullscreen>`)
            } else if (userFeel === 'lethargic' && userMovement === 'moveSlow' && userLength === 'short') {
            $('#chillOption').html(`<iframe src="https://www.youtube.com/embed/Sxddnugwu-8"></iframe>`)
            } else if (userFeel === 'lethargic' && userMovement === 'moveFast' && userLength === 'short') {
            $('#chillOption').html(`<iframe src="https://www.youtube.com/embed/D9q5WsMk4ro"></iframe>`)
            } else if (userFeel === 'anxious' && userMovement === 'sit' && userLength === 'short') {
            $('#chillOption').html(`<iframe src="https://www.youtube.com/embed/xoYnqvadurg"></iframe>`)
            } else if (userFeel === 'anxious' && userMovement === 'moveSlow' && userLength === 'short') {
            $('#chillOption').html(`<iframe src="https://www.youtube.com/embed/Enz98dDXQfY""></iframe>`)
            } else if (userFeel === 'anxious' && userMovement === 'moveFast' && userLength === 'short') {
            $('#chillOption').html(`<iframe src="https://www.youtube.com/embed/shahRHIpjeo"></iframe>`)
            } else if (userFeel === 'stressed' && userMovement === 'sit' && userLength === 'short') {
            $('#chillOption').html(`<iframe src="https://www.youtube.com/embed/GEkJMRDhvsw"></iframe>`)
            } else if (userFeel === 'stressed' && userMovement === 'moveSlow' && userLength === 'short') {
            $('#chillOption').html(`<iframe src="https://www.youtube.com/embed/OfO6BZb6A7Q"></iframe>`)
            } else if (userFeel === 'stressed' && userMovement === 'moveFast' && userLength === 'short') {
            $('#chillOption').html(`<iframe src="https://www.youtube.com/embed/2KImAarOceI"></iframe>`)
            } else {
            console.log("error")
            }

            $('.resetButton').click(function (){
                  location.reload();
            });

            $('iframe').removeClass('hidden');
            $('#chillOption').addClass('slideUp');

      });

      $( document ).on( 'keydown', function ( e ) {
            if ( e.keyCode === 27 ) { 
              $('#chillOption').hide();
              location.reload();
            }
      });	

      $('.go').click(function (){
            event.preventDefault();
            $(this).hide();
            $('form').show();
            $('#hello').html(``);
            $('#feeling').removeClass('hide');
            $('#feeling').addClass("slideRight");
            $(".circle").delay(200).fadeIn(2000);
      });

      $('#feeling input').click(function (){
            $('#movement').removeClass('hide').addClass("slideUp");
            $('#movement').addClass("slideUp");
      });


      $('#movement input').click(function (){
            $('#length').removeClass('hide');
            $('#length').addClass("slideLeft");
      });

      $('#length input').click(function (){
            $('.submitButton').removeClass('hide');
            $('.submitButton').addClass("slideUp");
      });

});