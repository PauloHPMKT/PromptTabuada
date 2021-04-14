//------------------------DATA INPUT-----------------------------
let dataTabuada = prompt('Digite qual tabuada voce quer saber:')
if(dataTabuada === '' || dataTabuada === null) {
    alert('Digite um número')
    cleanData()
}

let tabuada = Number(dataTabuada)


//------------------------CALC PARAMETER-----------------------------
for(let i = 1; i <= 10; i++) {
    let result = tabuada * i

    let messenge = `${tabuada} x ${i} = ${result} </br>`
    document.write(messenge)
}

//------------------------FUNCTION TO EMPTY DATA INPUT-----------------------------
function cleanData() {
    messenge.value = ''
}




