$(function() {
    $(".mobilemenu").each(function() {
        var mobilemenu = $(this);
        var overflow = mobilemenu.data('overflow') || 'scroll'
    
        // дефолтные настройки для скрола
        mobilemenu.find(".wrap").first().data("params", {
            depth: 0,
            scroll: {},
            height: {}
        });
        
        // дополнительная разметка
        mobilemenu.find(".dropdown").each(function() {
            var $this = $(this);
            var $parent = $this.prev();
            var $grandparent = $this.parent().parent().prev();
            $this.prepend('<li class="menu_title"><a href="' + $parent.attr('href') + '">' + $parent.text() + '</a></li>');
            $this.prepend('<li class="menu_back"><a href="#" rel="nofollow"><i class="uk-icon-angle-left svg"></i> ' + ($grandparent.length ? $grandparent.text() : 'Каталог') + '</a></li>');
        });
        
        $(".menu a, .social-icons a", mobilemenu).click(function(e) {
            var t = $(this);
            if (t.hasClass("parent"))
                e.preventDefault(),
                mobilemenu.isDowndrop ? t.closest("li").hasClass("expanded") ? t.closest("li").removeClass("expanded") : t.closest("li").addClass("expanded") : (t.closest("li").addClass("expanded"),
                function() {
                    if (!mobilemenu.isDowndrop) {
                        var e = mobilemenu.find(".scroller").first()
                          , t = mobilemenu.find(".wrap").first();
                        if (t.length) {
                            var a = t.data("params")
                              , i = mobilemenu.find(".expanded>.dropdown").eq(a.depth);
                            if (i.length) {
                                a.scroll[a.depth] = parseInt(mobilemenu.scrollTop()),
                                a.height[a.depth + 1] = Math.max(i.height(), a.depth ? mobilemenu.find(".expanded>.dropdown").eq(a.depth - 1).height() : t.height()),
                                e.css("height", a.height[a.depth + 1] + "px"),
                                ++a.depth,
                                t.css("transform", "translateX(" + -100 * a.depth + "%)");
                                if (overflow === 'scroll') {
                                    setTimeout(function() {
                                        mobilemenu.animate({
                                            scrollTop: 0
                                        }, 200)
                                    }, 100);
                                } else {
                                    // setTimeout(function() {
                                    //     $('html, body').animate({
                                    //         scrollTop: 0
                                    //     }, 200)
                                    // }, 100);
                                }
                                var o = i.height();
                                setTimeout(function() {
                                    o ? e.css("height", o + "px") : e.css("height", "")
                                }, 200)
                            }
                            t.data("params", a)
                        }
                    }
                }());
            else {
                if (t.closest("li").hasClass("counters")) {
                    var a = t.attr("href");
                    void 0 !== a && (window.location.href = a,
                    window.location.reload())
                }
                t.closest(".menu_back").length || CloseMobileMenu()
            }
        });
        $(".dropdown .menu_back", mobilemenu).click(function(e) {
            e.preventDefault();
            var t = $(this);
            !function() {
                if (!mobilemenu.isDowndrop) {
                    var e = mobilemenu.find(".scroller").first()
                      , t = mobilemenu.find(".wrap").first();
                    if (t.length) {
                        var a = t.data("params");
                        if (0 < a.depth) {
                            var i = mobilemenu.find(".expanded>.dropdown").eq(a.depth - 1);
                            if (i.length) {
                                e.css("height", a.height[a.depth] + "px"),
                                --a.depth,
                                t.css("transform", "translateX(" + -100 * a.depth + "%)"),
                                setTimeout(function() {
                                    mobilemenu.animate({
                                        scrollTop: a.scroll[a.depth]
                                    }, 200)
                                }, 100);
                                var o = !!a.depth && mobilemenu.find(".expanded>.dropdown").eq(a.depth - 1).height();
                                setTimeout(function() {
                                    o ? e.css("height", o + "px") : e.css("height", "")
                                }, 200)
                            }
                        }
                        t.data("params", a)
                    }
                }
            }(),
            setTimeout(function() {
                t.closest(".expanded").removeClass("expanded")
            }, 400)
        });
    });
        
    $(".left-menu .parent-active").each(function() {
        $(this).click();
    });
    var offcanvasInitialExecuted = false;
    $('#uk-offcanvas').on('show.uk.offcanvas', function() {
        if (!offcanvasInitialExecuted) {
            $(".parent-active", this).each(function() {
                $(this).click();
            });
            offcanvasInitialExecuted = true;
        }
    });
});