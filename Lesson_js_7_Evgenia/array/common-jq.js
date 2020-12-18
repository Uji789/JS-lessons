$(document).ready(function () {
    let arr = {
        "rus": [" имя ",",", " фамилия",",", " возраст",",", " пол",",", " рост", "."],
        "eng": [" name",",", " surname",",", " age",",", " sex",",", " growth", "."],
    };
        // * поменяла способ отображения. И вывела не в консоль, а на страницу.
    $(".btn__rus").on("click", function(){
        $(".rus").append(arr["rus"]);
    });
    
    $(".btn__eng").on("click", function(){
        $(".eng").append(arr["eng"]);
    });
});