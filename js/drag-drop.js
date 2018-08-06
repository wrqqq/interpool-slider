'use strict';

(function() {
    window.dragDrop = function(el) {
        el.onmousedown = function(e) {

            function slideEl(e) {
                el.style.transform = 'translateX(' + transformValue + 'px' + ')';
            }

        }
    }
})();