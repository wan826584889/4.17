require.config({
    baseUrl: 'js/libs',
    paths: {
        'jquery': 'jquery',
        'swiper': 'swiper',
        'iscroll': 'iscroll',
        'data': '../app/data'
    }
})

// 实例化swiper
require(['swiper'], function(swiper) {
    new swiper('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
    })
})
require(['iscroll'], function(iscroll) {
    new iscroll('.box', {
        scrollX: true
    })
})
require(['iscroll'], function(iscroll) {
    new iscroll('.box1', {
        scrollX: true
    })
})
require(['jquery'], function($) {
    $('#stuTempId')
})