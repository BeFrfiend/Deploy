const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
window.addEventListener('scroll', function() {
    if (pageYOffset != 0){
        document.getElementById('menu').classList.add('dynamic');
    } else {
        document.getElementById('menu').classList.remove('dynamic');
    }

    var scroll_top = $(document).scrollTop();

    var menu_selector = ".menu"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
    var menu = $('#nav').outerHeight();

    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top - $(window).height() / 2 <= scroll_top && target.position().top + $(window).height() / 2 > scroll_top) {
            $(menu_selector + " a.current").removeClass("current");
            $(this).addClass("current");
        } else {
            $(this).removeClass("current");
        }
    });
});

$('.single-item').slick({
    dots:true,
    speed: 1000,
    easing:'ease',
    autoplay: true,
    autoplaySpeed: 5000
});


