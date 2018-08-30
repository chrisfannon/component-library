( function( ns ) {
  ns.fields = document.querySelectorAll( '.c-field' );
  ns.fields.forEach( function( field ) {
    field.addEventListener( 'focusin', function( evt ) {
      this.classList.add( 'focused' );
    });
    field.addEventListener( 'focusout', function( evt) {
      this.classList.remove( 'focused' );
    });
  });
})( window.SG = window.SG || {} );