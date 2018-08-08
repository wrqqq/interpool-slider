'use strict';

(function() {
    var leftCtrl = document.querySelector('.slider-control--left');
    var rightCtrl = document.querySelector('.slider-control--right');
    var slider = document.querySelector('#slider');
    window.transformValue = 0;
    var itemsCollection = document.querySelectorAll('.slider_item');
    var slice = function(elements, start, end) {
        var sliced = Array.prototype.slice.call(elements, start, end);
        return sliced;
    };
    window.sliderWidth = getSliderWidth(itemsCollection);

    slice(itemsCollection, 0, 3).forEach(function(item) {
        item.classList.toggle('active');
    });

    function getSliderWidth(itemsCollection) {
        var count = 0;
        itemsCollection.forEach(function(item) {
            count+= item.offsetWidth;
        });
        return count;
    }

    window.slider = function() {
        var itemWidth = document.querySelector('.slider_item').offsetWidth;

        function moveSliderLeft() {
            window.transformValue = window.transformValue + itemWidth;
            slider.style.transform = 'translateX(' + window.transformValue + 'px' + ')';
        }

        function moveSliderRight() {
            window.transformValue = window.transformValue - itemWidth;
            console.log(window.transformValue);
            slider.style.transform = 'translateX(' + window.transformValue + 'px' + ')';
        }

        /*function endlessItems() {

        }*/


        window.dragDrop(slider);
        leftCtrl.addEventListener('click', moveSliderLeft);
        rightCtrl.addEventListener('click', moveSliderRight);
    }();
})();