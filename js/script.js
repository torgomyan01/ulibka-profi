const {
    afterBeforeRange,
    allMenuItems,
    btnToTop,
    btnCall,
    mobileMenu,
    menuMobile
} = {
    afterBeforeRange: document.querySelectorAll('.after-before-range'),
    allMenuItems: $('.menu-item'),
    btnToTop: $('.btn-to-top'),
    btnCall: $('.btn-fix-call'),
    mobileMenu: $('#menu-mobile-open-close'),
    menuMobile: $('.mobile-menu'),
}

const {
    navFix,
    nav,
    activeMenu,
    active
} = {
    navFix: 'fixed-nav',
    nav: 'nav',
    activeMenu: 'active-menu',
    active: 'active'
}

// START LAZY
$('.lazy').lazy({
    beforeLoad: function(element) {
        // called before an elements gets handled
    },
    afterLoad: function(element) {
        $(element).removeAttr('width').removeAttr('height')
    },
    onError: function(element) {
        // called whenever an element could not be handled
    },
    onFinishedAll: function() {
        // called once all elements was handled
    }
});

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
    if(windowTop >= 50){
        $(nav).addClass(navFix);
        menuMobile.css('padding-top', '70px');
    } else {
        $(nav).removeClass(navFix);
        menuMobile.css('padding-top', '130px');
    }

    // ACTIVE MENU FUNCTION
    changeActiveMenu(windowTop);

    // GO TOP BTN
    btnTop(windowTop);
}).scroll()

function changeActiveMenu(windowTop){
    allMenuItems.map((index, elem) => {
        const url = $(elem).attr('href');
        const section = $(`${url}`);
        const elemTop = section.offset().top;
        if(windowTop >= elemTop - 300 && windowTop < elemTop + section.height()){
            allMenuItems.removeClass(activeMenu);
            $(elem).addClass(activeMenu);
        }
    })
}


btnToTop.on('click', function (){
    $(window).scrollTop(0);
})


function btnTop(scrollTop){
    if(scrollTop > 200){
        btnToTop.addClass(active);
        btnCall.addClass(active);
    } else {
        btnToTop.removeClass(active);
        btnCall.removeClass(active);
    }
}


