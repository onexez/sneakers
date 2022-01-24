'use strict'
;(function() {


    var closestAttr = function(item, attr) {
        var node = item;

        while (node) {
           var attrValue = node.getAttribute(attr);
           if (attrValue) {
               return attrValue;
           } 

           node = node.parentElement;
        }

        return null;
    };

    var scroll = function(target) {
        var targetTop = target.getBoundingClientRect().top;
        var scrollTop = window.pageYOffset;
        var targetOffsetTop = targetTop + scrollTop;
        var headerOffset = document.querySelector('.header-page').clientHeight;

        window.scrollTo(0, targetOffsetTop - headerOffset +21);
    };

    myLib.body.addEventListener('click', function(e) {
        var target = e.target;
        var scrollToItemClass = myLib.closestAttr(target, 'data-scroll-to');

        if (scrollToItemClass === null) {
            return;
        }

        e.preventDefault();
        var scrollToItem = document.querySelector('.' + scrollToItemClass);

        if (scrollToItem) {
            scroll(scrollToItem);
        }

        console.log(scrollToItemClass);
    });

    

})();