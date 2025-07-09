var display = document.getElementById("display");
var keys = document.getElementsByClassName("key");
// console.log(keys);

var operand1 = 0;
var operator = null;
var operand2 = 0;

for(var i=0; i<keys.length; i++){
    keys[i].addEventListener("click", function (){
        var value = this.getAttribute("data-value");
        if(value === "%" || value == "/" || value == "*" || value == "-" || value == "+"){
            //operators
            // when operator is clicked the data in the display would be first operand
            operand1 = display.textContent;
            operator = value;
            display.innerText = "";
            console.log(operand1);
        }
        else if(value == "+/-"){
            operand1 = display.innerText * -1;
            display.innerText = operand1;
        }
        else if(value == "AC"){
            operand1 = 0;
            operator = null;
            operand2 = 0;
            display.innerText = "";
            console.log("clear");
        }
        else if(value == "="){
            operand2 = display.textContent;
            var ans = eval(operand1 + " " + operator + " " + operand2);
            operand1 = ans;
            display.innerText = ans;
        }
        else{
            display.innerText += value;
        }
    })
}