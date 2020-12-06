function fun1() {
    let rngtl=document.getElementById('rangetl').value;
    let ntl=document.getElementById('numbertl');
    let rngtr=document.getElementById('rangetr').value;
    let ntr=document.getElementById('numbertr');
    let rngbr=document.getElementById('rangebr').value;
    let nbr=document.getElementById('numberbr');
    let rngbl=document.getElementById('rangebl').value;
    let nbl=document.getElementById('numberbl');
    let block=document.getElementById('block');
    ntl.value=rngtl;
    ntr.value=rngtr;
    nbr.value=rngbr;
    nbl.value=rngbl;
    block.style.borderRadius=rngtl+'px '+rngtr+'px '+rngbr+'px '+rngbl+'px ';
};

