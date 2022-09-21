var openBtn = document.getElementById('open-btn');
var modal = document.getElementsByClassName('modal');
var modalCloseIcon = modal[0].getElementsByClassName('modal__close-icon');
var modalCloseBtn = modal[0].getElementsByClassName('modal__close-btn');

openBtn.onclick = function(e) {
    console.log(e.target);
    modal[0].classList.toggle('modal--hiden');
}

modal[0].onclick = function(e) {
    console.log(e.target);
    if(e.target!=e.currentTarget)
        return;
    modal[0].classList.toggle('modal--hiden');
}

modalCloseIcon[0].onclick = function(e) {
    console.log(e.target);
    modal[0].classList.toggle('modal--hiden');
}

modalCloseBtn[0].onclick = function(e) {
    console.log(e.target);
    modal[0].classList.toggle('modal--hiden');
}
