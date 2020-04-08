// CUSTOM JAVASCRIPT

/*
	Smooth scroll functionality for anchor links (animates the scroll
	rather than a sudden jump in the page)
*/
$('.track').click(function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length){
      var scrollTo = target.offset().top;
      $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
    }
});

function buttonsShare(){    
  
  var shareButtons = document.querySelectorAll(".button-share-media.popup-media");

  if (shareButtons) {
      [].forEach.call(shareButtons, function(button) {
          button.addEventListener("click", function(event) {
              var width = 650,
                  height = 450;
  
              event.preventDefault();
  
              window.open(this.href, 'Share Dialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width='+width+',height='+height+',top='+(screen.height/2-height/2)+',left='+(screen.width/2-width/2));
          });
      });
  }

}

function buttonGoTop(){ 
  var btn = $('#buttonGoTop');
  
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
}

buttonGoTop();

$(document).ready(function(){
  buttonsShare();

  //$('#modalForm').modal('show')
  $('#modalNota0704').modal('show')
});



