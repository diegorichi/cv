$(function() {

		var stop = false;
		$( "#accordion h3" ).click(function( event ) {
			if ( stop ) {
				event.stopImmediatePropagation();
				event.preventDefault();
				stop = false;
			}
		});
		$( "#accordion" )
			.accordion({
				header: "> div > h3",
				collapsible : true,
				autoHeight : false				
			})
			.sortable({
				axis: "y",
				handle: "h3",
				stop: function() {
					stop = true;
				}
			});
});

function showAll(){
		$.each($("#accordion div h3"), function (key, value){
			$(value).next().show();
		});
}

$(document).ready(function(){
    $('#switcher').themeswitcher({
		initialText: 'Cambiar Tema',
		buttonPreText: 'Tema: ',
		width: 150,
		height: 200,
		closeOnSelect: true,
		buttonHeight: 14,
		cookieName: 'jquery-ui-theme'
	});

	$('.button').button();

	$('#showall').click(showAll);
	
	$('#hideall').click(function() {
		$.each($("#accordion div h3"), function (key, value){
			$(value).next().hide();
		});
	});
	
	$('#print').click(function() {
		showAll();
		window.print();
	});

	$('#download-pdf').click(function(){
		window.location.href='formats/Ing Diego Richi - Curriculum Vitae.pdf';
	});

	$('#download-doc').click(function(){
		window.location.href='formats/Ing Diego Richi - Curriculum Vitae.doc';
	});

	
	$("h3").attr("title","Arrastre para ordenar");

});

$(document).ready(function() {
	$(".dialog").hide();
	$("#info-pers").click(function() {
		$("#info-pers-dialog").toggle("fold", null, 500);
		$("#info-pers .more-details").toggleClass('minus-details', 0);
	});
	
	$("#educ-info").click(function() {
		$("#educ-info-dialog").toggle("fold", null, 500);
		$("#educ-info .more-details").toggleClass('minus-details', 0);
	});

	$("#info-cont").click(function() {
		$("#info-cont-dialog").toggle("fold", null, 500);
		$("#info-cont .more-details").toggleClass('minus-details', 0);
	});
	$("#epet-info").click(function() {
		$("#epet-info-dialog").toggle("fold", null, 500);
		$("#epet-info .more-details").toggleClass('minus-details', 0);
	});
	$("#congresos-info").click(function() {
		$("#congresos-info-dialog").toggle("fold", null, 500);
		$("#congresos-info .more-details").toggleClass('minus-details', 0);
	});
	

	$("#hacienda").wTooltip({ 
	    	 ajax: 'tt/hacienda.html',
	    	 fadeIn: 600, 
	    	 clazz: 'tooltip',
	    	 follow: true
		/*does tooltip follow the cursor? 
	    	    auto: true, //If false, tooltip won't automatically transition, it must be manually shown/hidden 
	    	    fadeIn: 0, //fade in, in milliseconds ("fast, "slow", etc may also be used) 
	    	    fadeOut: 0, //fade out, in milliseconds ("fast, "slow", etc may also be used) 
	    	    appendTip: document.body, //should probably not need to be overridden 
	    	    degrade: false, //if true, in IE6 tooltip will degrade to a title attribute message 
	    	    offsetY: 10, //offsetY and offsetX properties designate position from the cursor 
	    	    offsetX: 1, 
	    	    
	    	    */
	}); 
	
	$("#arba").wTooltip({ 
	    	 ajax: "tt/arba.html",
	    	 fadeIn: 600, 
	    	 clazz: "tooltip",
	    	 follow: true 
	}
	);
	
	$("#angras").wTooltip({ 
	    	 ajax: "tt/angras.html",
	    	 fadeIn: 600, 
	    	 clazz: "tooltip",
	    	 follow: true 
	}
	);

});