const servicesInfo = [
    {
        name: 'ДИАГНОСТИКА',
        img: 'images/price-images.png',
        prices: [
            ['Консультация. Первичный осмотр полости рта', '500'],
            ['Консультация врача-имплантолога', '500'],
            ['Профосмотр и выдача справки', '500'],
            ['Электроодонтодиагностика', '200'],
            ['Восковое моделирование 1 ед.', '300'],
            ['Снятие диагностического слепка + изготовление модели', '2000'],
            ['Дентальный снимок (диагностический)', '400'],
            ['Дентальный снимок (диагностический) кол-во 2', '700'],
            ['Дентальный снимок (диагностический) кол-во 3', '1000'],
            ['Дентальный снимок (с распечатыванием)', '450'],
        ]
    },
    {
        name: 'ГИГИЕНА',
        img: 'images/dentist-hygiene.png',
        prices: [
            ['Снятие мягкого зубного налета методом Air Flow (1 челюсть)', '1500'],
            ['Снятие твердых зубных отложений ультразвуком (1 челюсть)', '1500'],
            ['Полная профессиональная чистка зубов', '4000'],
            ['Химическое отбеливание в зоне улыбки', '7000'],
            ['Покрытие фторлаком одного зуба', '100'],
            ['Снятие твердых зубных отложений с одного зуба с полировкой', '150']
        ]
    },
    {
        name: 'ТЕРАПЕВТИЧЕСКАЯ СТОМАТОЛОГИЯ',
        img: 'images/therapeutic-dentistry.png',
        prices: [
            ['Анестезия аппликационная', '100'],
            ['Анестезия инфильтрационная', '500'],
            ['Анестезия проводниковая', '500'],
            ['Лечение поверхностного кариеса', '2500'],
            ['Лечение кариеса в пределах дентина 1 поверхность', '3000'],
            ['Лечение кариеса в пределах дентина 2 поверхности', '3500'],
            ['Лечение кариеса в пределах дентина 3 поверхности', '4000'],
            ['Пломба стеклоиономерный цемент Fuji, Adhesor', '2500'],
            ['Пломба под коронку', '2500'],
            ['Художественная реставрация ESTELITE ASTERIA', '6000'],
            ['Временная пломба (дентин-паста, septo-pack)', '350'],
            ['Наложение коффердама', '500'],
            ['Наложение девитализирующей пасты', '200'],
            ['Установка титанового винтового штифта', '1500'],
            ['Установка стекловолоконного штифта', '2000'],
            ['Наложение пасты Пульпотек', '500'],
        ]
    },
    {
        name: 'ЭНДОДОНТИЧЕСКОЕ ЛЕЧЕНИЕ',
        img: 'images/endodontic-treatment.png',
        prices: [
            ['Инструментальная, медикаментозная обработка и пломбирование корневого канала при лечении пульпита (периодонтита) 1- корневого зуба', '4500'],
            ['Инструментальная, медикаментозная обработка и пломбирование корневого канала при лечении пульпита (периодонтита) 2- корневого зуба', '6000'],
            ['Инструментальная, медикаментозная обработка и пломбирование корневого канала при лечении пульпита (периодонтита) 3- корневого зуба', '7000'],
            ['Химико-механическая обработка дополнительного канала ', '2000'],
            ['Распломбировка 1 корневого канала (паста)', '1000'],
            ['Распломбировка одного канала (р/формалин, цемент) или удаление штифта (вкладки)', '1500'],
            ['Временное (лечебное) пломбирование 1 корневого канала', '1000'],
        ]
    },
    {
        name: 'ПАРОДОНТОЛОГИЯ',
        img: 'images/periodontology-dentistry.png',
        prices: [
            ['Вскрытие пародонтального абсцесса (1 ед.)', '1000'],
            ['Лечение стоматита', '1000'],
            ['Гингивэктомия (1 сегмент)', '800'],
            ['Закрытый кюретаж пародонтологического кармана (1 ед)', '800'],
            ['Открытый кюретаж пародонтологического кармана (1 ед)', '1500'],
            ['Шинирование зубов (6 ед. включая материал)', '3000'],
            ['Наложение защитной повязки (солкосерил, септопак)', '500'],
            ['Пластика межзубного сосочка', '700'],
            ['Введение лекарственных препаратов в патологический зубодесневой канал ( в области одного зуба)', '300'],
        ]
    },
    {
        name: 'ОРТОПЕДИЧЕСКАЯ СТОМАТОЛОГИЯ',
        img: 'images/orthopedic-dentistry.png',
        prices: [
            ['Снятие оттиска ( альгинат) 1 шт.', '500'],
            ['Снятие оттиска (С-силикон)', '500'],
            ['Снятие оттиска (А-силикон) ', '1000'],
            ['Временная коронка ( 1 ед.)', '2000'],
            ['Временная коронка на имплантате (прямой метод)', '2500'],
            ['Вкладка культевая 1 канал', '4000'],
            ['Вкладка культевая 2 канала', '4500'],
            ['Вкладка культевая 3 канала', '4500'],
            ['Вкладка культевая (сплав серебряно-палладиевый) 1 канал', '5000'],
            ['Вкладка культевая (сплав серебряно-палладиевый) 2 канала', '5500'],
            ['Вкладка культевая (сплав серебряно-палладиевый) 3 канала', '6000'],
            ['Коронка цельнолитая ', '5500'],
            ['Керамическая коронка на основе E.MAX', '25000'],
            ['Коронка металлокерамическая ', '9500'],
            ['Коронка керамическая на каркасе из диоксида циркония', '20000'],
            ['Коронка из безметалловой керамики', '30000'],
            ['Коронка металлокерамическая – с плечом', '10500'],
            ['Коронка металлокерамическая промежуточная на имплантат', '15000'],
            ['Коронка металлокерамическая из диоксида циркония промежуточная на имплантат', '17000'],
            ['Коронка металлокерамическая на имплантат (цементная фиксация)', '25000'],
            ['Коронка металлокерамическая  на имплантат (винтовая фиксация)', '30000'],
            ['Коронка керамическая на каркасе из диоксида циркония на имплантат (цементная фиксация)', '28000'],
            ['Коронка керамическая на каркасе из диоксида циркония на имплантат (винтовая фиксация)', '32000'],
            ['Винир, вкладка керамическая', '20000'],
            ['Телескопическая коронка (1 ед.)', '5000'],
            ['Косметический съемный протез (1-3 зуба) ', '6000'],
            ['Полный/частичный съемный протез', '25000'],
            ['Полный съемный протез из материала Acry- Free', '35000'],
            ['Съемный протез с опорой на имплантаты', '30000'],
            ['Полный съемный протез, фиксирующийся на имплантатах', '50000'],
            ['Съемный протез на 6 имплантах', '80000'],
            ['Бюгельный протез с замком МК+1 односторонний', '50000'],
            ['Бюгельный протез на кламмерах', '38000'],
            ['Бюгельный протез на кламмерах', '38000'],
            ['Бюгельный протез на аттачменах', '43000'],
            ['Бюгельный протез квадротти', '38000'],
            ['Перебазировка протеза', '6000'],
            ['Починка съемного протеза ', '4000'],
            ['Вварка пластмассового зуба', '3000'],
            ['Вварка кламмера 1 шт', '3000'],
            ['Замена фиксирующих резинок на замках', '3000'],
            ['Армирование протеза литой сеткой, балкой', '5000'],
            ['Цементировка коронки (1 ед.)', '500'],
            ['Снятие коронки (штампованная)', '300'],
            ['Снятие коронки (металлокерамическая, цельнолитая)', '500'],
            ['Индивидуальная ложка', '2500'],
            ['Прикусной шаблон на жестком базисе', '500'],
        ]
    },
    {
        name: 'ХИРУРГИЯ',
        img: 'images/dentistry-surgery.png',
        prices: [
            ['Снятие швов', '300'],
            ['Заполнение лунки удаленного зуба  костно-замещающими материалами', '300'],
            ['Удаление зуба 1 степени сложности без стоимости анестезии', '2000'],
            ['Удаление зуба 2 степени сложности без стоимости анестезии', '2500'],
            ['Удаление зуба (осложненное удаление)без стоимости анестезии', '3000'],
            ['Удаление «Зуба мудрости»', '4000 '],
            ['Удаление ретинированного, дистопированного зуба “мудрости»', '7000'],
            ['Гемисекция', '3000'],
            ['Вскрытие абсцесса, разрез ( послабляющий разрез)', '1000'],
            ['Лечение перикоронита', '500'],
            ['Лечение альвеолита', '1500'],
            ['Иссечение капюшона', '1200'],
            ['Удаление экзостоза в области двух зубов', '3000'],
            ['Наложение швов (пролайн)', '600'],
            ['Наложение швов (vicryl)', '400'],
            ['Пластика уздечки верхней, нижней губы', '2800'],
            ['Пластика десны соединительнотканным лоскутом с неба (коррекция толщины десны)', '4000'],
            ['Свободная пересадка полнослойного слизисто-подслизистого трансплантата', '5000'],
            ['Операция цистэктомия с резекцией верхушки корня', '5000'],
            ['Резекция верхушки корня ', '3500'],
            ['Цистэктомия в пределах одного корня зуба', '5000'],
            ['Bio-Gide 25*25 мм (резорбируемая мембрана)', '10000'],
            ['Bio-Gide 16*22 мм (резорбируемая мембрана)', '5000'],
            ['Bio-Gide гранулы 0,1 г (Швейцария)', '5000'],
            ['Bio-Oss гранулы 0,5 г (Швейцария)', '19000'],
            ['Bio-Oss гранулы 2 г (Швейцария)', '62400'],
            ['Био-гап крошка 0,1 г (Россия)', '2000'],
            ['Био-гап крошка 0,2 г (Россия)', '10000'],
            ['Био-гап крошка 2 г (Россия)', '25000'],
            ['Забор аутокости', '10000']
        ]
    },
    {
        name: 'Детская стоматология',
        img: 'images/childrens-dentistry.png',
        prices: [
            ['Консультация детского врача-стоматолога', '300'],
            ['Профосмотр ', '500'],
            ['Профосмотр (плановый)', '0.00'],
            ['Повторный осмотр при стоматите', '250'],
            ['Наложение раббердама ', '500'],
            ['Определение индекса гигиены полости рта', '350'],
            ['Комплексная профессиональная гигиена при молочном прикусе', '2000'],
            ['Комплексная профессиональная гигиена при сменном и постоянном прикусе', '3000'],
            ['Герметизация фиссур неинвазивная (1 зуб)', '1000'],
            ['Герметизация фиссур инвазивная (1 зуб)', '2000'],
            ['Реминерализующая терапия (обработка 1 зуб)', '550'],
            ['Пломбирование стеклоиономерным цементом (Fuji )', '2500'],
            ['Пломбирование композитом светового отверждения ', '3000'],
            ['Лечение пульпита в 1 посещения', 'title'],
            ['Лечение пульпита молочных зубов в 1 посещение (без стоимости анестезии)', '4000'],
            ['Лечение пульпита зубов в 2 посещения', ''],
            ['1-е посещение ', '1800'],
            ['2-е посещение со светоотверждаемой пломбой ', '2800'],
            ['Наложение пасты Пульпотек', '500'],
            ['Наложение девитализирующей пасты', '200'],
            ['Удаление молочного зуба  (без стоимости анестезии) простое ', '900'],
            ['Удаление молочного зуба  (без стоимости анестезии) сложное', '1400']
        ]
    },
];


