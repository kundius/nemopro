$(function() {
    /* сообщение о добавлении в корзину */
    miniShop2.Callbacks.add('Cart.add.response.success', 'add_to_cart_message', function(response) {
        $.post(
            '/template/actions.php',
            {
                action: 'cart/add/success',
                key: response.data.key
            },
            function(r) {
                r = $.parseJSON(r);
                
                if (r.success) {
                    
                    $('form.ms2_form')
                        .has('input[name="id"][value="' + r.data.product.id + '"]')
                        .addClass('added');
                    
                    var modal = UIkit.modal($(r.html).appendTo("body"), {
                        center: true
                    });
                    
                    modal.on("hide.uk.modal", function(){
                        modal.element.remove();
                    });
                    
                    modal.show();
                }
            }
        );
    });
    
    /* Обновление цены после ввода купона в корзине */
    miniShop2.Callbacks.add('Order.add.ajax.done', 'coupon_code', function(res) {
        var res = res.responseJSON;
        if (typeof(res.data['coupon_code']) != 'undefined') {
            miniShop2.Order.getcost();
        }
        if(typeof(res.data['coupon_code']) == 'undefined' || res.data['coupon_code'] == '') {
            $('#coupon_code_desc').text('');
        } else {
            $('#coupon_code_desc').text('Скидка применена!');
        }
    });
    
    /* Обновление скидки */
    function discountUpdateCart() {
        $.ajax({
            url: location.href,
            success: function(response){
                var html = $(document.createElement('div')).append(response);
                
                // обновление стоимости корзины
                $('.ms2_total_count').html(html.find('.ms2_total_count').html());
                $('.ms2_total_cost').html(html.find('.ms2_total_cost').html());
                html.find('.js-cart-row').each(function() {
                    var id = $(this).attr('id'),
                        target = $('[id="' + id + '"]');
    
                    $('.js-cart-row-price', target).html( $('.js-cart-row-price', this).html() );
                    $('.js-cart-row-oldprice', target).html( $('.js-cart-row-oldprice', this).html() );
                    $('.js-cart-row-discount', target).html( $('.js-cart-row-discount', this).html() );
                    $('.ms2_total_cost_row', target).html( $('.ms2_total_cost_row', this).html() );
                });
                
                // обновление стоимости заказа
                miniShop2.Order.getcost();
            }
        });
    }

    /* Обновление цены после изменений в корзине */
    miniShop2.Callbacks.add('Cart.change.response.success', 'change_cart', discountUpdateCart);
    miniShop2.Callbacks.add('Cart.remove.response.success', 'remove_cart', discountUpdateCart);

    /* Обновление цены после ввода купона в корзине */
    miniShop2.Callbacks.add('Order.add.response.success', 'discount_code', function(response) {
        if(response.data.discount_code) {
            $('.cart-coupon').addClass('cart-coupon--applied');
            discountUpdateCart();
        }
    });

    /* Обновление цены после включения кредита в корзине */
    miniShop2.Callbacks.add('Order.add.response.success', 'credit', function(response) {
        if (typeof(response.data['credit']) != 'undefined') {
            discountUpdateCart();
        }
    });

    /* обновление стоимости доставки */
    function updDeliveryPrice() {
        var form = $('form#msOrder'),
            params = {
                'action': 'delivery/price',
                'payment': $('[name="payment"]:checked', form).val()
            };
            
        $('.js-delivery-price').each(function() {
            var span = $(this),
                data = $.extend({
                    'delivery': span.data('id')
                }, params);
            
            $.post("template/actions.php", data, function(response) {
                if(response.price > 0) {
                    span.html('&mdash; <i>' + response.price + ' <i class="uk-icon-rub"></i></i>');
                } else {
                    span.html('');
                }
            }, 'json');
        });
    }
    miniShop2.Callbacks.add('Order.getcost.response.success', 'updDeliveryPrice', updDeliveryPrice);
    
    function updPaymentDesc(response) {
        var form = $('form#msOrder'),
            params = {
                'action': 'payment/description',
                'delivery': $('[name="delivery"]:checked', form).val()
            };
            
        $('.js-delivery-description').each(function() {
            var span = $(this),
                data = $.extend({
                    'payment': span.data('id')
                }, params);
            
            $.post("template/actions.php", data, function(response) {
                if(response.description) {
                    span.html(response.description);
                } else {
                    span.html('');
                }
            }, 'json');
        });
    }
    miniShop2.Callbacks.add('Order.getcost.response.success', 'updPaymentDesc', updPaymentDesc);

    miniShop2.Callbacks.add('Order.submit.response.success', 'order_success', function(response) {
        // if (response.data['redirect']) {
        //     document.location.href = response.data['redirect'];
        // }
        // else if (response.data['msorder']) {
            var href = document.location.pathname;
            if (response.data['msorder']) {
                href = document.location.search
                    ? href + document.location.search + '&msorder=' + response.data['msorder']
                    : href + '?msorder=' + response.data['msorder'];
            }
            if ($('#msGetOrder').length) {
                $.ajax({
                    url: href,
                    success: function(response) {
                        $('#msGetOrder').html($(document.createElement('div')).html(response).find('#msGetOrder').html());
                        
                        $('#cart-tabs li.uk-disabled').removeClass('uk-disabled').siblings().addClass('uk-disabled').end().click();
                        
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $(".content").offset().top - $('.toolbar').height()
                        }, 1000);
                    }
                });
            } else {
                document.location.href = href;
            }
        // }
        // else {
        //     location.reload();
        // }
    });
    
    miniShop2.Callbacks.add('Order.submit.before', 'orderSubmitBefore', function() {
        document.querySelector('.js-order-submit').classList.add('preloader');
    });
    miniShop2.Callbacks.add('Order.submit.ajax.done', 'orderSubmitDone', function() {
        document.querySelector('.js-order-submit').classList.remove('preloader');
    });
    
    miniShop2.Callbacks.add('Cart.remove.before', 'remove_cart_before', function() {
        $('.content').addClass('preloader');
    });
    miniShop2.Callbacks.add('Cart.remove.ajax.always', 'remove_cart_after', function() {
        setTimeout(function() {$('.content').removeClass('preloader')}, 800);
    });
});