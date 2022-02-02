function calcular(event) {
    event.preventDefault();

    let n1 = document.getElementById('number_one').value
    let n2 = document.getElementById('number_two').value

    let operacao = document.getElementById('operations').value

    switch (operacao) {
        case "+":
            document.getElementById("result").innerHTML = "O resultado é: " + (parseFloat(n1) + parseFloat(n2));
            break;

        case "-":
            document.getElementById("result").innerHTML = "O resultado é: " + (parseFloat(n1) - parseFloat(n2));
            break;

        case "*":
            document.getElementById("result").innerHTML = "O resultado é: " + (parseFloat(n1) * parseFloat(n2));
            break;

        case "/":
            document.getElementById("result").innerHTML = "O resultado é: " + (parseFloat(n1) / parseFloat(n2));
            break;
    }

};