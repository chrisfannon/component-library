var SG = SG || {};
SG.select = (function() {
  
  var whichTransitionEvent = function() {
    var t;
    var el = document.createElement( 'fakeelement' );
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    };
    
    for ( t in transitions ) {
      if ( el.style[ t ] !== undefined ) {
        return transitions[ t ];
      }
    }
  }
  
  var whichAnimationEvent = function() {
    var t;
    var el = document.createElement( 'fakeelement' );
    var animations = {
      'animation':'animationend',
      'OAnimation':'oAnimationEnd',
      'MozAnimation':'animationend',
      'WebkitAnimation':'webkitAnimationEnd'
    };
    
    for ( t in animations ) {
      if ( el.style[ t ] !== undefined ) {
        return animations[ t ];
      }
    }
  }
  
  //Private
  var transitionEvent = whichTransitionEvent();
  var animationEvent = whichAnimationEvent();
  var selectElems = document.querySelectorAll( '.c-select' );
  
  selectElems.forEach( function( element ) {
    
    // create a wrapper element with the correct class.
    var wrapper = document.createElement('div');
    wrapper.setAttribute("class", "c-select__wrapper" );
    
    // Find the select element.
    var elem = element.querySelector( 'select' );
    
    // Insert the wrapper just before the select element.
    elem.parentNode.insertBefore( wrapper, elem );
    
    // Move the select element as a child of the wrapper.
    wrapper.appendChild( elem );
    
    // Create the fake interface of the select buttons
    var faker = document.createElement( 'span' ),
    label = document.createElement( 'span' ),
    iconWrapper = document.createElement( 'span' ),
    icon = document.createElement( 'i' ),
    option = document.createTextNode( elem[ elem.selectedIndex ].label );
    faker.setAttribute( 'class', 'c-select__fake' );
    faker.setAttribute( 'aria-hidden', 'true' );
    label.setAttribute( 'class', 'c-select__fake__label' );
    iconWrapper.setAttribute( 'class', 'c-select__fake__icon' );
    icon.setAttribute( 'class', 'fas fa-caret-down' );
    iconWrapper.appendChild( icon );
    label.appendChild( option );
    faker.appendChild( label );
    faker.appendChild( iconWrapper );
    
    wrapper.appendChild( faker );
    
    // Update the fake interface with the real value.
    elem.addEventListener( 'change', function( evt ) {
      option.textContent = evt.target[ this.selectedIndex ].label;
      element.classList.add( 'change' );
    });
    
    elem.addEventListener( 'focusin', function( evt ) {
      element.classList.add( 'focus' );
    });
    
    elem.addEventListener( 'focusout', function( evt ) {
      element.classList.remove( 'focus' );
    });
    
    //document.addEventListener( transitionEvent, function( evt ) {
    //  console.log( "Transition complete!", evt.target, evt.propertyName );
    //});
    
    document.addEventListener( animationEvent, function( evt ) {
      //console.log( "Animation complete!", evt.target );
      element.classList.remove( 'change' );
    });
  });
  
  // Public 
  return { 
    
  };
})();