
// Slides for Main Section
(function() {

    // 首頁才有
    if (window.location.pathname === '/') {
    var mainSlides = document.querySelectorAll('#home #slides .slide');
    var currentMainSlide = 0;

    function nextSlide() {
      goToSlide(currentMainSlide + 1);
    }

    function goToSlide(n) {
      mainSlides[currentMainSlide].className = 'slide';
      currentMainSlide = (n + mainSlides.length) % mainSlides.length;
      mainSlides[currentMainSlide].className = 'slide showing';
    }

    var slideInterval = setInterval(nextSlide, 4000);
  }
}());

// Slides for Approach Section
(function() {
  // 首頁才有
  if (window.location.pathname === '/') {
    var approachSlides = document.querySelectorAll('#approach #slides .slide');
    var currentApproachSlide = 0;

    function nextSlide() {
      goToSlide(currentApproachSlide + 1);
    }

    function goToSlide(n) {
      approachSlides[currentApproachSlide].className = 'slide';
      currentApproachSlide = (n + approachSlides.length) % approachSlides.length;
      approachSlides[currentApproachSlide].className = 'slide showing';
    }

    var slideInterval = setInterval(nextSlide, 4000);
  }
}());


$(document).ready(function() {

  // Clone a #nav at top and slide it down
  var $nav = $("#nav"),
      $clone = $nav.before($nav.clone().addClass("clone"));

  $(window).on("scroll", function() {

    // #nav slide down at 720
    var fromTop = $(window).scrollTop();
    console.log(fromTop);
    if (window.location.pathname === '/') {
      $('body').toggleClass("down", (fromTop > 720));
    } else {
      $('body').toggleClass("down", (fromTop > 400));
    }

    // #popup-text-1 slide down at 1700
    $('.popup-text-1').toggleClass('up', (fromTop > 1700));
    // #popup-text-2 slide down at 1700
    $('.popup-text-2').toggleClass('up', (fromTop > 1700));
    // #popup-text-3 slide down at 1870
    $('.popup-text-3').toggleClass('up', (fromTop > 1870));
  });



  // Click nav button and move to that div
  $('#nav li a').click(function(e) {

    // 首頁才進行 scrolling
    if (window.location.pathname === '/') {
      var text = $(this).text();
      // 如果是 apply，則不 scroll
      if (text.toLowerCase() === 'apply') {
        console.log('go to apply.html');
      } else {
        e.preventDefault();
        if ($('#nav.clone.responsive')) {
          console.log('clong responsive')
          $('html, body').animate({
            scrollTop: $('#' + text.toLowerCase()).offset().top-330}, 1000);
        } else {
          $('html, body').animate({
            scrollTop: $('#' + text.toLowerCase()).offset().top-88}, 1000);
          }
        }
      }
  });

  // go-to-top button
  $('#go-to-top a').click(function(e) {
    e.preventDefault();

    $('html, body').animate({
       scrollTop: 0
     }, 1000);


  });


});

function showMenu() {
  if ($('body').attr('class') === 'down') {
    console.log("$('body').attr('class') === 'down'");
    var $nav = $('#nav');
    $nav.toggleClass('responsive');
  } else {
    var $nav = $('#nav:not(.clone');
    $nav.toggleClass('responsive');
  }
}

// Google map customizer
function initMap() {
  var myLatLng = {lat: 25.1014855, lng: 121.5340998};
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 15,
    styles: [
      {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "50"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "40"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    }
    ]
  });
  marker.setMap(map);
}
