document.addEventListener("DOMContentLoaded", ready);

function ready(){

    /* Показ и скрытие блока  */ 

    var titles = document.querySelectorAll('.arrow-title');
    titles.forEach(function(title){
        title.onclick = function(){

            if(this.parentNode.classList.contains('active')) {
                this.parentNode.classList.remove('active');
            } else {
                 this.parentNode.classList.add('active');
            }

            if(this.lastChild.classList.contains('opened')) {
                this.lastChild.classList.remove('opened');
            } else {
                this.lastChild.classList.add('opened');
            }
        };
    });


};