$('.item-prices').on('click', function (e){
    $('.item-prices').removeClass('bgc-blue c-white').addClass('bgc-grey c-black');
    $(this).removeClass('bgc-grey c-black').addClass('bgc-blue c-white');

    const text = $(this).data('name').toLowerCase();

    const selectedInfo = servicesInfo.find((info) => info.name.toLowerCase() === text);

    selectedInfo && changeActivePriceInfo(selectedInfo);

})

changeActivePriceInfo(servicesInfo[0])


function changeActivePriceInfo(selectedInfo){
    $('#price-name').text(selectedInfo.name);
    $('#price-image').attr('src', selectedInfo.img);

    $('#list-prices').html('');
    selectedInfo.prices.forEach((list, index) => {
        $('#list-prices').append(`
                <p data-bs-toggle="modal" data-bs-target="#orderCall" onclick="AddInfoModal('${list[0]}', '${selectedInfo.name}')" class="d-flex cursor-pointer justify-content-between align-items-center py-2 border-bottom bc-blue f-comfortaa mb-0">
                    <span><b>${index + 1}.</b> ${list[0]}</span>
                    <b class="fw-bold text-nowrap">${list[1]} ₽</b>
                </p>
            `)
    })
}


function AddInfoModal(catName, catItem){
    const text = `${catItem ? catItem + ',\n' : ''}${catName}`;
    $('#text-modal').val(text)
}


