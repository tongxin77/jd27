window.addEventListener('load', function () {
    new Swiper('.main-left .swiper-container', {
        // 垂直滚动
        direction: 'vertical',
        // 可以支持多张轮播图显示 属性一定要加 内容滚动的距离如果不加无法计算      
        slidesPerView: 'auto',
        freeMode: true,

    });

    new Swiper('.main-right .swiper-container', {
        // 垂直滚动
        direction: 'vertical',
        // 可以支持多张轮播图显示 属性一定要加 内容滚动的距离如果不加无法计算      
        slidesPerView: 'auto',
        freeMode: true,

    });


    // 点击吸顶
    // 现货取所有需要吸顶的li标签
    var lis = document.querySelectorAll('.main-left li');

    // 获取每个li的高度
    var liHeight = lis[0].offsetHeight;
    // console.log(liHeight);
    // 获取父元素swiper-container

    //
    var wrapper=document.querySelector('.swiper-wrapper');

    var container=document.querySelector('.swiper-container');
    var slide=document.querySelector('.swiper-slide');
    var distance=container.offsetHeight-slide.offsetHeight



    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].addEventListener('click', function () {
            var translateY = -this.index * liHeight;
            // console.log(translateY);
            if(distance>translateY){
                translateY=distance
            }
            wrapper.style.transition="all .2s";
            wrapper.style.transform="translateY("+translateY+"px)";
            for(var j =0;j<lis.length;j++){
                lis[j].classList.remove("active");
            }
            this.classList.add("active");

        })
        
    }




})