$( ".js-li-1" ).click(function () {
  if ( $( ".js-ul-1" ).is( ":hidden" ) ) {
    $( ".js-ul-1" ).slideDown( "slow" );
  } else {
    $( ".js-ul-1" ).hide();
  }
});

$( ".js-li-2" ).click(function () {
  if ( $( ".js-ul-2" ).is( ":hidden" ) ) {
    $( ".js-ul-2" ).slideDown( "slow" );
  } else {
    $( ".js-ul-2" ).hide();
  }
});

$( ".js-li-3" ).click(function () {
  if ( $( ".js-ul-3" ).is( ":hidden" ) ) {
    $( ".js-ul-3" ).slideDown( "slow" );
  } else {
    $( ".js-ul-3" ).hide();
  }
  console.log("hello")
});
