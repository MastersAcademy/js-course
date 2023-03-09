document.addEventListener('DOMContentLoaded', function () {

    // Switch themes

    $('#dark').on('click', function () {
        $('body').css("background-color", "#1C1C1C");
        $('h1').css("color", "#fff");
        $('h2').css("color", "#fff");
        $('p').css("color", "#fff");
        $('.copyright p').css("color", "#1C1C1C");
    });

    $('#light').on('click', function () {
        $('body').css("background-color", "#fff");
    });

    // Popup

    $('body').append('<div id="blackout"></div>');
    
    var boxWidth = 550;
    
    function centerBox() {
        
        var winWidth = $(window).width();
        var winHeight = $(document).height();
        var scrollPos = $(window).scrollTop();
        var disWidth = (winWidth - boxWidth) / 2
        var disHeight = scrollPos + 150;    

        $('.popup').css({'width' : boxWidth+'px', 'left' : disWidth+'px', 'top' : disHeight+'px'});
        $('#blackout').css({'width' : winWidth+'px', 'height' : winHeight+'px'});

        return false;
    }
    
    
    $(window).resize(centerBox);
    $(window).scroll(centerBox);
    centerBox();    

    $('#contact').on('click',function(e) {

        e.preventDefault();
        e.stopPropagation();
        
        var scrollPos = $(window).scrollTop();
        
        $('#popup').show();
        $('#blackout').show();
        $('html,body').css('overflow', 'hidden');
        $('html').scrollTop(scrollPos);
    });

    $('[class*=popup]').click(function(e) { 
        e.stopPropagation(); 
    });

    $('html').click(function() { 
        var scrollPos = $(window).scrollTop();
        $('#popup').hide(); 
        $('#blackout').hide(); 
        $("html").css("overflow","auto");
        $('html').scrollTop(scrollPos);
    });
    
    $('.close').click(function() { 
        var scrollPos = $(window).scrollTop();
        $('#popup').hide(); 
        $('#blackout').hide(); 
        $("html").css("overflow","auto");
        $('html').scrollTop(scrollPos);
    });

    //Date in copyrights

    var nowDate = new Date();
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth();
    var day = nowDate.getDate();
    var copyright = document.getElementById("copyright");

    copyright.innerHTML = "&copy; " + day + "."  + month + "." + year + " Yuri Ostapenko";

    // Profile content editing

    //Get data with file

    $.getJSON("../data.json",function(data) {
        $("#title").text(data.title);
        $("#fullName").text(data.fullName);
        $("#position").text(data.position);
        $("#info").text(data.info);
    });

});