const display = document.getElementById('display');
const numeros =  document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');
const limpar = document.getElementById('limparDisplay');
const limparCalculo = document.getElementById("limparCalculo");
const igual = document.getElementById('igual');
const backspace = document.getElementById('backspace')

var numeroAnterior;
var novoNumero = true;
var operador;

function Calculadora(){

    this.capturasClick = ()=>{
        document.addEventListener('click', event =>{
            const clic = event.target;
            if(clic.classList.contains('=')){
                const numeroAtual = display.textContent;
                const resultado = calcular(parseFloat(numeroAnterior), operador, parseFloat(numeroAtual));
                console.log(resultado.toFixed(2));
                const paraEditar = resultado.toFixed(2);
                display.textContent = paraEditar

            }else if(clic.classList.contains('backspace')){
                const valorDisplay = display.textContent;
                const novoValor = valorDisplay.slice(0,-1);
                display.textContent = novoValor;
            }
        });
    }

    this.inciar = ()=>{
        this.capturasClick()
    }

    numeros.forEach((numero)=>{
        numero.addEventListener('click', ()=>{
            if(novoNumero){
                display.textContent =  numero.textContent;
                novoNumero = false;
            }else{
                display.textContent +=  numero.textContent;
            }
        })
    })
 
    
    limpar.addEventListener('click', () =>{
        display.textContent = '';
        numeroAnterior = '';
        numeroAtual = '';
    });
    
    operadores.forEach((op)=>{
        op.addEventListener('click', ()=>{
            if(!novoNumero){
                numeroAnterior = display.textContent;
                operador = op.textContent;
                novoNumero = true;
            }
        })
    });

    
    limparCalculo.addEventListener('click', ()=>{
        display.textContent = '';
        numeroAnterior = '';
        numeroAtual = '';
    });

}

const calculadora = new Calculadora();
calculadora.inciar();

function calcular(numero1, operador, numero2){
    switch(operador){
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            return numero1 / numero2;
        default:
            return '';
    }
}
