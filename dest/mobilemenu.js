!function a(o,s,i){function r(t,e){if(!s[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(d)return d(t,!0);throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}n=s[t]={exports:{}},o[t][0].call(n.exports,function(e){return r(o[t][1][e]||e)},n,n.exports,a,o,s,i)}return s[t].exports}for(var d="function"==typeof require&&require,e=0;e<i.length;e++)r(i[e]);return r}({1:[function(e,t,n){$(function(){$(".mobilemenu").each(function(){var i=$(this),r=i.data("overflow")||scroll;i.find(".wrap").first().data("params",{depth:0,scroll:{},height:{}}),i.find(".dropdown").each(function(){var e=$(this),t=e.prev(),n=e.parent().parent().prev();e.prepend('<li class="menu_title"><a href="'+t.attr("href")+'">'+t.text()+"</a></li>"),e.prepend('<li class="menu_back"><a href="#" rel="nofollow"><i class="uk-icon-angle-left svg"></i> '+(n.length?n.text():"Каталог")+"</a></li>")}),$(".menu a, .social-icons a",i).click(function(e){var t,n,a,o,s=$(this);s.hasClass("parent")?(e.preventDefault(),i.isDowndrop?s.closest("li").hasClass("expanded")?s.closest("li").removeClass("expanded"):s.closest("li").addClass("expanded"):(s.closest("li").addClass("expanded"),i.isDowndrop||(t=i.find(".scroller").first(),(n=i.find(".wrap").first()).length&&(a=n.data("params"),(e=i.find(".expanded>.dropdown").eq(a.depth)).length&&(a.scroll[a.depth]=parseInt(i.scrollTop()),a.height[a.depth+1]=Math.max(e.height(),(a.depth?i.find(".expanded>.dropdown").eq(a.depth-1):n).height()),t.css("height",a.height[a.depth+1]+"px"),++a.depth,n.css("transform","translateX("+-100*a.depth+"%)"),"scroll"===r?setTimeout(function(){i.animate({scrollTop:0},200)},100):setTimeout(function(){$("html, body").animate({scrollTop:0},200)},100),o=e.height(),setTimeout(function(){o?t.css("height",o+"px"):t.css("height","")},200)),n.data("params",a))))):(!s.closest("li").hasClass("counters")||void 0!==(a=s.attr("href"))&&(window.location.href=a,window.location.reload()),s.closest(".menu_back").length||CloseMobileMenu())}),$(".dropdown .menu_back",i).click(function(e){e.preventDefault();var t,n,a,o=$(this);i.isDowndrop||(t=i.find(".scroller").first(),(e=i.find(".wrap").first()).length&&(0<(n=e.data("params")).depth&&i.find(".expanded>.dropdown").eq(n.depth-1).length&&(t.css("height",n.height[n.depth]+"px"),--n.depth,e.css("transform","translateX("+-100*n.depth+"%)"),setTimeout(function(){i.animate({scrollTop:n.scroll[n.depth]},200)},100),a=!!n.depth&&i.find(".expanded>.dropdown").eq(n.depth-1).height(),setTimeout(function(){a?t.css("height",a+"px"):t.css("height","")},200)),e.data("params",n))),setTimeout(function(){o.closest(".expanded").removeClass("expanded")},400)})}),$(".left-menu .parent-active").each(function(){$(this).click()});var e=!1;$("#uk-offcanvas").on("show.uk.offcanvas",function(){e||($(".parent-active",this).each(function(){$(this).click()}),e=!0)})})},{}]},{},[1]);
//# sourceMappingURL=mobilemenu.js.map
