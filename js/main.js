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

    itemsCollection.forEach(function(item) {
        var p = item.querySelector('p');
        if (p.textContent.length < 50) {
            p.style.fontSize = 20 + 'px';
        } else if (p.textContent.length > 50 && p.textContent.length < 100) {
            p.style.fontSize = 17 + 'px';
        } else if (p.textContent > 100 && p.textContent < 150) {
            p.style.fontSize = 15 + 'px';
        } else {
            p.style.fontSize = 13 + 'px';
        }
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
            if (window.transformValue < -5) {
                window.transformValue = window.transformValue + itemWidth;
                slider.style.transform = 'translateX(' + window.transformValue + 'px' + ')';
            }
        }

        function moveSliderRight() {
            if (screen.width > 1000) {
                if (-window.transformValue <= (itemsCollection.length * itemWidth - itemWidth * 4)) {
                    console.log(itemsCollection.length * itemWidth);
                    window.transformValue = window.transformValue - itemWidth;
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