mobileMenu.on('click', function (){
    const thisElem = $(this);
    if(thisElem.hasClass(active)){
        closeMobileMenu(thisElem);
    } else {
        openMobileMenu(thisElem);
    }
})


$('.mobile-menu-item').on('click', function (){
    closeMobileMenu(mobileMenu)
})

function closeMobileMenu(thisElem){
    thisElem.removeClass(active);
    menuMobile.removeClass(active);
    thisElem.html('<i class="fa-solid fa-bars fs-40"></i>')
}

function openMobileMenu(thisElem){
    thisElem.addClass(active);
    menuMobile.addClass(active);
    thisElem.html('<i class="fa-solid fa-xmark fs-40"></i>')
}


const modalError = $('#modal-message');
const modalSuccess = $('#modal-success');
const modalSpinner = $('#modal-spinner');

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

$('#send-message').on('submit', function (e){
    e.preventDefault();
    const name = e.target.name.value;
    const tel = e.target.tel.value;
    const email = e.target.email.value;
    const text = e.target.text.value;

    if(name && tel && email && text){

        if(!email.match(validRegex)){
            modalError.removeClass('d-none');
            return;
        }

        modalError.addClass('d-none');
        modalSpinner.removeClass('d-none').attr('disabled', 'true');

        $.ajax({
            url: '../send-email.php',
            method: 'post',
            data: {
                name,
                tel,
                email,
                text
            },
            success: function(data){
                modalSpinner.addClass('d-none');
                if(+data === 1){
                    modalSuccess.removeClass('d-none');
                    modalError.addClass('d-none')
                }

                if(+data === 0){
                    modalSuccess.addClass('d-none');
                    modalError.removeClass('d-none')
                }
            },
            error: function (e){
                console.log(e)
            }
        });
    } else {
        modalError.removeClass('d-none')
    }
})

