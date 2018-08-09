'use strict';

(function() {
    window.dragDrop = function(el) {
        window.slideMove = 0;
        el.onmousedown = function(e) {
            var startCoordinate = e.pageX;
            console.log('Старотвая координата = ' + startCoordinate);
            el.ondragstart = function() {
                return false;
            };
            function slideEl(bool) {
                            if (bool) {
                                /*window.transformValue -= slide;
                                el.style.transform = 'translateX(' + window.transformValue + 'px' + ')';*/
                            } else {
                                /*window.transformValue += slide;
                                el.style.transform = 'translateX(' + window.transformValue + 'px' + ')';*/
                            }
                            //el.style.transform = 'translateX(' + (slideMove) + 'px' + ')';

            }
            document.onmousemove = function(e) {
                /*var start = 0;
                start++;
                console.log(start);
                if (start == 1) {*/
                    if (startCoordinate > e.pageX) {
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

            };*/

            el.onmouseup = function() {
                document.onmousemove = null;
                el.onmouseup = null;
            };
            document.onmouseup = function() {
                document.onmouseup = null;
                el.onmouseup = null;
            }

        }
    }
})();