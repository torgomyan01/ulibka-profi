const {
    afterBeforeRange
} = {
    afterBeforeRange: document.querySelectorAll('.after-before-range'),
}

afterBeforeRange.forEach((item) => {
    item.addEventListener("input", function (e){
        const value = +this.value;
        this.previousElementSibling.previousElementSibling.style.width = `${value}%`;
        this.previousElementSibling.style.width = `${100 - value} %`;

        if(value === 100 || value === 0){
            this.previousElementSibling.previousElementSibling.style.borderRight = '0';
        } else {
            this.previousElementSibling.previousElementSibling.style.borderRight = '2px solid #fff';
        }

    })
});



$('#sale-section').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('#reviews').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$(window).on('scroll', function (e){
    e.stopPropagation();

    const windowTop = $(window).scrollTop();
    console.log(windowTop)
})