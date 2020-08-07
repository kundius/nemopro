function number_format( number, decimals, dec_point, thousands_sep ) {
	// +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
	// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// +	 bugfix by: Michael White (http://crestidg.com)

	var i, j, kw, kd, km;

	// input sanitation & defaults
	if( isNaN(decimals = Math.abs(decimals)) ){
		decimals = 2;
	}
	if( dec_point == undefined ){
		dec_point = ",";
	}
	if( thousands_sep == undefined ){
		thousands_sep = ".";
	}

	i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

	if( (j = i.length) > 3 ){
		j = j % 3;
	} else{
		j = 0;
	}

	km = (j ? i.substr(0, j) + thousands_sep : "");
	kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
	//kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
	kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");


	return km + kw + kd;
}

svg4everybody();


// тригерим ресайз окна для обновления закрепленных блоков
$('[data-uk-switcher]').on('show.uk.switcher', function() {
    $(window).trigger('resize');
});

$(document).on('af_complete', function(e, response) {
    response.form.parents('.uk-modal').find('.uk-modal-close').click();
});

/* Лайтбокс */
$('a[href$=".jpg"], a[href$=".jpeg"], a[href$=".JPG"], a[href$=".png"], a[href$=".gif"]').not('[target="_blank"]').magnificPopup({
    type:'image',
    gallery:{
        enabled:true
    }
});
$(document).on('click', '.comment-image', function() {
    $.magnificPopup.open({
        items: {
            src: $(this).attr('href')
        },
        type: 'image'
    });
    return false;
});
$('.js-popup-map').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
});
$('.js-popup-inline').magnificPopup({
    type:'inline'
});
$('.js-image-comment').magnificPopup({
    type:'image',
    gallery:{
        enabled:true
    }
});
$('.js-image-lightbox').magnificPopup({
    type:'image',
    image: {
        markup: '<div class="mfp-figure">'+
        '<div class="mfp-close"></div>'+
        '<div class="mfp-img"></div>'+
        '<div class="mfp-bottom-bar">'+
        '<div class="mfp-title"></div>'+
        '<div class="mfp-counter"></div>'+
        '<div class="mfp-share">Поделиться в соцсетях: <span class="js-mfp-share"></span></div>'+
        '</div>'+
        '<div class="mfp-comments"></div>'+
        '</div>'
    },
    gallery:{
        enabled:true
    },
    alignTop: true,
    //closeBtnInside: false,
    callbacks: {
        change: function() {
            var popup = this,
                id = popup.currItem.el.data('id'),
                share = popup.currItem.el.data('share');

            popup.content.find('.js-mfp-share').html($(share).clone(true));

            $.post(document.location.href, {
                action: 'comments',
                thread: 'file-' + id
            }, function(response) {
                popup.content.find('.mfp-comments').html(response);
            });
        }
    }
});
$('.js-video-lightbox').magnificPopup({
    type:'inline',
    gallery:{
        enabled:true
    },
    alignTop: true,
    callbacks: {
        change: function() {
            var popup = this,
                id = popup.currItem.el.data('id');

            $.post(document.location.href, {
                action: 'comments',
                thread: 'file-' + id
            }, function(response) {
                popup.content.find('.mfp-comments').html(response);
            });
        }
    }
});
var hash_video = location.hash.match(new RegExp('video=([^&]*)'));
if(hash_video) {
    $('.js-video-lightbox[data-id="' + hash_video[1] + '"]').click();
}
var hash_image = location.hash.match(new RegExp('image=([^&]*)'));
if(hash_image) {
    $('.js-image-lightbox[data-id="' + hash_image[1] + '"]').click();
}

/** Наведение меню **/
/*$('li.js-catalog-menu-lvl1').hover(function() {
    var $inner = $(this).find('.js-c-m-inner');
    $inner.stop().animate({height: 'show', opacity:1}, 300, 'linear', function() {
        $inner.css('height','auto');
    });
}, function() {
    var $inner = $(this).find('.js-c-m-inner');
    $inner.stop().animate({height: 'hide', opacity:0}, 200, 'linear', function() {
        $inner.css('height','auto');
    });
});*/
//$('.js-catalog-menu-right').mouseleave(function() {
//    $(this).html('');
//});

$('.js-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<button class="slider__prev"><i class="uk-icon-angle-left"></i></button>',
    nextArrow: '<button class="slider__next"><i class="uk-icon-angle-right"></i></button>',
    dots: true
});

$('.js-about-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true
});

$('.js-seeAlso-carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '.js-seeAlso-previous',
    nextArrow: '.js-seeAlso-next',
    responsive: [{
        breakpoint: 960,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1
        }
    }]
});

// $('.js-seeAlso-carousel').on('init', equalBlocks);
$('.js-viewed-carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '.js-viewed-previous',
    nextArrow: '.js-viewed-next',
    responsive: [{
        breakpoint: 960,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 2
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1
        }
    }]
});
// $('.js-viewed-carousel').on('init', equalBlocks);
$('.js-actions-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true
});


// $('.js-left-menu-toggle').each(function() {
//     if ($(this).parent().hasClass('active')) {
//         $(this).toggleClass('opened');
//         $(this).nextAll('ul').slideToggle(300);
//     }
// });

