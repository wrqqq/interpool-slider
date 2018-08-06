'use strict';

(function() {
    var leftCtrl = document.querySelector('.slider-control--left');
    var rightCtrl = document.querySelector('.slider-control--right');
    var slider = document.querySelector('#slider');
    var transformValue = 0;
    var itemsCollection = document.querySelectorAll('.slider_item');
    console.log(itemsCollection);
    var slice = function(elements, start, end) {
        var sliced = Array.prototype.slice.call(elements, start, end);
        return sliced;
    };

    slice(itemsCollection, 0, 3).forEach(function(item) {
        console.log(item)
        item.classList.toggle('active');
    });


    window.slider = function() {
        var itemWidth = document.querySelector('.slider_item').offsetWidth;
        console.log(itemWidth);
        console.log(document.querySelector('.slider_item').offsetWidth );

        function moveSliderLeft() {
            transformValue = transformValue + itemWidth;
            console.log(transformValue);
            slider.style.transform = 'translateX(' + transformValue + 'px' + ')';
        }

        function moveSliderRight() {
            transformValue = transformValue - itemWidth;
            console.log(transformValue);
            slider.style.transform = 'translateX(' + transformValue + 'px' + ')';
        }

        /*function endlessItems() {

        }*/

        slider.


        leftCtrl.addEventListener('click', moveSliderLeft);
        rightCtrl.addEventListener('click', moveSliderRight);
    }();
})();