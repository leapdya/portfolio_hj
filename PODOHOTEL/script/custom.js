// nav 메뉴 누르면 해당 페이지로 이동
var nav = $('nav ul li')
var cont = $('section')
nav.click(function (e) {
    event.preventDefault();
    var target = $(this)
    var index = target.index()
    // alert(index);
    // 순번을 제대로 기억하는지 확인해본것
    var page = cont.eq(index + 1)
    var pageTop = page.offset().top
    $('html,body').animate({
        scrollTop: pageTop
    })
})
// 스크롤시 nav li 배경 변화
$(window).scroll(function () {
    var Cscroll = $(this).scrollTop() + 53
    if (Cscroll >= cont.eq(0).offset().top) {
        nav.removeClass('active')
    }
    if (Cscroll >= cont.eq(1).offset().top) {
        nav.removeClass('active')
        nav.eq(0).addClass('active')
    }
    if (Cscroll >= cont.eq(2).offset().top) {
        nav.removeClass('active')
        nav.eq(1).addClass('active')
    }
    if (Cscroll >= cont.eq(3).offset().top) {
        nav.removeClass('active')
        nav.eq(2).addClass('active')
    }
    if (Cscroll >= cont.eq(4).offset().top) {
        nav.removeClass('active')
        nav.eq(3).addClass('active')
    }
    if (Cscroll >= cont.eq(5).offset().top) {
        nav.removeClass('active')
        nav.eq(4).addClass('active')
    }
    if (Cscroll >= cont.eq(6).offset().top) {
        nav.removeClass('active')
        nav.eq(5).addClass('active')
    }
})
// sec1 - Banner Slide
$(document).ready(function () {
    var num = 0;
    setInterval(function () {
        if (num < 1) {
            num++;
        } else {
            num = 0;
        }
        $('.banner').removeClass('active');
        $('.banner').eq(num).addClass('active');
    }, 4000)
})
// sec1 - Mobile banner slide
$(document).ready(function () {
    var mob = 0;
    setInterval(function () {
        if (mob < 1) {
            mob++;
        } else {
            mob = 0;
        }
        $('.mobile').removeClass('active');
        $('.mobile').eq(mob).addClass('active');
    }, 4000)
})
// sec3 - Rooms tap
$('.tab_title a').click(function () {
    var abc = $(this).index();
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.room').removeClass('active');
    $('.room').eq(abc).addClass('active');
    $('.tab_text').children().removeClass('active');
    $('.tab_text').children().eq(abc).addClass('active');
})
// sec3 - Rooms tap Slide
$(document).ready(function () {
    var room = 0;
    setInterval(function () {
        if (room < 2) {
            room++;
        } else {
            room = 0;
        }
        $('.ti01 a ').removeClass('active');
        $('.ti01 a').eq(room).addClass('active');
        $('.ti02 a ').removeClass('active');
        $('.ti02 a').eq(room).addClass('active');
        $('.ti03 a ').removeClass('active');
        $('.ti03 a').eq(room).addClass('active');
        $('.ti04 a ').removeClass('active');
        $('.ti04 a').eq(room).addClass('active');
    }, 3000)
})
// sec4 - Special offer Slide
$('#sec4 .arr_right02').click(function () {
    $('.back01').removeClass('active');
    $('.back01').siblings().addClass('active');
})
$('#sec4 .arr_left02').click(function () {
    $('.back02').removeClass('active');
    $('.back02').siblings().addClass('active');
})
// sec6 - gallery 이미지 클릭시 확대
$(document).ready(function(){
    $("a[rel^='prettyPhoto']").prettyPhoto();
});
//sec7 - reservation datepicker
$(function () {
    $("#datepicker1, #datepicker2").datepicker({
        dateFormat: 'yy.mm.dd'
    });
});