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

//essa é uma reducer
const historicoDePedidosDeCashbackReducer = (historicoDePedidosDeCashbackAtual = [], acao) => {
    if (acao.type === "SOLICITAR_CASHBACK"){
        return [
            ...historicoDePedidosDeCashbackAtual,
            acao.payload    
        ]
    }
    return historicoDePedidosDeCashbackAtual
}

//essa é uma outra função reducer
const caixaReducer = (dinheiroEmCaixa = 0, acao) => {
    //se a ação for SOLICITAR_CASHBACK, reduzir o valor do caixa
    if (acao.type === "SOLICITAR_CASHBACK"){
        dinheiroEmCaixa -= acao.payload.valor
    }
    //senão se a ação for CRIAR_CONTRATO, aumentar o valor do caixa
    else if (acao.type == "CRIAR_CONTRATO"){
        dinheiroEmCaixa += acao.payload.taxa
    }
    //senão, somente devolver a fatia de estado envolvida
    return dinheiroEmCaixa
}


