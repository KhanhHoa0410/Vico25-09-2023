// slick-news
$('.slide-news').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button class="chevron-prev"><i class="fa-solid fa-arrow-right-long fa-rotate-180 fa-lg" style="color: #10506c;"></i></button>',
    nextArrow: '<button class="chevron-next"><i class="fa-solid fa-arrow-right-long fa-lg" style="color: #10506c;"></i></button>',
})


//Back to top
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// slick-people
$(document).ready(function(){
    $('.slide-people').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button class="chevron-prev"><i class="fa-solid fa-chevron-right fa-rotate-180 fa-sm"></i></button>',
        nextArrow: '<button class="chevron-next"><i class="fa-solid fa-chevron-right fa-sm"></i></button>',
    });
    
    
    //Slick Banner
    $('.list-item').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: false,
        pauseOnHover: true,
        autoplaySpeed: 2000,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    })
        .on('afterChange', function (event, slick, currentSlide) {
            var currentItem = $(slick.$slides[currentSlide]);
            var currentValue = currentItem.find('input').val();
            $('.list-item').css({
                'background-image': 'url(' + currentValue + ')',
                'opacity': '1'
            });
        });
    $('.banner-item').mouseenter(function () {
        $('.slick').slick('slickPause');
        var imageURL = $(this).find('input').val();
        $('.list-item').css('background-image', 'url(' + imageURL + ')');
        $('.slick-slide').removeClass('slick-current');
        $(this).closest('.slick-slide').addClass('slick-current');
    });
    $('.banner-item').mouseleave(function () {
        $('.slick').slick('slickPlay');
    });
    
})
