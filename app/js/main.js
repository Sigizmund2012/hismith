jQuery( document ).ready( function ( $ ) {

	( function ( $ ) {
		var elems = $( '.jaluzi__elem' );
		$.each( elems, function () {
			var elemHeight = $( this ).height();
			var columnContent = $( this ).find( '.jaluzi__column-content' );
			columnContent.outerHeight( elemHeight );
			columnContent.addClass( 'jaluzi_skew-columns' );
			setTimeout( function () {
				columnContent.removeClass( 'jaluzi_skew-columns' );
			} ,4000);
		} );
	} )( $ );

} );