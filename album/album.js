function Album(images, img1, _interval) {
    var imageCount = images.length;

    this.start = function () {
        loadImage(0);
    }

    function loadImage(i, interval) {
        if (images[i] && images[i].url) {
            interval = interval || 0;
            setTimeout(() => {
                var img = new Image();
                img.onload = function () {
                    images[i++].isload = true;
                    img1.style.opacity = 0.5;
                    img1.style.transition = "";
                    img1.src = img.src;
                    setTimeout(function () {
                        img1.style.transition = '1s opacity';
                        img1.style.opacity = 1;
                        loadImage(i, _interval);
                    }, 10)
                }
                img.src = images[i].url;
            }, interval);
        } else {
            showImage();
        }
    }

    function showImage() {
        var i = 0;
        setInterval(function () {
            img1.style.opacity = 0.5;
            img1.style.transition = "";
            img1.src = images[i%imageCount].url;
            setTimeout(function () {
                img1.style.transition = "1s opacity";
                img1.style.opacity = 1;
            },10)
            i++;
            i = i%imageCount;
        }, _interval);
    }
}