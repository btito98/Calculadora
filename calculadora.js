
function calcular() {

    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value

    let operacao = document.getElementById('operacao').value


    switch (operacao) {
        case "+":
            document.getElementById("result").innerHTML = parseFloat(n1) + parseFloat(n2);
            break;

        case "-":
            document.getElementById("result").innerHTML = parseFloat(n1) - parseFloat(n2);
            break;

        case "*":
            document.getElementById("result").innerHTML = parseFloat(n1) * parseFloat(n2);
            break;

        case "/":
            document.getElementById("result").innerHTML = parseFloat(n1) / parseFloat(n2);
            break;
    }

};

