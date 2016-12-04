'use strict';

function inputClick(value) { 
   
    
    var viewValue = document.getElementById('view').value; /*tutaj przypisuje do zmiennej viewValue to liczby, cyfry w buttonach*/
    
    if (value != 'AC' && value != '=' && value !=".") { //sprawdzam czy znaki są różne od = AC i kropki
        document.getElementById('view').value += value; /*pobiera element przy kliknięciu, wrtośc wpisaną i ma dodać wartość naszego parametru*/
    } else if (value == 'AC') {
        document.getElementById('view').value = ""; //jeśli wcisne AC to ma dać pustą przestrzeń
    } else if (value == '.') {
        if (viewValue.slice (-1)!='.' ){
           document.getElementById('view').value += value; 
        } //jeśli ciąg cyfr kończy się kropką to mogę pisać dalej cyfry; nie wcisnę dwóch kropek
    } else {
        if (isNaN(viewValue.slice(-1)) || viewValue.indexOf('/0')>-1){
            document.getElementById('view').value = "Error!";
        } else {
             document.getElementById('view').value = eval(viewValue);
        }
       
        
    }
    
   
}

    /*var result = eval(viewValue);*/
    
 

