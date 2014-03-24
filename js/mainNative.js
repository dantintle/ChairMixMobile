var myScroll;

var carousel;


$(document).ready(init1);

function init1(){

    //init hammer carousel
    caro();

    scrollEm();

    activeButs();

}

function activeButs(){

	$('.footItem').on('click', function(){
		ind = $(this).index();
		carousel.showPane(ind);
		$('.footItem').removeClass('activeElem');
		$(this).addClass('activeElem');
	

	});
}

function scrollEm(){
	setTimeout(function(){

		myScroll = new IScroll('#carousel .pane2',

			 { tap: true , click:true});


		myScroll2 = new IScroll('#carousel .pane5',

			 { tap: true , click:true});


	}, 1000)
	



}

function caro(){


      carousel = new Carousel("#carousel");
    carousel.init();
}