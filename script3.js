document.addEventListener("DOMContentLoaded", ready);

function ready(){

    var chkbox = document.querySelector('kbrShop content .chkb-wrap .checkbox');
    var radioButtons = document.querySelectorAll('kbrShop content input[type="radio"]');
    var emailError = document.querySelector('kbrShop content chooser input[name="mail"]+.error-title');
    var enterBtn = document.querySelector('footer .enter-btn'); 
    var emailInput = document.querySelector('kbrShop chooser>label>label>.input-wrap>input');
     radioButtons.forEach(function(radioButton){
         radioButton.onchange = function(){
             if ( this.value == 'asguest' ) {
                enterBtn.innerText = 'Далее';
             } else {
                enterBtn.innerText = 'Войти';
                if (emailInput.classList.contains('error')) emailInput.classList.remove('error');
                emailError.style.display = "none";
             }
         };
     });
     
    chkbox.onchange = function(){
        //
    };

    enterBtn.onclick = function(){
        var userType = document.querySelector('kbrShop content input[type="radio"]').value;
        if (CheckedRadio(radioButtons) == 'asguest') {
            var email = document.querySelector('kbrShop content chooser input[name="mail"]').value;
            
            if ( !email.length ) {
                emailError.style.display = "block";
                emailInput.classList.add('error');
            }
        }
    };


    function CheckedRadio(radioBts) {
	var val;
	for(var i=0; i<radioBts.length; i++){
	    if(radioBts[i].checked){
            val = radioBts[i].value;
            break;
		}
	}
    return val;
    }

};