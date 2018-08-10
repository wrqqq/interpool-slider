'use strict';

(function() {
    var leftCtrl = document.querySelector('.slider-control--left');
    var rightCtrl = document.querySelector('.slider-control--right');
    var slider = document.querySelector('#slider');
    var itemWidth = document.querySelector('.slider_item').offsetWidth + 20;
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
            count += item.offsetWidth - 20;
        });
        console.log(count);
        return count;
    }

    window.slider = function() {

        function moveSliderLeft() {
            if (window.transformValue != 0) {
                window.transformValue = window.transformValue + itemWidth;
                slider.style.transform = 'translateX(' + window.transformValue + 'px' + ')';
            }
        }

        function moveSliderRight() {
            if (screen.width > 1000) {
                if (-window.transformValue <= (window.sliderWidth - (itemWidth * 3))) {
                    console.log(-window.transformValue);
                    console.log(window.sliderWidth - (itemWidth * 3));
                    window.transformValue = window.transformValue - itemWidth;
                    console.log(window.transformValue);
                    slider.style.transform = 'translateX(' + window.transformValue + 'px' + ')';
                }
            } else {
                if (-window.transformValue <= (window.sliderWidth - itemWidth)) {
                    window.transformValue = window.transformValue - itemWidth;
                    console.log(window.transformValue);
                    slider.style.transform = 'translateX(' + window.transformValue + 'px' + ')';
                }
            }
        }

        window.moveSliderLeft = moveSliderLeft;
        window.moveSliderRight = moveSliderRight;

        window.dragDrop(slider);
        leftCtrl.addEventListener('click', moveSliderLeft);
        rightCtrl.addEventListener('click', moveSliderRight);
    }();
})();