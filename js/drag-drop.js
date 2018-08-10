'use strict';

(function() {
    var sliding = 0,
    startClientX = 0,
    startPixelOffset = 0,
    pixelOffset = 0,
    currentSlide = 0,
    slideCount = slider.querySelectorAll('.slider_item').length,
    item = slider.querySelector('.slider_item');
    window.dragDrop = function(slider) {
        slider.ondragstart = function() {
            return false;
        };
        slider.addEventListener('mousedown', startSlide);
        slider.addEventListener('mouseup', slideEnd);
        slider.addEventListener('mousemove', slide);

        function startSlide(e) {
            if (sliding == 0) {
                sliding = 1;
                startClientX = e.clientX;
            }
        }

        function slide(e) {
            e.preventDefault();
            // Distance of slide.
            var distance = e.clientX - startClientX;
            // If sliding started first time and there was a distance.
            if (sliding == 1 && distance != 0) {
                sliding = 2; // Set status to 'actually moving'
                startPixelOffset = pixelOffset; // Store current offset
            }

            if (sliding == 2) {
                var touchPixelRatio = 1;
                //console.log(currentSlide == slideCount/3 - 1);
                //console.log(e.clientX < startClientX);

                if (
                    (currentSlide == 0 && e.clientX > startClientX) ||
                    (currentSlide == slideCount/3 - 1 && e.clientX < startClientX)
                )
                    touchPixelRatio = 3;

                pixelOffset = startPixelOffset + distance / touchPixelRatio;
                /*slider.css("transform", "translateX(" + pixelOffset + "px")
                    .removeClass();*/
                slider.style.transform = 'translateX(' + pixelOffset + 'px' + ')';
                slider.className = '';

            }

        }

        function slideEnd(e) {
            console.log(currentSlide)
            if (sliding == 2) {
                // Reset sliding.
                sliding = 0;
                // Calculate which slide need to be in view.
                currentSlide = pixelOffset < startPixelOffset ? currentSlide + 1 : currentSlide - 1;
                // Make sure that unexisting slides weren't selected.
                currentSlide = Math.min(Math.max(currentSlide, 0), slideCount - 1);
                // Since in this example slide is full viewport width offset can be calculated according to it.
                pixelOffset = currentSlide * -slider.offsetWidth;
                if (currentSlide > slideCount/3 - 1) {
                    pixelOffset = (slideCount/3 - 1) * -slider.offsetWidth;
                    currentSlide = slideCount/3 - 1;
                }
                console.log(currentSlide);
                // Remove style from DOM (look below)
                //$("#temp").remove();

                    if (document.querySelector('#temp')) {
                        document.querySelector('#temp').remove();
                    }
                    //document.querySelector('#temp').remove();
                // Add a translate rule dynamically and asign id to it

                /*var style = '<style id="temp">#slider.animate{transform:translateX(' +
                    pixelOffset + 'px)}</style>';*/

                var css = "body #slider.animate{transform:translateX(" + pixelOffset + "px) }</style>",
                    head = document.head || document.getElementsByTagName('head')[0],
                    style = document.createElement('style');

                window.transformValue = pixelOffset;

                style.id = 'temp';

                    style.appendChild(document.createTextNode(css));

                head.appendChild(style);
                // Add animate class to slider and reset transform prop of this class.
                slider.className = 'animate';
                slider.style = '';

            }
        }
        }
        /*function(el) {
        window.slideMove = 0;
        el.onmousedown = function(e) {
            var startCoordinate = e.pageX;
            console.log('Старотвая координата = ' + startCoordinate);
            el.ondragstart = function() {
                return false;
            };
            document.onmousemove = function(e) {
                window.transformValue = e.pageX - startCoordinate;
                slider.style.transform = 'translateX(' + window.transformValue + 'px' + ')';


                /*var start = 0;
                start++;
                console.log(start);
                if (start == 1) {*/
                    /*if (startCoordinate > e.pageX) {
                        window.moveSliderRight();
                    } else if (startCoordinate < e.pageX) {
                        window.moveSliderLeft();
                    }
                    document.onmousemove = null;


                //}
            };
            /*document.onmousemove = function(e) {
                if (startCoordinate > e.pageX) {
                    slideEl(true);
                } else if (startCoordinate < e.pageX) {
                    slideEl(false);
                }

            };

            el.onmouseup = function() {
                document.onmousemove = null;
                el.onmouseup = null;
            };
            document.onmouseup = function() {
                document.onmouseup = null;
                el.onmouseup = null;
            }

        }
    }*/
})();