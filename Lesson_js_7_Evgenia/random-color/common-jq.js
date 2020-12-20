$(document).ready(function () {
    function changeColor () {
        // let colRed = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        let color = '#' + Math.random().toString(16).substr(-6).toUpperCase();
        console.log(color);
        $(".random__color-number").text(color)
        return color;
        };
        let bodyTag = $("body");
        bodyTag.keydown(function (evt) {
            if (evt.which == 32) {
                bodyTag.css(
                    {
                        "background-color":changeColor()
                    },
                );
            }
        });
});