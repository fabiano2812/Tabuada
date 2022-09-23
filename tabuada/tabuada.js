/* Exemplo de uma tabuada */
    function calcular(){
    let tabuada = document.querySelector("#tb-tabuada tbody")
    let valorA = parseInt(document.querySelector('#valorA').value);


    tabuada.innerHTML = '';
    /* for repetiçao ou lup de uma lista ou da tabuada*/
    for (let valorB = 0; valorB <= 10; valorB++){  

        let resultado = valorA * valorB; 

        let template = `
        <tr>
            <td>${valorA}</td>
            <td>x</td>
            <td>${valorB}</td>
            <td>=</td>
            <td>${resultado}</td>
        </tr>
    `;
    let tr = document.createElement('tr');

    tr.innerHTML = template;

    tabuada.append(tr);
    } 
}
calcular();

document.querySelector('#valorA').addEventListener('change', calcular);