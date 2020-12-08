document.addEventListener('DOMContentLoaded', function(){
    const rangetl = document.querySelector('.rangetl');
    const num = document.querySelector('.num');
    const block = document.querySelector('.block');
    const tl = document.querySelector('.tl');
    const tr = document.querySelector('.tr');
    const bl = document.querySelector('.bl');
    const br = document.querySelector('.br');
    const rangetr = document.querySelector('.rangetr');
    const rangebl = document.querySelector('.rangebl');
    const rangebr = document.querySelector('.rangebr');
    
       
    rangetl.addEventListener('input', function(){
        num.innerText = this.value;
        //console.log(this.value);
        block.style.borderTopLeftRadius = this.value + 'px';
        console.log(block);
        tl.innerHTML = "Border - top - left - radius: " + this.value + 'px;';
    });
    rangetr.addEventListener('input', function(){
        num.innerText = this.value;
        //console.log(this.value);
        block.style.borderTopRightRadius = this.value + 'px';
        console.log(block);
        tr.innerHTML = "Border - top - right - radius: " + this.value + 'px;';
    })
    rangebl.addEventListener('input', function(){
        num.innerText = this.value;
        //console.log(this.value);
        block.style.borderBottomLeftRadius = this.value + 'px';
        console.log(block);
        bl.innerHTML = "Border - bottom - left - radius: " + this.value + 'px;';
    })
    rangebr.addEventListener('input', function(){
        num.innerText = this.value;
        //console.log(this.value);
        block.style.borderBottomRightRadius = this.value + 'px';
        console.log(block);
        br.innerHTML = "Border - bottom - right - radius: " + this.value + 'px;';
    })
    
});