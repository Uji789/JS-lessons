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
        xhr.open('POST', 'mail.php', true);
        let formData = new FormData(form);
        xhr.addEventListener('load', function(){
            if(xhr.readyState === 4){
                switch (xhr.status) {
                    case 200:
                        console.log('Sucssess');
                        form.reset();
                        modal.classList.add('box-active');
                        setTimeout(() => {
                            modal.classList.remove('box-active');
                        }, 600);
                        break;
                    case 301:
                        console.log('Unfortunately our resource has moved forever');
                        break;
                    case 307:
                        console.log('The resource has temporarily moved');
                        break;
                    case 403:
                        console.log('403 Forbidden');
                        break;
                    case 405:
                        console.log('The request method POST is inappropriate for the URL');
                        break;
                    case 408:
                        console.log('408 Request');
                        break;
                    default:
                        console.log('Please, try again');
                        break;
                        ;
                }
            }
        });
        xhr.send(formData)
      
    
    },
});