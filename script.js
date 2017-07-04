document.addEventListener("DOMContentLoaded", ready);
function ready() {
   
    var searchOptions = []; 
    var searchInput = document.querySelector('kbrShop>content>.search>input');
    var foundItemsContainer = document.querySelector('kbrShop>content>.search>.found-items');
    var cancelBtn = document.querySelector('kbrShop>content>.search>.cancel-btn');
    var foundItemsLi = document.querySelectorAll('kbrShop>content>.search>.found-items>li');

  
    getSearchItems(); // Получить элементы списка для поиска

    /* заполнить опшены */ 

    searchOptions.forEach(function(opt){
        var li = document.createElement('li');
        li.innerText = opt;
        li.onclick = function(){
            searchInput.value = this.innerText;
            foundItemsContainer.style.display = "none";
        };
        foundItemsContainer.appendChild(li);
    });
 
    /* При фокусе расширить инпут */

    searchInput.onfocus = function(){
        if ( !this.parentNode.classList.contains('wide') ) {
            this.parentNode.classList.add('wide'); 
        }
    };

     searchInput.onblur = function(){
        if ( this.parentNode.classList.contains('wide') && !this.value.length) {
            this.parentNode.classList.remove('wide'); 
            
        }
    };

    /* Поиск при вводе */ 

    searchInput.onkeyup = function(){
        var searchStr = this.value; 
        if (!searchStr) {
            foundItemsContainer.style.display = "none";
            return;
        };
        if (!searchOptions.length) return;
        var searchItems = document.querySelectorAll('kbrShop>content>.search>.found-items>li');
        searchItems.forEach(function(item){
            if (item.innerText.indexOf(searchStr) == 0) {
               
                // Если найдена подстрока то необходимо выделить жирным ее в списке

                var pos = item.innerText.indexOf(searchStr);    
                var firstPart = item.innerText.substring(0, pos);
                var lastPart = item.innerText.substring(pos + searchStr.length);
                var resultStr = firstPart + '<b>' + searchStr + '</b>' + lastPart;

                item.innerHTML = resultStr;
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
        foundItemsContainer.style.display = "block";
    }
        
    /* Очистка поля ввода */

    cancelBtn.onclick = function(){
        searchInput.value = '';
        foundItemsContainer.style.display = "none";
    };    
   
    
    
    function getSearchItems() {

        /* Получить варианты для поиска */
        
        var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

        var xhr = new XHR();
        xhr.open('GET', 'ajax.txt', false);

        xhr.onload = function() {
            searchOptions = JSON.parse(this.responseText);
            searchOptions.sort();
        }

        xhr.onerror = function() {
            console.log( 'Ошибка ' + this.status );
        }

        xhr.send();
    }

/*** */


}