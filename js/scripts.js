$(document).ready(function() {
  $('.animated-icon1,.animated-icon3,.animated-icon4').click(function() {
    $(this).toggleClass('open');
  });
});

//For the navbarSupportedContent23
$(document).ready(function() {
  var scrollTop = 0;
  $(window).scroll(function() {
    scrollTop = $(window).scrollTop();
    $('.counter').html(scrollTop);

    if (scrollTop >= 100) {
      $('#global-nav').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('#global-nav').removeClass('scrolled-nav');
    }
  });
});

$(document).ready(function() {
  var $nav = $("#global-nav");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});

//This is for theother navbar supportedcontent23
$(document).ready(function() {
    var scrollTop = 0;
    $(window).scroll(function() {
        scrollTop = $(window).scrollTop();
        $('.counter').html(scrollTop);

        if (scrollTop >= 100) {
            $('#global-nav1').addClass('scrolled-nav');
        } else if (scrollTop < 100) {
            $('#global-nav1').removeClass('scrolled-nav');
        }
    });
});

$(document).ready(function() {
    var $nav = $("#global-nav1");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});

//This is for the map marker
var map, infoWindow, marker, position;
     function initMap() {
       map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: -1.28333, lng:  36.81667},
         zoom: 6

       });
       //This will be for placing the marker on the specified place on a marker.
       var center = {lat: -1.28333, lng:  36.81667};
       marker = new google.maps.Marker({
         position: center,
         map: map,
         title: 'Pixie Dust'
       });
       infoWindow = new google.maps.InfoWindow;

       // Try HTML5 geolocation.
       if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
           var pos = {
             lat: position.coords.latitude,
             lng: position.coords.longitude
           };

           infoWindow.setPosition(pos);
           infoWindow.setContent('Your location');
           infoWindow.open(map);
           map.setCenter(pos);
         }, function() {
           handleLocationError(true, infoWindow, map.getCenter());
         });
       } else {
         // Browser doesn't support Geolocation
         handleLocationError(false, infoWindow, map.getCenter());
       }
     }

     function handleLocationError(browserHasGeolocation, infoWindow, pos) {
       infoWindow.setPosition(pos);
       infoWindow.setContent(browserHasGeolocation ?
                             'Error: The Geolocation service failed.' :
                             'Error: Your browser doesn\'t support geolocation.');
       infoWindow.open(map);
     }
