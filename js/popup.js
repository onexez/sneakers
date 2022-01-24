'use strict'

;(function() {

    var showPopup = function(target) {
        target.classList.add('is-active');
    };

    var closePopup = function(target) {
        target.classList.remove('is-active');
    };

   


    myLib.body.addEventListener('click', function(e) {
        var target = e.target;
        var popupClass = myLib.closestAttr(target, 'data-popup');

        if (popup === null) {
            return;
        }

        e.preventDefault();

        var popup = document.querySelector('.' + popupClass);

        if (popup) {
            showPopup(popup);
            myLib.toggleScroll();
        }
    });

    myLib.body.addEventListener('click', function(e) {
        var target = e.target;

        if (target.classList.contains('popup-close') || 
            target.classList.contains('popup__inner'))  {
                var popup = myLib.closestItemByClass(target, 'popup');

                closePopup(popup);
                myLib.toggleScroll();
        }
    });

    myLib.body.addEventListener('keydown', function(e) {
        if (e.key !== 'Escape') {
            return;
        }

        var popup = document.querySelector ('.popup.is-active');

        if (popup) {
            closePopup(popup);
            myLib.toggleScroll();
            
        }
    });
})();