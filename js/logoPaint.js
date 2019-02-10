
(function(){
    document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
            let el = document.querySelector('#logo');
            el.style.opacity = 1;
            let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":6.6,"strokeOpacity":1,"strokeColor":"#F2C511","strokeCap":"butt"});
            myAnimation.paint();
        }
    }
})();


