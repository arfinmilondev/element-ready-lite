!function($){var a=function(p,$){var f=p.find(".element-ready-carousel-activation"),a=f.data("settings"),q=f.data("id"),d=a.slideid,r=parseInt(a.slide_item_margin),e=a.autoplay,s=parseInt(a.autoplay_speed)||3e3,t=parseInt(a.animation_speed)||300,u=a.center_mode,v=a.rows?parseInt(a.rows):1,w=a.focusonselect,x=a.vertical,y=a.infinite,z=parseInt(a.desktop_item)||1,A=parseInt(a.desktop_item_scroll)||1,B=parseInt(a.medium_item)||1,C=parseInt(a.medium_item_margin)||800,D=parseInt(a.medium_item_scroll)||1,E=parseInt(a.tablet_item)||1,F=parseInt(a.tablet_item_margin)||800,G=parseInt(a.tablet_item_scroll)||1,H=parseInt(a.mobile_item)||1,I=parseInt(a.mobile_item_margin)||480,J=parseInt(a.mobile_item_scroll)||1,K=a.arrows;if(!0===K)var g={nextEl:".element-ready-carosul-next"+d,prevEl:".element-ready-carosul-prev"+d};else var g="";var L=a.dots,h=a.dots_type,M=a.dynamic_dots;if(!0===L)var h,i={el:".element-ready-carousel-dots"+d,type:h,dynamicBullets:M,dynamicMainBullets:1,clickable:!0,bulletElement:"div"};else var i="";var N=a.slide_scrollbar,O=a.slide_scrollbar_dragable,P=a.slide_scrollbar_hide;if(!0===N)var j={el:".swiper-scrollbar"+d,draggable:O,hide:P};else var j="";var c=a.slide_style,Q=a.cross_fade,R=a.cube_shadow,S=a.cube_item_shadow,T=parseInt(a.cube_shadow_offset),U=parseInt(a.cube_shadow_scale),V=parseInt(a.coverflow_rotate)||0,W=parseInt(a.coverflow_stretch)||80,X=parseInt(a.coverflow_depth)||200,Y=parseInt(a.coverflow_modifier)||1,Z=a.coverflow_shadow,_=parseInt(a.flip_rotate),aa=a.flip_shadow;if("slide"===c)var b="slide";else if("fade"===c)var b="fade",k={crossFade:Q};else if("cube"===c)var b="cube",l={shadow:R,slideShadows:S,shadowOffset:T,shadowScale:U};else if("coverflow"===c)var b="coverflow",m={rotate:V,stretch:W,depth:X,modifier:Y,slideShadows:Z};else if("flip"===c)var b="flip",n={rotate:_,slideShadows:aa};else var b="slide",k="",l="",m="",n="";if(!0===x)var o="vertical";else var o="horizontal";if(!0===e)var e={delay:s};else var e="";new Swiper(`.element-ready-carousel-activation[data-id=${q}]`,{navigation:g,pagination:i,scrollbar:j,loop:y,autoplay:e,speed:t,slideToClickedSlide:w,freeModeSticky:!0,direction:o,grabCursor:!0,freeMode:!1,centeredSlides:u,effect:b,coverflowEffect:m,fadeEffect:k,flipEffect:n,cubeEffect:l,slidesPerColumn:v,slidesPerGroup:A,slidesPerView:z,spaceBetween:r,breakpoints:{1024:{slidesPerView:B,spaceBetween:C,slidesPerGroup:D},768:{slidesPerView:E,spaceBetween:F,slidesPerGroup:G},640:{slidesPerView:H,spaceBetween:I,slidesPerGroup:J}}})};$(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/Element_Ready_Image_Carousel_Alt.default",a)})}(jQuery);