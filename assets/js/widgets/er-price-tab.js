!function($){var a=function(b,$){var a=$("#"+b.find(".tabs__area").attr("id")),c=a.find(".tab__nav a"),d=a.find(".tab__nav li"),e=a.find(".single__tab__item");c.on("click",function(a){$(d).removeClass("active"),$(this).parent().addClass("active"),e.hide(),e.removeClass("active"),$($(this).attr("href")).fadeIn(700),$($(this).attr("href")).addClass("active"),a.preventDefault()})};$(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/Element_Ready_Price_Tabs_Widget.default",a)})}(jQuery);