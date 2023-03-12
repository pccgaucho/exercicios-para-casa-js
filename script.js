
window.addEventListener("load", aoCarregar);

function aoCarregar() {
    const botaoImprimir = document.getElementById("btnImprimir");
    botaoImprimir.addEventListener("click", imprimePares);
    const botaoLimparE1 = document.getElementById("btnLimparE1");
    botaoLimparE1.addEventListener("click", limparE1);

    const botaoCalculeE2 = document.getElementById("btnCalculeE2");
    botaoCalculeE2.addEventListener("click", calculaMedia);
    const botaoLimparE2 = document.getElementById("btnLimparE2");
    botaoLimparE2.addEventListener("click", limparE2);

    const botaoCalculeE3 = document.getElementById("btnCalculeE3");
    botaoCalculeE3.addEventListener("click", menorNumero);
    const botaoLimparE3 = document.getElementById("btnLimparE3");
    botaoLimparE3.addEventListener("click", limparE3);

    const botaoCalculeE4 = document.getElementById("btnCalculeE4");
    botaoCalculeE4.addEventListener("click", maiorNumero);
    const botaoLimparE4 = document.getElementById("btnLimparE4");
    botaoLimparE4.addEventListener("click", limparE4);

    const botaoCalculeE5 = document.getElementById("btnCalculeE5");
    botaoCalculeE5.addEventListener("click", inverteArray);
    const botaoLimparE5 = document.getElementById("btnLimparE5");
    botaoLimparE5.addEventListener("click", limparE5);

    const botaoCalculeE6 = document.getElementById("btnCalculeE6");
    botaoCalculeE6.addEventListener("click", encontrarNumero);
    const botaoLimparE6 = document.getElementById("btnLimparE6");
    botaoLimparE6.addEventListener("click", limparE6);
}

function imprimePares() {
    for (let i = 1; i < 101; i++) {
        if (i%2 == 0) {
            resultadoE1(i)
        }
    }
}

function menorNumero() {
    let menorE3
    const numero01E3 = document.getElementById("input01E3");
    const numero02E3 = document.getElementById("input02E3");
    let n1E3 =  parseFloat(numero01E3.value);
    let n2E3 =  parseFloat(numero02E3.value);
    if (n1E3 < n2E3) {
            menorE3 = n1E3;  
        } else {
            menorE3 = n2E3;
        }
    const divResultadoE3 = document.getElementById("resultadoE3");
    divResultadoE3.innerHTML = "Menor Número: " + `${menorE3}`;
}

function maiorNumero() {
    let maiorE4
    const numero01E4 = document.getElementById("input01E4");
    const numero02E4 = document.getElementById("input02E4");
    let n1E4 =  parseFloat(numero01E4.value);
    let n2E4 =  parseFloat(numero02E4.value);
    if (n1E4 > n2E4) {
            maiorE4 = n1E4;  
        } else {
            maiorE4 = n2E4;
        }
    const divResultadoE4 = document.getElementById("resultadoE4");
    divResultadoE4.innerHTML = "Maior Número: " + `${maiorE4}`;
}

function resultadoE1(n) {
    const divResultadoE1 = document.getElementById("resultadoE1");
    const textoNovo = divResultadoE1.innerText + " " + `${n}` + " - ";
    divResultadoE1.innerHTML=  textoNovo;
}

function calculaMedia() {
    const numero01E2 = document.getElementById("input01E2");
    const numero02E2 = document.getElementById("input02E2");
    const numero03E2 = document.getElementById("input03E2");
    let n1E2 = numero01E2.value;
    let n2E2 = numero02E2.value;
    let n3E2 = numero03E2.value;
    let mediaE2 = (parseFloat(n1E2) + parseFloat(n2E2) + parseFloat(n3E2))/3;
    const divResultadoE2 = document.getElementById("resultadoE2");
    divResultadoE2.innerHTML = "Média: " + `${mediaE2}`;
}

function inverteArray() {
    let n1E5 = new Array;
    let passagem = "";
    let passagem2;
    for (let i = 0; i < 12 ; i++) {
        passagem = "input01E5" + i;
        passagem2 = document.getElementById(passagem).value;
        if (passagem2 != "") {
            n1E5.push(Number(passagem2));
        }
    }
    let respostaN1E5 = n1E5.reverse();
    const divResultadoE5 = document.getElementById("resultadoE5");
    divResultadoE5.innerHTML = "Array Invertida: [" + `${respostaN1E5}` + "]";
}

function encontrarNumero() {
    let n1E6 = new Array;
    let passagem = "";
    let passagem2;
    for (let i = 0; i < 12 ; i++) {
        passagem = "input01E6" + i;
        passagem2 = document.getElementById(passagem).value;
        if (passagem2 != "") {
            n1E6.push(Number(passagem2));
        }
    }
    let contador = 0;
    let numero = Number(document.getElementById("input01E6").value);
    const divResultadoE6 = document.getElementById("resultadoE6");
    for (let k = 0; k < n1E6.length ; k++) {
        if (n1E6[k] == numero) {
            contador++
            divResultadoE6.innerHTML = "Número Encontrado na Array: " + `${n1E6[k]}` + "  (" + `${contador}` + "x)."; 
        }
    }
    if (contador == 0) {
        divResultadoE6.innerHTML = "Número não encontrado na Array.";      
    }  
}

function limparE1() {
    const divResultadoE1 = document.getElementById("resultadoE1");
    divResultadoE1.innerHTML = "-";
}

function limparE2() {
    document.getElementById("input01E2").value = "";
    document.getElementById("input02E2").value = "";
    document.getElementById("input03E2").value = "";
    const divResultadoE2 = document.getElementById("resultadoE2");
    divResultadoE2.innerHTML = "Média: -";
}

function limparE3() {
    document.getElementById("input01E3").value = "";
    document.getElementById("input02E3").value = "";
    const divResultadoE3 = document.getElementById("resultadoE3");
    divResultadoE3.innerHTML = "Menor Número: - ";
}

function limparE4() {
    document.getElementById("input01E4").value = "";
    document.getElementById("input02E4").value = "";
    const divResultadoE4 = document.getElementById("resultadoE4");
    divResultadoE4.innerHTML = "Maior Número: - ";
}

function limparE5() {
    document.getElementById("input01E50").value = "";
    document.getElementById("input01E51").value = "";
    document.getElementById("input01E52").value = "";
    document.getElementById("input01E53").value = "";
    document.getElementById("input01E54").value = "";
    document.getElementById("input01E55").value = "";
    document.getElementById("input01E56").value = "";
    document.getElementById("input01E57").value = "";
    document.getElementById("input01E58").value = "";
    document.getElementById("input01E59").value = "";
    document.getElementById("input01E510").value = "";
    document.getElementById("input01E511").value = "";
    const divResultadoE5 = document.getElementById("resultadoE5");
    divResultadoE5.innerHTML = "Array Invertida: - ";
}

function limparE6() {
    document.getElementById("input01E60").value = "";
    document.getElementById("input01E61").value = "";
    document.getElementById("input01E62").value = "";
    document.getElementById("input01E63").value = "";
    document.getElementById("input01E64").value = "";
    document.getElementById("input01E65").value = "";
    document.getElementById("input01E66").value = "";
    document.getElementById("input01E67").value = "";
    document.getElementById("input01E68").value = "";
    document.getElementById("input01E69").value = "";
    document.getElementById("input01E610").value = "";
    document.getElementById("input01E611").value = "";
    document.getElementById("input01E6").value = "";
    const divResultadoE6 = document.getElementById("resultadoE6");
    divResultadoE6.innerHTML = "Verificando...";
}

