const getField = document.getElementById("field")
const inputs = document.querySelectorAll('input[name="numbers"]');
const operators = ['%', '*', '/', '+', '=', '-'];
let output = "";




const calculation = (btnValue) =>{
    getField.value += btnValue.value;
    if (btnValue === "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    }else if (btnValue === "DE"){
        output = output.toString().slice(0, -1);
    }else if (btnValue === "AC"){
        output = "";
    }else {
        if (output === "" && operators.includes(btnValue)) return;
        output += btnValue;
    }
    getField.value = output;
};


inputs.forEach((button) =>{
    button.addEventListener(("click"), (e) => calculation(e.target.value));
});