// $('.js-left-menu-toggle').click(function() {
//     $(this).toggleClass('opened');
//     $(this).nextAll('ul').slideToggle(300);
// });

// $('.js-left-menu-toggle').each(function() {
//     if ($(this).parent('').hasClass('active')) {
//         $(this).toggleClass('opened');
//         $(this).nextAll('ul').animate({
//             left: "0",
//             right: "0",
//         });
//     }
// });

$('.js-left-menu-toggle').click(function() {
    //var height = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
    $(this).toggleClass('opened');
    $(this).nextAll('ul').animate({
        left: "0",
        right: "0",

    });
});

$(document).ready(function(){
	$(".slideout-menu__lvl1 > .js-left-menu-toggle").click(function(){
		$(".slideout-menu").toggleClass("slideout-sticky");
	});
})

$(document).ready(function(){
	$(".slideout-menu__lvl2 > .js-left-menu-toggle").click(function(){
		$(".slideout-menu").toggleClass("slideout-sticky-lvl");
	});
})

$('.js-right-menu-toggle').on('click' , function(){
    $(this).parent('.touch').animate({ 'left' : '100%', 'right' : '-100%', });
})

$(document).ready(function(){
	$(".js-right-menu-toggle").click(function(){
		$(".slideout-menu").removeClass("slideout-sticky");
	});
})

$(document).ready(function(){
	$(".js-right-menu-toggle").click(function(){
		$(".slideout-menu").removeClass("slideout-sticky-lvl");
	});
})

// $('.js-left-menu-toggle').click(function() {
//     $(this).toggleClass('opened');
//     $(this).prevAll('ul').animate({
//       right: "-100%",
//       left: "unset",
//     });
// });

// $('.left-menu__lvl1').hover(function() {
//     $('.js-left-menu-toggle', this).toggleClass('opened');
//     $('ul', this).slideToggle(300);
// }, function() {
//     $('.js-left-menu-toggle', this).toggleClass('opened');
//     $('ul', this).slideToggle(300);
// });

/*$.ionTabs(".js-contacts-tabs", {
    type: 'none'
});*/

// смена внешней ссылки при выборе селекта
$('.js-contacts-select').each(function() {
    var $select = $(this),
        uri = $select.find('option:selected').data('uri'),
        target = $select.data('target');

        $(target).attr('href', uri).show();

    $select.change(function() {
        var uri = $(this).find('option:selected').data('uri'),
            target = $(this).data('target');

            $(target).attr('href', uri);
    });
});

$('.js-input-number-up').click(function() {
    var input = $(this).parent('.js-input-number').find('input');
    var val = Number(input.val())+1;
    input.val(val);
    input.change();
});
$('.js-input-number-down').click(function() {
    var input = $(this).parent('.js-input-number').find('input');
    var val = Number(input.val())-1;
    if(!input.attr('min') || val >= input.attr('min')) {
        input.val(val);
        input.change();
    }
});

/*$('.js-tooltip').tooltipster();

$('.js-tooltip-search').click(function() {
    return false;
}).tooltipster({
    content: $('#toolbar-search'),
    delay: 0,
    trigger: 'click',
    interactive: true,
    contentCloning: true,
    theme: 'tooltipster-white',
    functionReady: function(origin, content) {
        $('.js-tooltip-close').click(function() {
            origin.tooltipster('hide');
        });
    }
});*/


/** Валидация и отправка форм **/
$('.js-form').each(function(){
    $(this).validate({
        submitHandler: function(form) {
            var target = $(form).data('target');
            $(form).ajaxSubmit({
                url:        location.href,
                type:       'POST',
                dataType:   'html',
                success: function(response, statusText, xhr, $form) {
                    var $target = $(document.createElement('div')).append(response).find(target);
                    $(target).html($target.html());
                }
            });
        }
    });
});
$('.js-form-validate').each(function(){
    $(this).validate();
});
$('#msOrder').validate({
    groups: {
        order_receiver: "receiver email phone conditions",
        order_address: "index region city street building room"
    },
    errorPlacement: function(error, element) {
        switch (element.attr("name")) {
            case "index":
            case "region":
            case "city":
            case "street":
            case "building":
            case "room":
                error.insertAfter("#order-address-error");
                break;
            case "receiver":
            case "email":
            case "phone":
            case "conditions":
                error.insertAfter("#order-receiver-error");
                break;
            default:
                error.insertAfter(element);
                break;
        }
    },
    messages: {
        index: {
            required: "Заполните все поля адреса доставки."
        },
        region: {
            required: "Заполните все поля адреса доставки."
        },
        city: {
            required: "Заполните все поля адреса доставки."
        },
        street: {
            required: "Заполните все поля адреса доставки."
        },
        building: {
            required: "Заполните все поля адреса доставки."
        },
        room: {
            required: "Заполните все поля адреса доставки."
        },
        receiver: {
            required: "Заполните обязательные поля."
        },
        email: {
            required: "Заполните обязательные поля."
        },
        phone: {
            required: "Заполните обязательные поля."
        },
        conditions: {
            required: "Согласитесь с условиями обработки персональных данных"
        }
    }
});


