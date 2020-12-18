$(document).ready(function () {
    const block = $(".block");
    $(".rangetl").on("input", function(){
        block.css(
            {
                "border-top-left-radius": $(this).val() + "px"
            }
        )
        $(".tl").text("Border - top - left - radius: " + $(this).val() + "px;")
    });
    
    $(".rangetr").on("input", function(){
        block.css(
            {
                "border-top-right-radius": $(this).val() + "px"
            }
        )
        $(".tr").text("Border - top - right - radius: " + $(this).val() + "px;")
    });
    $(".rangebl").on("input", function(){
        block.css(
            {
                "border-bottom-left-radius": $(this).val() + "px"
            }
        )
        $(".bl").text("Border - bottom - left - radius: " + $(this).val() + "px;")
    });
    $(".rangebr").on("input", function(){
        block.css(
            {
                "border-bottom-right-radius": $(this).val() + "px"
            }
        )
        $(".br").text("Border - bottom - right - radius: " + $(this).val() + "px;")
    });
});