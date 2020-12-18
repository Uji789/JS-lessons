$(document).ready(function () {
    function changeColor () {
        let colRed = Math.round(255*Math.random());
        let red = colRed.toString(16);
        console.log(red);
        let colGreen = Math.round(255*Math.random());
        let green = colGreen.toString(16);
        console.log(green);
        let colBlue = Math.round(255*Math.random());
        let blue = colBlue.toString(16);
        console.log(red);
        let color = "#" + red + green + blue;
        $(".random__color-number").text(color.toUpperCase())
        console.log(color.toUpperCase());
        return color.toUpperCase();
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