/** Видео **/
$('.js-video').each(function() {
    $(this).data('videojs', videojs(this));
});
$('.js-video-modal').each(function() {
    $(this).data('videojs', videojs(this, {
        width: ($(window).width() > 1000) ? 1000 : $(window).width() - 10
    }));
});
//$('video,audio').mediaelementplayer({
//    pluginPath: '/template/mediaelement/',
//});

/** Формы загрузки файлов **/
$('.js-download-popup').magnificPopup({
    type:'inline',
    midClick: true
});


// $('.scrolltop').click(function(){
//     $("html, body").animate({ scrollTop: 0 }, 200);
// });
// window.addEventListener("scroll", function(e,e2,e3){
//     var scrollTop = $window.scrollTop();
//     console.log(scrollTop);

//     // if (scrollTop > 230) {
//     //     $('.scrolltop').fadeIn();

//     //     if($('.catalog-menu').length) {
//     //         $('body').addClass('menu-fixed');
//     //     }
//     // } else {
//     //     $('.scrolltop').fadeOut();

//     //     if($('.catalog-menu').length) {
//     //         $('body').removeClass('menu-fixed');
//     //     }
//     // }
// });


$('.js-insert-file').each(function(i, wrapper) {
    var $wrapper = $(wrapper);

    $wrapper.find('.ms2galleryform-file-image-wrapper').append('<span>Вставить</span>');
    $wrapper.on('click', '.ms2galleryform-file-link', function() {
        var target = $(this).parents('.js-insert-file').data('target');

        var link = $(this).attr('href');
        var name = $(this).attr('title');

        $.markItUp({
            target: target,
            replaceWith: '<a href="'+link+'" class="comment-image" target="_blank"><img src="'+ link +'" alt="'+name+'"></a>'
        });

        UIkit.modal(wrapper).hide();

        return false;
    });
});

// $('.js-cart-receiver input[type="text"]').change(function() {
//     var surname = $('#receiver-surname').val();
//     var name = $('#receiver-name').val();
//     var patronymic = $('#receiver-patronymic').val();

//     $('#receiver').val(surname + ' ' + name + ' ' + patronymic);
// });


/* пагинация */
// $(function() {
//     var s = window.location.search;
//     s = s.match(new RegExp('page' + '=([^&=]+)'));
//     var page = s ? s[1] : false;

//     if(page) {
//         var config = {
//     		wrapper: "#pdopage",
//     		rows: "#pdopage .rows",
//     		pageLimit: 6,
//     	};
//     	var wrapper = $(config['wrapper']);
//     	var rows = $(config['rows']);
//     	var limit = config['pageLimit'] * (page-1);

//     	$.get(document.location.pathname, {page: 1, limit: limit}, function(response) {
//     	    if (response && response['total']) {
//         		wrapper.find(rows).prepend(response['output']);
//     	    }
//     	}, 'json');
//     }
// });

/* toggle */
$('.js-collapse-toggle').on('click', function() {
    var $target = $($(this).data('target'));

    if($target.is(':visible')) {
        $target.slideUp(300);
        $(this).removeClass('_active');
    } else {
        $target.slideDown(300);
        $(this).addClass('_active');
    }
});

/*$(function() {
    var exclude = [
        'http://nemopro.ru/'
    ];

    if($.inArray(window.location.href, exclude) == '-1') {
        $("html, body").animate({
            scrollTop: $('#header').height() - ($(window).width()>768?60:48)
        }, 0);
    }
});*/

$(document).on('click', '.msbuyoneclick', function() {
    var id = $(this).data('id');

    $.ajax({
        type: 'POST',
        url: 'template/buyoneclick.php',
        data: {
            action: 'product',
            id: id
        },
        success: function(response){
            var modal = UIkit.modal($(response).appendTo("body"), {});

            modal.on("hide.uk.modal", function(){
                if (modal.persist) {
                    modal.persist.appendTo(modal.persist.data("modalPersistParent"));
                    modal.persist = false;
                }
                modal.element.remove();
            });

            modal.show();

            modal.find('form').each(function() {
                var form = $(this);
                form.submit(function() {
                    $.ajax({
                        type: 'POST',
                        url: 'template/buyoneclick.php',
                        data: form.serialize(),
                        success: function(response){
                            response = $.parseJSON(response);

                            if (response.redirect) {
                                window.location = response.redirect;
                            } else if (response.success) {
                                UIkit.notify("<b>Заказ успешно оформлен.</b><br> Наши менеджеры свяжутся с Вами.", {
                                    status: 'success'
                                });
                                modal.hide();
                            } else {
                                UIkit.notify(response.message, {
                                    status: 'danger',
                                    timeout : 3000
                                });
                            }
                        }
                    });

                    return false;
                });
            });
        }
    });

    return false;
});

$('.js-consultant-btn').click(function() {
    jivo_api.open();
});

$('.js-catalog-menu').flexMenu({
    linkText: 'Еще <i class="uk-icon-angle-down"></i>',
    showOnHover: false
});