const contactError = $('#modal-message-contact');
const contactSuccess = $('#modal-success-contact');
const contactSpinner = $('#modal-spinner-contact');

$('#contact-save').on('submit', function (e){
    e.preventDefault();

    const name = e.target.name.value;
    const tel = e.target.tel.value;
    const text = e.target.text.value;

    if(name && tel && text){

        contactError.addClass('d-none');
        contactSpinner.removeClass('d-none').attr('disabled', 'true');

        $.ajax({
            url: '../send-email.php',
            method: 'post',
            data: {
                name,
                tel,
                email: 'no email',
                text
            },
            success: function(data){
                modalSpinner.addClass('d-none');
                if(+data === 1){
                    contactSuccess.removeClass('d-none');
                    contactSpinner.addClass('d-none')
                }

                if(+data === 0){
                    contactSuccess.addClass('d-none');
                    contactSpinner.removeClass('d-none')
                }

                setTimeout(() => {
                    contactSuccess.addClass('d-none')
                }, 2000)
            },
            error: function (e){
                console.log(e)
            }
        });
    } else {
        contactError.removeClass('d-none')
    }
})

const contactErrorMobile = $('#modal-message-contact-mobile');
const contactSuccessMobile = $('#modal-success-contact-mobile');
const contactSpinnerMobile = $('#modal-spinner-contact-mobile');

$('#contact-save-mobile').on('submit', function (e){
    e.preventDefault();

    const name = e.target.name.value;
    const tel = e.target.tel.value;
    const text = e.target.text.value;

    if(name && tel && text){

        contactErrorMobile.addClass('d-none');
        contactSpinnerMobile.removeClass('d-none').attr('disabled', 'true');

        $.ajax({
            url: '../send-email.php',
            method: 'post',
            data: {
                name,
                tel,
                email: 'no email',
                text
            },
            success: function(data){
                contactSpinnerMobile.addClass('d-none');
                if(+data === 1){
                    contactSuccessMobile.removeClass('d-none');
                    contactSpinnerMobile.addClass('d-none')
                }

                if(+data === 0){
                    contactSuccessMobile.addClass('d-none');
                    contactSpinnerMobile.removeClass('d-none')
                }

                setTimeout(() => {
                    contactSuccessMobile.addClass('d-none')
                }, 2000)
            },
            error: function (e){
                console.log(e)
            }
        });
    } else {
        contactErrorMobile.removeClass('d-none')
    }
})



$('.slick-dots').each((index, elem) => {
    if($(elem).children().length === 1){
        $(elem).addClass('d-none')
    }
})

