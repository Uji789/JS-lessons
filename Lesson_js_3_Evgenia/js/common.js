document.addEventListener("DOMContentLoaded", function (){
    //  Создание функции случайного генерирования цвета
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
        return color.toUpperCase();
    }
    // Добавление класса к body и применение свойства по смене цвета фона
    console.log(changeColor());
    document.body.classList.add("body__random-color");
    let randomColor = document.querySelector(".body__random-color");
    randomColor.style = "background-color:" + changeColor();

    //проверка нажатия клавиши "Space"
    let spacePush = function (evt){
        if (evt.code == "Space"){
            console.log(evt);
        }
    };

    //смена цвета при нажатии на space
    document.addEventListener("keydown", function(evt){
        if (evt.code == "Space"){
            randomColor.style = "background-color:" + changeColor();
        }
    });
});