$(document).on('click', '[data-add-remains]', function(e) {
    e.preventDefault();

    var url = $(this).data('add-remains');
    if (url) {
        $('#under-order [name="url"]').val(url);
    }

    var modal = UIkit.modal("#under-order");

    if ( modal.isActive() ) {
        modal.hide();
    } else {
        modal.show();
    }

    return false;
});

$(document).on('click', '[data-add-options]', function(e) {
    e.preventDefault();

    var $modal = $($(this).data('add-options'));
    if ($modal.first().parent().prop('tagName') !== 'BODY') {
        $modal.appendTo('body');
    }


    var modal = UIkit.modal($modal, {
        center: true,
        container: 'body'
    });

    $modal.on({ 'show.uk.modal': optionsWidth });

    if ( modal.isActive() ) {
        modal.hide();
    } else {
        modal.show();
    }

    return false;
});


$('.auth-button-restore').click(function(e) {
    $('#office-login-form-password').val('');
    $('#office-auth-login').toggleClass('auth-form-restore');

    return false;
});


// окно скидок от суммы
if($.cookie('modal-discount') != 'shown') {
    setTimeout(function() {
        UIkit.modal($('#modal-discount')).show();
        $.cookie('modal-discount', 'shown');
    }, 15000);
}

if($.cookie('show-filters') == 'true') {
    $('.filters-wrap').removeClass('filters-wrap_hidden');
}
$(document).on('click', '.filters-wrap__toggle', function() {
    $('.filters-wrap').toggleClass('filters-wrap_hidden');
    $.cookie('show-filters', !$('.filters-wrap').hasClass('filters-wrap_hidden'));
});


$('#cheaper').on('click', '.cheaper-plus', function() {
    var row = $(this).parents('.cheaper-address-row'),
        clone = row.clone();

    clone.find('input').val('');
    row.after(clone);
});

$('#cheaper').on('click', '.cheaper-minus', function() {
    var row = $(this).parents('.cheaper-address-row');

    row.remove();
});

$('.js-home-catalog').click(function(e) {
    if($(window).width() < 960) {
        UIkit.offcanvas.show('#uk-offcanvas');
        return false;
    }
});

/*function equalBlocks() {
    ;( function( $, window, document, undefined )
    {
        'use strict';

        $( '.js-equal-list' ).each( function() {
            var $list       = $( this ),
                $items      = $list.find( '.js-equal-item:visible' ),
                setHeights  = function()
                {
                    $items.css( 'height', 'auto' );

                    var perRow = Math.floor( $list.width() / $items.width() );
                    if( perRow == null || perRow < 2 ) return true;

                    for( var i = 0, j = $items.length; i < j; i += perRow )
                    {
                        var maxHeight   = 0,
                            $row        = $items.slice( i, i + perRow );

                        $row.each( function()
                        {
                            var itemHeight = parseInt( $( this ).outerHeight() );
                            if ( itemHeight > maxHeight ) maxHeight = itemHeight;
                        });
                        $row.css( 'height', maxHeight );
                    }
                };

            setHeights();
            $( window ).on( 'resize', setHeights );
        });
    })( jQuery, window, document );
}

$(window).load(equalBlocks);

$(document).on('mse2_load', equalBlocks);
$(document).on('pdopage_load', equalBlocks);
$('[data-uk-switcher]').on('show.uk.switcher', equalBlocks);
$('[data-uk-slider]').on('focusitem.uk.slider', equalBlocks);*/

$(document).on('change', '#mse2_filters select', function() {
   $('html, body').animate({
        scrollTop: /*$("#pdopage").offset().top || */0
    }, 1000);
});


/**
 * Виртуальная форма купона в корзине
 **/
var discount_field = $('#msOrder input[name="discount_code"]');
var discount_form = $('#msCartCoupon');
if (Boolean(discount_field.val())) {
    discount_form.addClass('cart-coupon--applied');
}

discount_form.on('submit', function(e) {
    e.preventDefault();

    var value = $('[name="discount_code"]', this).val();
    discount_field.val(value);
    discount_field.trigger('change');
});

/**
 * Скрытие полей адреса и контактов
 **/
(function () {
    var deliveries = $('[name="delivery"]');
    var deliveries_inputs = $('#msOrder input');
    deliveries_inputs.on('change', function() {
        var delivery = parseInt(deliveries.filter(':checked').val());

        if ([1, 3].indexOf(delivery) !== -1) {
            $('#field-passport').hide();
        } else {
            $('#field-passport').show();
        }
        if ([1, 4, 6, 7, 9, 10, 11].indexOf(delivery) !== -1) {
            $('#field-index').hide();
        } else {
            $('#field-index').show();
        }
        if ([1, 4].indexOf(delivery) !== -1) {
            $('#field-region').hide();
        } else {
            $('#field-region').show();
        }
        // if (value == 1) {
        //     $('#field-city').hide();
        // } else {
        //     $('#field-city').show();
        // }
        if ([1, 4].indexOf(delivery) !== -1) {
            $('#field-street').hide();
        } else {
            $('#field-street').show();
        }
        if ([1, 4].indexOf(delivery) !== -1) {
            $('#field-room').hide();
        } else {
            $('#field-room').show();
        }
        if ([1, 4].indexOf(delivery) !== -1) {
            $('#field-building').hide();
        } else {
            $('#field-building').show();
        }
    });
}());

