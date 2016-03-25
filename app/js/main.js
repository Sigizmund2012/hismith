jQuery( document ).ready( function ( $ ) {

	( function ( $ ) {
		var elems = $( '.jaluzi__elem' );
		$.each( elems, function () {
			var elemHeight = $( this ).height();
			var columnContent = $( this ).find( '.jaluzi__column-content' );
			columnContent.outerHeight( elemHeight );
			/*$( this ).hover(
				function ( e ) {
				columnContent.removeClass( 'jaluzi_animate-back' ).addClass( 'jaluzi_animate-forward' );
			},
				function ( e ) {
				columnContent.removeClass( 'jaluzi_animate-forward' ).addClass( 'jaluzi_animate-back' );
					setTimeout( function backRemove() {
						columnContent.removeClass( 'jaluzi_animate-back' );
					} ,1000);
			} );*/
		} );
	} )( $ );

} );