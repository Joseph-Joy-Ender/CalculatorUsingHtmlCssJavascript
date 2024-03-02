const display = document.querySelector('.display');
const input = document.querySelectorAll("input");
const operators = ['%', '*', '/', '+', '=', '-'];
let output = "";


const calculation = (btnValue) =>{
    if (btnValue === "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    }else if (btnValue === "DEL"){
        output = output.toString().slice(0, -1);
    }else if (btnValue === "AC"){
        output = "";
    }else {
        if (output === "" && operators.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};


input.forEach((button) =>{
    button.addEventListener("click", (e) => calculation(e.target.value));
});


