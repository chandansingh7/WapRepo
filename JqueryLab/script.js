"use strict"

$(function() {
    let circleOpacity;

    function createCircule() {
        let elements;
        let width = $('.circles').width();

        elements = $("<div class='circle'><div>");
        elements.css("background-color", getRandomColor());
        elements.css("left", Math.floor(width * Math.random()));
        elements.appendTo(".circles");

        let circleTimer = setInterval(grow, parseInt($('#rate').val()), elements);
        elements.click(() => {
            elements.remove();
            clearInterval(circleTimer);
        });
    }
    
    $('.start').on('click', function() {
        let circleCount = parseInt($('#count').val());
        if(circleCount <= 0) {
            return;
        }

        while(circleCount-- > 0) {
            createCircule();
        }

        $('.circle').css({
            "width": parseInt($('#width').val()),
            "height": parseInt($('#width').val())
        });
    });

    $(document).on('mouseenter', '.circle', function() {
        circleOpacity = setInterval(opactiy, 400, $(this));
    });

    $(document).on('mouseleave', '.circle', function() {
        $(this).css("opacity", '100%');
        clearInterval(circleOpacity);
    });


    function grow(element) {
        element.css('height', element.height() + parseInt($('#amount').val()));
        element.css('width', element.width() + parseInt($('#amount').val()));
    }

    function opactiy(element) {
        element.css("opacity", (index, value) => value * 0.8);
    }

 function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
