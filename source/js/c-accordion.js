var SG = SG || {};
SG.accordion = (function() {
  
  // private methods.
  var a = document.querySelectorAll( '.c-block__accordion' );
  var accordions = [];
  
  // Retrieve an accordion by it's title element.
  var getAccordionByTitle = function( titleElem ) {
    
    for( var i = 0; i < accordions.length; i++ ) {
      for ( var j = 0; j < accordions[ i ].length; j++ ) {
        if ( accordions[ i ][ j ].title === titleElem ) {
          return accordions[ i ][ j ];
        }
      }
    }
    return false;
    
  };
  
  // Toggle the content associated with a clicked title.
  var toggleAccordionItem = function( evt ) {
    
    var acc = getAccordionByTitle( evt.target );
    acc.title.classList.contains( "focus" ) ? acc.title.classList.remove( "focus" ) : acc.title.classList.add( "focus" );
    acc.content.classList.contains( "open" ) ? acc.content.classList.remove( "open" ) : acc.content.classList.add( "open" );
    if ( acc.icon.classList.contains( "fa-plus" ) ) {
      acc.icon.classList.remove( "fa-plus" ); 
      acc.icon.classList.add( "fa-minus");
    } else {
      acc.icon.classList.remove( "fa-minus" );
      acc.icon.classList.add( "fa-plus" );
    }
    evt.preventDefault();
    
  };
  
  // Loop through every accordion on the page.
  a.forEach( function( elem, accordionIndex ) {
    
    // Tag the accoridon with a class indicating that javascript is available.
    elem.classList.add( 'use--js' );
    
    // Find the items of the current accordion.
    var items = elem.querySelectorAll( '.c-block__accordion-item' );
    
    // Tag the accordion.
    elem.setAttribute( 'data-accordion-id', accordionIndex );
    
    // Create space to save the accordion parts in our data.
    accordions[ accordionIndex ] = [];
    
    // Loop through each item of the accordion.
    items.forEach( function( item, itemIndex ) {
      
      // Find each part of the accordion
      var title = item.querySelector( '.c-block__accordion-item__title' );
      var content = item.querySelector( '.c-block__accordion-item__content' );
      //var icon = title.getElementsByTagName( "i" )[0];
      
      // Wrap the title text in a span
      var span = document.createElement( 'span' );
      var spanText = document.createTextNode( title.text );
      title.text = "";
      span.appendChild( spanText );
      title.appendChild( span );
      
      // Add the necessary icons.
      var icon = document.createElement("i");
      icon.setAttribute('class', 'fas fa-plus');
      title.appendChild( icon );
      
      // Store the accordion item parts.
      accordions[ accordionIndex ][ itemIndex ] = {};
      accordions[ accordionIndex ][ itemIndex ][ "title" ] = title;
      accordions[ accordionIndex ][ itemIndex ][ "content" ] = content;
      accordions[ accordionIndex ][ itemIndex ][ "icon" ] = icon;
      
      // Add event listener to title.
      title.addEventListener( 'click', toggleAccordionItem );
    });
  });
  
  console.log( accordions );
  
  // public methods.
  return {
    
  }
})();