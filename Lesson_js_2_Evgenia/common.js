let arr = {
    "rus": ["имя", "фамилия", "возраст", "пол", "рост"],
    "eng": ["name", "surname", "age", "sex", "growth"],
};

let rusBtn = document.querySelector(".btn__rus");
rusBtn.addEventListener("click", function(){
    for (let i=0; i<=arr["rus"].length-1; i++){
    console.log(arr["rus"][i]);
    }
});


let engBtn = document.querySelector(".btn__eng");
engBtn.addEventListener("click", function(){
    for (let i=0; i<=arr["eng"].length-1; i++){
    console.log(arr["eng"][i]);
    }
})