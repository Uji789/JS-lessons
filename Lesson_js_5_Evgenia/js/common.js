document.addEventListener('DOMContentLoaded', function(){
    // ! tabs
    let tabsContent = document.querySelectorAll('.tab__content');
    let tabsControl = document.querySelectorAll('.tab__item');

    tabsControl.forEach(elem => {
        elem.addEventListener('click', function() {
            showTabContent(elem.dataset.tab);
            tabsControl.forEach(elem => {
                elem.classList.remove('tab__item--active');
            });
            this.classList.add('tab__item--active');
        });
    });

    function hideTabContent(){
        for (let i = 1; i < tabsContent.length; i++) {
            tabsContent[i].classList.add('tab--hidden');
        };
    };

    hideTabContent();

    function showTabContent (tab){
        for (let i = 0; i < tabsContent.length; i++) {
            tabsContent[i].classList.add('tab--hidden');
        };
        tabsContent[tab-1].classList.remove('tab--hidden');
    };
    
    // ! color
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
    };
    console.log(changeColor());
    document.body.classList.add("body__random-color");
    let randomColor = document.querySelector(".body__random-color");
    randomColor.style = "background-color:" + changeColor();

    let spacePush = function (evt){
        if (evt.code == "Space"){
            console.log(evt);
        }
    };

    document.addEventListener("keydown", function(evt){
        if (evt.code == "Space"){
            randomColor.style = "background-color:" + changeColor();
        }
    });
    // ! border-radius
    const rangetl = document.querySelector('.rangetl');
    const numtl = document.querySelector('.numtl');
    const numtr = document.querySelector('.numtr');
    const numbl = document.querySelector('.numbl');
    const numbr = document.querySelector('.numbr');
    const block = document.querySelector('.block');
    const tl = document.querySelector('.tl');
    const tr = document.querySelector('.tr');
    const bl = document.querySelector('.bl');
    const br = document.querySelector('.br');
    const rangetr = document.querySelector('.rangetr');
    const rangebl = document.querySelector('.rangebl');
    const rangebr = document.querySelector('.rangebr');
    
       
    rangetl.addEventListener('input', function(){
        numtl.innerText = this.value;
        //console.log(this.value);
        block.style.borderTopLeftRadius = this.value + 'px';
        console.log(block);
        tl.innerHTML = "Border - top - left - radius: " + this.value + 'px;';
    });
    rangetr.addEventListener('input', function(){
        numtr.innerText = this.value;
        //console.log(this.value);
        block.style.borderTopRightRadius = this.value + 'px';
        console.log(block);
        tr.innerHTML = "Border - top - right - radius: " + this.value + 'px;';
    });
    rangebl.addEventListener('input', function(){
        numbl.innerText = this.value;
        //console.log(this.value);
        block.style.borderBottomLeftRadius = this.value + 'px';
        console.log(block);
        bl.innerHTML = "Border - bottom - left - radius: " + this.value + 'px;';
    });
    rangebr.addEventListener('input', function(){
        numbr.innerText = this.value;
        //console.log(this.value);
        block.style.borderBottomRightRadius = this.value + 'px';
        console.log(block);
        br.innerHTML = "Border - bottom - right - radius: " + this.value + 'px;';
    });

    // ! form
    let phoneField = document.querySelector('.input-phone');
    let phoneNumber = new Inputmask ('+38 (099) 999-99-99');
    let modal = document.querySelector('.box')
    phoneNumber.mask(phoneField);

    new JustValidate('.form', {
        rules: {
        name: {
            required : true,
            minLength: 2
        },
        surname: {
            required : true,
            minLength: 2
        },
        phone: {
            required : true
        },
        email:{
            required : true,
            email: true
        },
        message:{
            required : true
        }
        },
        messages: {
        phone: {
            required: "Please enter your current phone number"
        },
        email:{
            required: "Please enter your current email"
        }
    },

    submitHandler: function (form) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'php/mail.php', true);
        let formData = new FormData(form);
        xhr.addEventListener('load', function(){
            if(xhr.readyState === 4){
                switch (xhr.status) {
                    case 200:
                        alert('Sucssess');
                        form.reset();
                        modal.classList.add('box-active');
                        setTimeout(() => {
                            modal.classList.remove('box-active');
                        }, 600);
                        break;
                    case 301:
                        alert('Unfortunately our resource has moved forever');
                        break;
                    case 307:
                        alert('The resource has temporarily moved');
                        break;
                    case 403:
                        alert('403 Forbidden');
                        break;
                    case 405:
                        alert('The request method POST is inappropriate for the URL');
                        break;
                    case 408:
                        alert('408 Request');
                        break;
                    default:
                        alert('Please, try again');
                        break;
                        ;
                }
            }
        });
        xhr.send(formData)
    },
});
});