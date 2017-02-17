var sliderNavs = document.querySelectorAll(".slider .slider_nav a");
    var toLeft = sliderNavs[0];
    var toRight = sliderNavs[1];
    EventUtil.addHandler(toLeft, "click", function(event) {
        //确定当前显示的li
        var sliderActiveLi = document.querySelector(".slider ul li.active");
        var leftLi = getPreviousLi(sliderActiveLi);
        if (leftLi) { //如果前面li存在
            leftLi.className = "active";
        } else {
            //显示最后一个元素
            var lastLi = getLastLi();
            lastLi.className = "active";
        }
        sliderActiveLi.className = "";
    });

    EventUtil.addHandler(toRight, "click", nextSlider);

    setInterval(nextSlider, 5000);

    function nextSlider() {
        var sliderActiveLi = document.querySelector(".slider ul li.active");
        var rightLi = getNextLi(sliderActiveLi);
        if (rightLi) { //如果后面li存在
            rightLi.className = "active";
        } else {
            //显示第一个元素
            var firstLi = getFirstLi();
            firstLi.className = "active";
        }
        sliderActiveLi.className = "";
    }


    function getPreviousLi(ele) {
        if (ele.previousSibling) {
            var previousElement = ele.previousSibling;
            if (previousElement.nodeType == 1 && previousElement.nodeName.toLowerCase() == 'li') {
                return previousElement;
            }
            var previousPreviousElement = ele.previousSibling.previousSibling;
            if (previousPreviousElement) {
                if (previousPreviousElement.nodeType == 1 && previousPreviousElement.nodeName.toLowerCase() == 'li') {
                    return previousPreviousElement;
                }
            }
        }

        return null;
    }

    function getNextLi(ele) {
        if (ele.nextSibling) {
            var nextElement = ele.nextSibling;
            if (nextElement.nodeType == 1 && nextElement.nodeName.toLowerCase() == 'li') {
                return nextElement;
            }
            var nextNextElement = ele.nextSibling.nextSibling;
            if (nextNextElement) {
                if (nextNextElement.nodeType == 1 && nextNextElement.nodeName.toLowerCase() == 'li') {
                    return nextNextElement;
                }
            }
        }

        return null;
    }

    function getFirstLi() {
        var sliderLis = document.querySelectorAll(".slider ul li");
        return sliderLis[0];
    }

    function getLastLi() {
        var sliderLis = document.querySelectorAll(".slider ul li");
        return sliderLis[sliderLis.length - 1];
    }