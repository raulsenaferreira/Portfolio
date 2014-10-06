astros = {};

jQuery(document).ready( function(){
	astros.paralax.init();
});




astros.paralax = {};

astros.paralax.init=function(){

	astros.paralax.pipoca1 = jQuery('#conteudo .pipoca1');
	astros.paralax.pipoca2 = jQuery('#conteudo .pipoca2');
	astros.paralax.pipoca3 = jQuery('#conteudo .pipoca3');
	astros.paralax.pipoca4 = jQuery('#conteudo .pipoca4');
	astros.paralax.fundo = jQuery('#conteudo');

	astros.paralax.pipoca1.data('espacotop',astros.paralax.pipoca1.position().top);
	astros.paralax.pipoca2.data('espacotop',astros.paralax.pipoca2.position().top);
	astros.paralax.pipoca3.data('espacotop',astros.paralax.pipoca3.position().top);
	astros.paralax.pipoca4.data('espacotop',astros.paralax.pipoca4.position().top);
	
	astros.paralax.fundo.mousemove(function(event) {
		var largura_fundo = (astros.paralax.fundo.height()/2);
		
		var pos = event.pageY - astros.paralax.fundo.position().top - largura_fundo;
		var pospop1 = astros.paralax.pipoca1.data('espacotop') + (pos/70);
		var pospop2 = astros.paralax.pipoca2.data('espacotop') + (pos/30);
		var pospop3 = astros.paralax.pipoca3.data('espacotop') + (pos/15);
		var pospop4 = astros.paralax.pipoca4.data('espacotop') + (pos/5);

		astros.paralax.pipoca1.css({"top": pospop1});
		astros.paralax.pipoca2.css({"top": pospop2});
		astros.paralax.pipoca3.css({"top": pospop3});
		astros.paralax.pipoca4.css({"top": pospop4});

	});


}
