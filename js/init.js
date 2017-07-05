$('.main_slider').bxSlider({
    pagerCustom:'.pager_wrap',
    controls:true,
    prevSelector:'.prev_btn',
    nextSelector:'.next_btn'
    
});

$('.com_slider').bxSlider({
    mode:'vertical',
    pager:false,
    prevSelector:'.com_prev_btn',
    nextSelector:'.com_next_btn',
    minSlides:5,
    moveSlides:1,
    auto:true,
    pause:4000
    
});