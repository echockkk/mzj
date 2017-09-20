window.onload = function(){

	//轮播图部分
	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        autoplay: 2000,
        //用户操作后，禁止缩放
        autoplayDisableOnInteraction : false,
        loop: true
    });
}