var cartSwitcher = UIkit.switcher('#cart-tabs', {
    connect: '#cart-switcher',
    active: /\#msOrder/.test(document.location.href) ? 1 : 0,
    swiping: false
});

$('#cart-tabs').on('show.uk.switcher', function(event, area){
    if ($(miniShop2.Order.paymentInput, miniShop2.Order.order).filter(':visible:checked').length == 0) {
        $(miniShop2.Order.paymentInput, miniShop2.Order.order).filter(':visible:first').trigger('click');
    }
});

$('.js-cart-submit').click(function() {
    cartSwitcher.show(1);
    // var headerHeight = $(window).width() < 960 ? 77 : 133;
    // $(".content").offset().top - headerHeight
    $([document.documentElement, document.body]).animate({
        scrollTop: 0
    }, 1000);
});

$('.js-header-modern-catalog').click(function() {
    if ($(window).width() < 960) {
        UIkit.offcanvas.show('#uk-offcanvas');
        return false;
    }
});

/**
 * Переключатель в контактах
 **/
var switcherContactsTabsActive = $('#switcher-contacts-content>li').has('li.active').index();
UIkit.switcher('#switcher-contacts-tabs', {
    active: switcherContactsTabsActive === -1 ? 0 : switcherContactsTabsActive,
    connect: '#switcher-contacts-content',
    swiping: false
});

(function () {
    var prevScroll = window.scrollY;
    var delay = 30;
    var catalog = document.querySelector('.fixed-catalog');
    var scrolltop = document.querySelector('.scrolltop');
    window.addEventListener('scroll', function(e) {
        if (window.scrollY < prevScroll) {
            delay = 30;
            catalog.classList.add('fixed-catalog_visible');
            scrolltop.classList.add('scrolltop_visible');
        } else {
            if (delay <= 0) {
                catalog.classList.remove('fixed-catalog_visible');
                scrolltop.classList.remove('scrolltop_visible');
            } else {
                delay--;
            }
        }
        prevScroll = window.scrollY;
    });
}());

if (typeof LazyLoad !== 'undefined') {
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".js-lazy"
})

$(document).on('mse2_load', function() {
    if (lazyLoadInstance) {
        lazyLoadInstance.update();
    }
});

$(document).on('pdopage_load', function() {
    if (lazyLoadInstance) {
        lazyLoadInstance.update();
    }
});
}

$('.ajax_form').append('<input type="text" name="org" value="" class="_org" style="position:absolute; visibility:hidden; height: 0; width: 0; padding: 0; border:none;"/>')

var contactsSelect = document.querySelector('.js-contacts-select');
if (contactsSelect) {
    new Choices(contactsSelect);
}

function optionsWidth () {    
    const groups = $('.u-product-options__items');
    groups.each(function(i1, group) {
        let items = $(group).find('.u-product-options__item');
        let minWidth = 0;
        items.each(function(i2, item) {
            if ($(item).outerWidth() > minWidth) {
                minWidth = $(item).outerWidth();
            }
        });
        if (minWidth > 0) {
            let perRow = Math.floor($(group).outerWidth() / minWidth);
            let normalPerRow = Math.ceil(items.length/Math.ceil(items.length/perRow));
            let maxWidth = $(group).outerWidth() / normalPerRow;
            items.css('width', maxWidth);
        }
    });
}

$('.js-discount-dropdown').each(function() {
    const dropdown = UIkit.dropdown(this, {
        pos: 'top-right',
        remaintime: 0,
        mode: window.matchMedia("(min-width: 640px)").matches ? 'hover' : 'click'
    });
    $(window).scroll(function() {
        dropdown.hide();
    });
});

$('.js-share-dropdown').each(function() {
    const dropdown = UIkit.dropdown(this, {
        remaintime: 0,
        mode: 'click'
    });
    $(window).scroll(function() {
        dropdown.hide();
    });
});

$('.u-rating__add').click(function() {
    if ($('#comment-form').is(':visible')) {
        $(this).removeClass('u-rating__add_active');
        $('#comment-form').slideUp(500, function() {
            // тригерим ресайз окна для обновления закрепленных блоков
            $(window).trigger('resize');
        });
    } else {
        $(this).addClass('u-rating__add_active');
        $('#comment-form').slideDown(500, function() {
            // тригерим ресайз окна для обновления закрепленных блоков
            $(window).trigger('resize');
        });
    }
});

$('[data-uk-switcher]').on('show.uk.switcher', function() {
    $('.u-rating__add').removeClass('u-rating__add_active');
    $('#comment-form').slideUp(500);
});


