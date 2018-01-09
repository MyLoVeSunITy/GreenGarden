jQuery(document).ready(function() {
  	$(window).load(function() {
   	// will first fade out the loading animation 
    	$("#status").fadeOut("slow"); 
    	// will fade out the whole DIV that covers the website. 
    	$("#preloader").delay(500).fadeOut("slow").remove();      
  	}) 
	var finalDate = '2018/02/09';
	$('div.counter').countdown(finalDate)
   	.on('update.countdown', function(event) {
   		$(this).html(event.strftime('<div class="days-wrapper"><span class="days">%D</span><br>Дней</div>' + 
   										 	 '<div class="hours-wrapper"><span class="hours">%H</span><br>Часов</div>' + 
   										 	 '<div class="minutes-wrapper"><span class="minutes">%M</span><br>минут</div>' +
   										 	 '<div class="seconds-wrapper"><span class="seconds">%S</span><br>секунд</div>'));
   });  
});
