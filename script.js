let button = document.querySelectorAll(".btn");
let upperDisplay = document.querySelector(".up-display");
let lowerDisplay = document.querySelector(".low-display");
let equation = "";

for(let i = 0; i < button.length; i++){
    button[i].addEventListener("click", function(){
        buttonBehaviour(button[i]);
    });
}

document.addEventListener("keypress", function(event){
    let temp = document.createElement('div');
    if (event.key >= 0 && event.key <= 9){
        temp.innerHTML = event.key;
    }
    else if (event.key == ')' || event.key == '('){
        temp.innerHTML = event.key;
    }
    else if (event.key == "Delete"){
        temp.innerHTML = "AC";
    }
    else if (event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/' || event.key == '.'){
        temp.innerHTML = event.key;
    }
    else if (event.key == 'Enter'){
        temp.innerHTML = '=';
    }
    else return;
    buttonBehaviour(temp);
})

function buttonBehaviour(btn){
    if (btn.classList[1] == "back"){
        if (equation.length > 0){
            equation = equation.slice(0, -1);
        }
        upperDisplay.innerHTML = equation;
        lowerDisplay.innerHTML = eval(equation);
        return;
    }
    if (equation[equation.length-1] == '+' || equation[equation.length-1] == '-' || equation[equation.length-1] == '*' || equation[equation.length-1] == '/'){
        if (btn.innerHTML == '+' || btn.innerHTML == '-' || btn.innerHTML == '*' || btn.innerHTML == '/'){
            return;
        }
    }
    if (equation[equation.length-1] == '.'){
        if (btn.innerHTML == '.') return;
    }
    if (btn.innerHTML == "AC"){
        lowerDisplay.innerHTML = "";
        upperDisplay.innerHTML = "";
        equation = "";
        return;
    }
    if (btn.innerHTML == "="){
        upperDisplay.innerHTML = String(eval(equation));
        equation = String(eval(equation));
        return;
    }
    equation += btn.innerHTML;
    upperDisplay.innerHTML = equation;
    lowerDisplay.innerHTML = eval(equation);
}
