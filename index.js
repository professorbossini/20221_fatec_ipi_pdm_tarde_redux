//essa função é uma função criadora de ação
//ou seja, ela devolve um objeto JSON
//uma ação é um objeto JSON
const criarContrato = (nome, taxa) => {
    //esse JSON que ela devolve é uma ação
    return {
        type: "CRIAR_CONTRATO",
        payload: {
            nome, taxa
        }
    }
}

//essa também é criadora de ação
const cancelarContrato = function (nome){
    //esse objeto também é uma ação
    return {
        type: "CANCELAR_CONTRATO",
        payload: { nome }
    }
}
//essa função também é uma criadora de ação
const solicitarCashback = (nome, valor) => {
    //também é uma ação
    return {
        type: "SOLICITAR_CASHBACK",
        payload: {
            nome, valor
        }
    }

}