$(function() {
    const deliveries = [{
        id: 1,
        label: 'Самовывоз',
        payments: [2]
    }, {
        id: 2,
        label: 'Курьером по Москве',
        payments: [1, 3]
    }, {
        id: 3,
        label: 'Курьером по Москве (за МКАД)',
        payments: [1, 3]
    }, {
        id: 4,
        label: 'Почта России',
        payments: [1, 3]
    }, {
        id: 5,
        label: 'Транспортные компании',
        payments: [1]
    }, {
        id: 6,
        label: 'Служба СДЭК (до пункта выдачи)',
        payments: [1, 3]
    }, {
        id: 7,
        label: 'Служба СДЭК (до двери получателя)',
        payments: [1, 3]
    }]
    const payments = [{
        id: 1,
        label: 'Онлайн оплата'
    }, {
        id: 2,
        label: 'Оплата в магазине'
    }, {
        id: 3,
        label: 'Оплата при получении'
    }]
    $('.js-calc').each(function(i, form) {
        const cityInput = form.querySelector('[name="city"]')
        const cityLabel = form.querySelector('.js-calc-city-name')
        const citySubmit = form.querySelector('.js-calc-city-submit')
        const citySelect = form.querySelector('[name="autocomplete"]')

        const deliverySelect = form.querySelector('[name="delivery"]')
        const deliveryChoices = new Choices(deliverySelect, {
            searchEnabled: false,
            noChoicesText: 'Укажите город'
        })

        const paymentSelect = form.querySelector('[name="payment"]')
        const paymentChoices = new Choices(paymentSelect, {
            searchEnabled: false,
            noChoicesText: 'Выберите способ доставки'
        })

        const errorBox = form.querySelector('.js-calc-error')
        const resultBox = form.querySelector('.js-calc-result')
        const resultDelivery = form.querySelector('.js-calc-result-delivery')
        const resultTime = form.querySelector('.js-calc-result-time')
        const resultPrice = form.querySelector('.js-calc-result-price')

        const costInput = form.querySelector('[name="cost"]')
        const calculateSubmit = form.querySelector('.js-calc-calculate')

        const setCity = function (city) {
            if (city.indexOf('г ') === 0) {
                city = city.substring(2)
            }
            cityLabel.innerHTML = cityInput.value = city
            let idx = []
            if (['Воронеж', 'Курск'].indexOf(city) !== -1) {
                idx = [1]
            }
            else if (['Москва'].indexOf(city) !== -1) {
                idx = [1, 2, 3]
            }
            else {
                idx = [4, 5, 6, 7]
            }
            // способы доставки в соответствии с выбранным городом
            deliveryChoices.setChoices(deliveries.filter(row => idx.indexOf(row.id) !== -1).map((row, index) => ({
                value: row.id,
                label: row.label,
                selected: index === 0
            })), 'value', 'label', true)
            deliverySelect.dispatchEvent(new Event('change'))
        }

        const onChangeDelivery = function (e) {
            let item =  deliveries.find(row => row.id === parseInt(e.target.value))
            // способы оплаты в соответствии с выбранным способом доставки
            paymentChoices.setChoices(payments.filter(row => item.payments.indexOf(row.id) !== -1).map((row, index) => ({
                value: row.id,
                label: row.label,
                selected: index === 0
            })), 'value', 'label', true)
        }

        const calculate = function (e) {
            e.preventDefault()

            let errors = []
            if (!cityInput.value) {
                errors.push('Укажите город.')
            }
            if (!costInput.value) {
                errors.push('Укажите стоимость заказа.')
            }
            if (!deliverySelect.value) {
                errors.push('Укажите способ доставки.')
            }
            if (!paymentSelect.value) {
                errors.push('Укажите способ оплаты.')
            }
            if (errors.length > 0) {
                $(resultBox).hide()
                $(errorBox).html(errors.join('<br />')).show()
                return false
            } else {
                $(resultBox).show()
                $(errorBox).hide()
            }

            let payment = payments.find(row => row.id === parseInt(paymentSelect.value))
            let delivery = deliveries.find(row => row.id === parseInt(deliverySelect.value))

            resultDelivery.innerHTML = delivery.label

            if (['Воронеж', 'Курск'].indexOf(cityInput.value) !== -1) {
                resultTime.innerHTML = 'Сегодня'
                resultPrice.innerHTML = 'Бесплатно'
            }
            else if (['Москва'].indexOf(cityInput.value) !== -1) {
                if (delivery.id === 1) {
                    if (payment.id === 2) {
                        resultTime.innerHTML = 'Сегодня'
                        resultPrice.innerHTML = 'Бесплатно'
                    }
                    else {
                        errors.push('Неверный способ оплаты.')
                    }
                }
                else if ([2, 3].indexOf(delivery.id) !== -1) {
                    if (payment.id === 1) {
                        if (costInput.value < 5000) {
                            resultTime.innerHTML = delivery.id === 2 ? 'Завтра' : '1-2 дня'
                            resultPrice.innerHTML = '400 руб.'
                        }
                        else if (costInput.value >= 5000 && costInput.value < 15000) {
                            resultTime.innerHTML = delivery.id === 2 ? 'Завтра' : '1-2 дня'
                            resultPrice.innerHTML = '300 руб.'
                        }
                        else if (costInput.value >= 15000) {
                            resultTime.innerHTML = delivery.id === 2 ? 'Завтра' : '1-2 дня'
                            resultPrice.innerHTML = 'Бесплатно'
                        }
                    }
                    else if (payment.id === 3) {
                        if (costInput.value < 5000) {
                            resultTime.innerHTML = delivery.id === 2 ? 'Завтра' : '1-2 дня'
                            resultPrice.innerHTML = '400 + ' + (costInput.value * 0.04) + ' = ' + (costInput.value * 0.04 + 400) + ' руб.'
                        }
                        else if (costInput.value >= 5000 && costInput.value < 15000) {
                            resultTime.innerHTML = delivery.id === 2 ? 'Завтра' : '1-2 дня'
                            resultPrice.innerHTML = '300 + ' + (costInput.value * 0.04) + ' = ' + (costInput.value * 0.04 + 300) + ' руб.'
                        }
                        else if (costInput.value >= 15000) {
                            resultTime.innerHTML = delivery.id === 2 ? 'Завтра' : '1-2 дня'
                            resultPrice.innerHTML = '0 + ' + (costInput.value * 0.04) + ' = ' + (costInput.value * 0.04) + ' руб.'
                        }
                    }
                    else {
                        errors.push('Неверный способ оплаты.')
                    }
                }
                else {
                    errors.push('Неверный способ доставки.')
                }
            }
            else {
                if (delivery.id === 4) {
                    if (payment.id === 1) {
                        if (costInput.value < 5000) {
                            resultTime.innerHTML = '4-6 дней'
                            resultPrice.innerHTML = '300 руб.'
                        }
                        else if (costInput.value >= 5000) {
                            resultTime.innerHTML = '4-6 дней'
                            resultPrice.innerHTML = 'Бесплатно'
                        }
                    }
                    else if (payment.id === 3) {
                        if (costInput.value < 5000) {
                            resultTime.innerHTML = '4-6 дней'
                            resultPrice.innerHTML = '300 + ' + (costInput.value * 0.08) + ' = ' + (costInput.value * 0.08 + 300) + ' руб.'
                        }
                        else if (costInput.value >= 5000) {
                            resultTime.innerHTML = '4-6 дней'
                            resultPrice.innerHTML = '0 + ' + (costInput.value * 0.08) + ' = ' + (costInput.value * 0.08) + ' руб.'
                        }
                    }
                    else {
                        errors.push('Неверный способ оплаты.')
                    }
                }
                else if (delivery.id === 5) {
                    if (payment.id === 1) {
                        if (costInput.value < 5000) {
                            resultTime.innerHTML = '3-5 дней'
                            resultPrice.innerHTML = '400 руб.'
                        }
                        else if (costInput.value >= 5000 && costInput.value < 15000) {
                            resultTime.innerHTML = '3-5 дней'
                            resultPrice.innerHTML = '350 руб.'
                        }
                        else if (costInput.value >= 15000) {
                            resultTime.innerHTML = '3-5 дней'
                            resultPrice.innerHTML = 'Бесплатно'
                        }
                    }
                    else {
                        errors.push('Неверный способ оплаты.')
                    }
                }
                else if (delivery.id === 6) {
                    if (payment.id === 1) {
                        if (costInput.value < 5000) {
                            resultTime.innerHTML = '2-4 дня'
                            resultPrice.innerHTML = '500 руб.'
                        }
                        else if (costInput.value >= 5000 && costInput.value < 15000) {
                            resultTime.innerHTML = '2-4 дня'
                            resultPrice.innerHTML = '400 руб.'
                        }
                        else if (costInput.value >= 15000) {
                            resultTime.innerHTML = '2-4 дня'
                            resultPrice.innerHTML = 'Бесплатно'
                        }
                    }
                    else if (payment.id === 3) {
                        if (costInput.value < 5000) {
                            resultTime.innerHTML = '2-4 дня'
                            resultPrice.innerHTML = '500 + ' + (costInput.value * 0.04) + ' = ' + (costInput.value * 0.04 + 500) + ' руб.'
                        }
                        else if (costInput.value >= 5000 && costInput.value < 15000) {
                            resultTime.innerHTML = '2-4 дня'
                            resultPrice.innerHTML = '400 + ' + (costInput.value * 0.04) + ' = ' + (costInput.value * 0.04 + 400) + ' руб.'
                        }
                        else if (costInput.value >= 15000) {
                            resultTime.innerHTML = '2-4 дня'
                            resultPrice.innerHTML = '0 + ' + (costInput.value * 0.04) + ' = ' + (costInput.value * 0.04) + ' руб.'
                        }
                    }
                    else {
                        errors.push('Неверный способ оплаты.')
                    }
                }
                else if (delivery.id === 7) {
                    if (payment.id === 1) {
                        if (costInput.value < 5000) {
                            resultTime.innerHTML = '2-4 дня'
                            resultPrice.innerHTML = '1000 руб.'
                        }
                        else if (costInput.value >= 5000 && costInput.value < 15000) {
                            resultTime.innerHTML = '2-4 дня'
                            resultPrice.innerHTML = '900 руб.'
                        }
                        else if (costInput.value >= 15000 && costInput.value < 30000) {
                            resultTime.innerHTML = '2-4 дня'
                            resultPrice.innerHTML = '500 руб.'
                        }
                        else if (costInput.value >= 30000) {
                            resultTime.innerHTML = '2-4 дня'
                            resultPrice.innerHTML = 'Бесплатно'
                        }
                    }
                    else if (payment.id === 3) {
                        if (costInput.value < 5000) {
                            resultTime.innerHTML = '2-4 дня'
                            resultPrice.innerHTML = '1000 + ' + (costInput.value * 0.04) + ' = ' + (costInput.value * 0.04 + 1000) + ' руб.'
                        }
                        else if (costInput.value >= 5000 && costInput.value < 15000) {
                            resultTime.innerHTML = '2-4 дня'
                            resultPrice.innerHTML = '900 + ' + (costInput.value * 0.04) + ' = ' + (costInput.value * 0.04 + 900) + ' руб.'
                        }
                        else if (costInput.value >= 15000 && costInput.value < 30000) {
                            resultTime.innerHTML = '2-4 дня'
                            resultPrice.innerHTML = '500 + ' + (costInput.value * 0.04) + ' = ' + (costInput.value * 0.04 + 500) + ' руб.'
                        }
                        else if (costInput.value >= 30000) {
                            resultTime.innerHTML = '2-4 дня'
                            resultPrice.innerHTML = '0 + ' + (costInput.value * 0.04) + ' = ' + (costInput.value * 0.04) + ' руб.'
                        }
                    }
                    else {
                        errors.push('Неверный способ оплаты.')
                    }
                }
                else {
                    errors.push('Неверный способ доставки.')
                }
            }
        }

        $(citySubmit).click(e => setCity(citySelect.value))
        $(citySelect).suggestions({
            token: "4b25f9cb98a44de7c49207580b8644f4c4cfa2ba",
            type: "ADDRESS",
            hint: false,
            scrollOnFocus: false,
            bounds: "city",
            constraints: {
                label: "",
                locations: { city_type_full: "город" }
            },
            onSelect: e => setCity(e.data.city)
        })
        $(deliverySelect).change(onChangeDelivery)
        $(form).submit(calculate)

        if (form.dataset.city) {
            setCity(form.dataset.city)
        }
        // $(paymentSelect).change(calculate)
        // $(deliverySelect).change(calculate)
        // $(costInput).change(calculate)
    });
});

