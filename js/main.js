Splitting();
splitFlag = true;
keySkillsBlock = $('.keySkills');

$(window).scroll(function () {
    if ( $(window).scrollTop() < $('header').height() ) {
        $('#scrollUp').css({
            opacity:0,
        })
    }else { $('#scrollUp').css({opacity:1,})}

    appearLeft();

    if (splitFlag === false) return ;
    if ( $(window).scrollTop() > keySkillsBlock.offset().top -$(window).height()/1.2  ){
        $('.keySkills ul').attr('data-splitting', '');
        Splitting();
        splitFlag = false ;
    }
});


$('#scrollDown').click( function () {
    scrollFirstDisplay();
    return false;
});
$('header').one('wheel', function () {
    scrollFirstDisplay();
});
function scrollFirstDisplay() {
    $('html, body').animate({ scrollTop: $('header').height() }, 800);
}

$('#scrollUp').css({
    opacity:0,
})  .click( function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
});

oceanLine3 = $('.oceanAnim .wave3');
width3 = $(oceanLine3).width();
function createWave3() {
    let wave3 = document.createElement('IMG');
    wave3.src = "img/wave3.png";
    wave3.classList.add('waveStyle');
    $(oceanLine3).prepend(wave3);
    $(wave3).animate({
        'left' : -10+'%',
    }, {
        duration: 13000,
        easing : 'linear',
        complete : function () {
            $(this).remove();
        }
    });
}
oceanLine2 = $('.oceanAnim .wave2');
width2 = $(oceanLine2).width();
function createWave2() {
    let wave3 = document.createElement('IMG');
    wave3.src = "img/wave2.png";
    wave3.classList.add('waveStyle');
    $(oceanLine2).prepend(wave3);
    $(wave3).animate({
        'left' : -10+'%',
    }, {
        duration: 16000,
        easing : 'linear',
        complete : function () {
            $(this).remove();
        }
    });
}
oceanLine1 = $('.oceanAnim .wave1');
width1 = $(oceanLine1).width();
function createWave1() {
    let wave3 = document.createElement('IMG');
    wave3.src = "img/wave1.png";
    wave3.classList.add('waveStyle');
    $(oceanLine1).prepend(wave3);
    $(wave3).animate({
        'left' : -10+'%',
    }, {
        duration: 19000,
        easing : 'linear',
        complete : function () {
            $(this).remove();
        }
    });
}
createWave1();
createWave2();
createWave3();
setInterval(function () {
    let position3 = parseInt($('.oceanAnim .wave3 img').css('left'));
    if (position3 <= width3 - 95){
        createWave3();
    }
    let position2 = parseInt($('.oceanAnim .wave2 img').css('left'));
    if (position2 <= width2 - 95){
        createWave2();
    }
    let position1 = parseInt($('.oceanAnim .wave1 img').css('left'));
    if (position1 <= width1 - 95){
        createWave1();
    }
}, 20);

function cloudMove() {
    let cloud = document.createElement('IMG');
    cloud.src = "img/cloud.png";
    let sizeCloud = getRandom(50, 300);
    $('.oceanAnim').append(cloud);
    $(cloud).css({
        'position' : 'absolute',
        'opacity': 0.8,
        'left': 100 + '%',
        'width': sizeCloud,
        'height':sizeCloud * 0.55,
        'top':getRandom(0, 100)
    }).animate({
        'left' : -20+'%',
    }, {
        duration: getRandom(20000, 40000),
        easing : 'linear',
        complete : function () {
            $(this).remove();
        }
    });
}

setInterval(function () {
    cloudMove();
},7000);


$('article.container').each(function (){
    $(this).css({
        transform : `translateX(-400px)`,
        transition : `.7s`,
        opacity : 0,
    });
});
function appearLeft() {
    $('article.container').each(function () {
        if ($(window).scrollTop() > $(this).offset().top- $(window).height()/1.2){
            $(this).css({
                transform : `translateX(0)`,
                opacity : 1,
            });
        }
    });
}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setTimeout(function () {
    $('#loader').animate({
        opacity: 0
    }, {
        duration: 500,
        easing : 'linear',
        complete : function () {
            $(this).remove();
        }
    });
}, 4400);