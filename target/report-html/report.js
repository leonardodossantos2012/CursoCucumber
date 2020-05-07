$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:CursoCucumber/src/test/resource/features/alugar_filme.feature");
formatter.feature({
  "name": "Alugar Filme",
  "description": "  Como um usuário\n  Eu quero cadastrar aluguéis de filmes\n  Para controlar preços e datas de entrega",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "um filme",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.umFilme(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "When "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será R$ 3",
  "keyword": "Then "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 1 dia",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o estoque do filme será 1 unidade",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Não deve alugar filme sem estoque",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Given "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.umFilmeComEstoqueDeUnidades(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "When "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "não será possível por falta de estoque",
  "keyword": "Then "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.nãoSeráPossívelPorFaltaDeEstoque()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o estoque do filme será 0 unidade",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.oEstoqueDoFilmeSeráUnidade(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.step({
  "name": "que o preço do aluguel seja R$ \u003cpreco\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "que o tipo do aluguel seja \u003ctipo\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "alugar",
  "keyword": "When "
});
formatter.step({
  "name": "o preço do aluguel será R$ \u003cvalor\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "a data de entrega será em \u003cqtdDias\u003e dias",
  "keyword": "And "
});
formatter.step({
  "name": "a pontuação será de \u003cpontuacao\u003e pontos",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "preco",
        "tipo",
        "valor",
        "qtdDias",
        "pontuacao"
      ]
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "3",
        "2"
      ]
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ]
    },
    {
      "cells": [
        "5",
        "extendido",
        "10",
        "3",
        "2"
      ]
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ]
    },
    {
      "cells": [
        "5",
        "semanal",
        "15",
        "7",
        "3"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.umFilmeComEstoqueDeUnidades(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja R$ 4",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.queOPrecoDoAluguelSejaR$(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja extendido",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.queOTipoDoAluguelSejaExtendido(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "When "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será R$ 8",
  "keyword": "Then "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 3 dias",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação será de 2 pontos",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.aPontuaçãoSeráDePontos(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.umFilmeComEstoqueDeUnidades(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja R$ 4",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.queOPrecoDoAluguelSejaR$(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja comum",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.queOTipoDoAluguelSejaExtendido(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "When "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será R$ 4",
  "keyword": "Then "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 1 dias",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação será de 1 pontos",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.aPontuaçãoSeráDePontos(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.umFilmeComEstoqueDeUnidades(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja R$ 5",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.queOPrecoDoAluguelSejaR$(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja extendido",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.queOTipoDoAluguelSejaExtendido(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "When "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será R$ 10",
  "keyword": "Then "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 3 dias",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação será de 2 pontos",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.aPontuaçãoSeráDePontos(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.umFilmeComEstoqueDeUnidades(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja R$ 4",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.queOPrecoDoAluguelSejaR$(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja comum",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.queOTipoDoAluguelSejaExtendido(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "When "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será R$ 4",
  "keyword": "Then "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 1 dias",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação será de 1 pontos",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.aPontuaçãoSeráDePontos(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Given "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.umFilmeComEstoqueDeUnidades(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o preço do aluguel seja R$ 5",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.queOPrecoDoAluguelSejaR$(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "que o tipo do aluguel seja semanal",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.queOTipoDoAluguelSejaExtendido(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alugar",
  "keyword": "When "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.alugar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o preço do aluguel será R$ 15",
  "keyword": "Then "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a data de entrega será em 7 dias",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a pontuação será de 3 pontos",
  "keyword": "And "
});
formatter.match({
  "location": "br.ce.wcaquino.steps.AluguelLocadoraStep.aPontuaçãoSeráDePontos(int)"
});
formatter.result({
  "status": "passed"
});
});