/*$('.brands').each(function (wrapper) {
    const maxHeight = function () {
        return window.matchMedia("(max-width: 640px)").matches ? '100px' : '50px'
    }

    let $body = $('.brands__body', wrapper);
    let $more = $('.brands__more', wrapper);
    let $shadow = $('.brands__shadow', wrapper);
    let height = $body.height();
    let opened = false;

    $body.css('height', maxHeight());

    $more.click(function () {
        if (window.matchMedia("(max-width: 640px)").matches) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $body.offset().top - 80
            }, 1000);
        }

        if (opened) {
            opened = false;
            $body.css('height', maxHeight());
            $more.html('Показать все');
            $shadow.show();
        } else {
            opened = true;
            $body.css('height', height);
            $more.html('Скрыть');
            $shadow.hide();
        }
    });
});*/

$('.js-categories-slider').slick({
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    variableWidth: true,
    swipeToSlide: true,
    touchThreshold: 15
});


WebFont.load({
    custom: {
        families: ['SF UI Text', 'SF UI Display'],
        urls: ['/assets/nemopro/src/fonts/sf/SFUIText.css', '/assets/nemopro/src/fonts/sf/SFUIDisplay.css']
    },
    active: function() {
        setTimeout(optionsWidth, 0);
    }
});

$('.js-detail-gallery').each(function () {
    var $wrapper = $(this);
    var $thumbs = $('.js-detail-gallery-thumbs', this);
    var $main = $('.js-detail-gallery-main', this);
    console.log(Math.ceil(window.innerWidth / 64));
    // Product Gallery
    var galleryThumbs = new Swiper($thumbs[0], {
        slidesPerView: 5,
        freeMode: true,
        loopedSlides: 6,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        centerInsufficientSlides: true
    });
    var galleryTop = new Swiper($main[0], {
        slidesPerView: 1,
        loop: true,
        loopedSlides: 6, //looped slides should be the same
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
    $('.js-detail-gallery-main', this).on('click', '.swiper-slide', function () {
        $wrapper.addClass('detail-gallery_lightbox');
        galleryTop.update();
        galleryThumbs.update();
        var perView = Math.ceil(window.innerWidth / 64);
        galleryThumbs.params.slidesPerView = perView;
        galleryThumbs.params.breakpoints['768'].slidesPerView = perView;
        galleryThumbs.params.breakpoints['1024'].slidesPerView = perView;
        galleryThumbs.update();
        galleryTop.autoplay.stop();
    });
    $('.js-detail-gallery-button', this).click(function () {
        $wrapper.removeClass('detail-gallery_lightbox');
        galleryTop.update();
        galleryThumbs.update();
        var perView = Math.ceil(window.innerWidth / 64);
        galleryThumbs.params.slidesPerView = perView;
        galleryThumbs.params.breakpoints['768'].slidesPerView = perView;
        galleryThumbs.params.breakpoints['1024'].slidesPerView = perView;
        galleryThumbs.update();
        galleryTop.autoplay.start();
    });
});
